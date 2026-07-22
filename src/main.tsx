import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

if (window.location.pathname === "/" && window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
}

window.scrollTo(0, 0);

const router = createRouter({
    routeTree,
    scrollRestoration: false,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
