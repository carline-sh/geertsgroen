import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import "../app.css";

export const Route = createRootRoute({
    component: RootLayout,
});

function RootLayout() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}
