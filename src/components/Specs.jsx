import "../index.css";
import { SPECS } from "../data/specs";

function Specs({ model }) {
  const sections = SPECS[model];

  return (
    <div>
      {sections.map((section) => (
        <div key={section.title}>
          <h3 style={{ marginTop: 0 }}>{section.title}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Specs;
