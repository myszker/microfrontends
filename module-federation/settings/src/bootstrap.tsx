import { createRoot } from "react-dom/client";
import App from "./app";

const domNode = document.getElementById("shop2");
if (domNode) {
  const root = createRoot(domNode);

  root.render(<App />);
}
