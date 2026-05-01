import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

console.log("Main entry point executing");
try {
    const rootElement = document.getElementById("root");
    if (!rootElement) throw new Error("Root element not found");
    createRoot(rootElement).render(
        <HelmetProvider>
            <App />
        </HelmetProvider>
    );
    console.log("React app mounted successfully");
} catch (error) {
    console.error("Error mounting React app:", error);
}
