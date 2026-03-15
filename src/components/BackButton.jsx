import { useNavigate, useLocation } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on all home pages
  if (location.pathname.startsWith("/home")) {
    return null;
  }

  return (
    <button
      className="back-button"
      onClick={() => {
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate("/");
        }
      }}
      aria-label="Go back"
    >
      ←
    </button>
  );
}

export default BackButton;
