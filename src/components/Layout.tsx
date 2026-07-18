import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col miranda-sans">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
        </div>
    );
}
