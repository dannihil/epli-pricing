import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function formatPrice(n) {
  return n.toLocaleString("is-IS") + " kr";
}

export function usePricing(productSlug, screenSize) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData([]);

    let query = supabase
      .from("pricing")
      .select("*")
      .eq("product_slug", productSlug)
      .order("chip_order")
      .order("display_order");

    if (screenSize !== undefined && screenSize !== null) {
      query = query.eq("screen_size", screenSize);
    }

    query.then(({ data, error }) => {
      if (error) {
        setError(error);
        setLoading(false);
        return;
      }
      setData(data);
      setLoading(false);
    });

    // Real-time: re-fetch whenever any row in pricing changes
    const channel = supabase
      .channel(`pricing:${productSlug}:${screenSize}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "pricing" },
        () => {
          query.then(({ data }) => {
            if (data) setData(data);
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [productSlug, screenSize]);

  // Group by chip → then by cpu/gpu variant
  // chips: [{ name, variants: [{ cpu, gpu, options: [row] }] }]
  const chipMap = {};
  const chipOrder = [];
  for (const row of data) {
    if (!chipMap[row.chip]) {
      chipMap[row.chip] = { name: row.chip, variants: {} };
      chipOrder.push(row.chip);
    }
    const variantKey = `${row.cpu_cores}/${row.gpu_cores}`;
    if (!chipMap[row.chip].variants[variantKey]) {
      chipMap[row.chip].variants[variantKey] = {
        cpu: row.cpu_cores,
        gpu: row.gpu_cores,
        options: [],
      };
    }
    chipMap[row.chip].variants[variantKey].options.push(row);
  }

  const chips = chipOrder.map((name) => ({
    name,
    variants: Object.values(chipMap[name].variants),
  }));

  // Flat variant list for single-chip pages (Air, Neo)
  const variants = chips.length === 1 ? chips[0].variants : [];

  return { chips, variants, loading, error };
}
