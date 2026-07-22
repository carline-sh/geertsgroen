import { useNavigate, useRouterState } from "@tanstack/react-router";

export function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function useScrollToSection() {
    const navigate = useNavigate();
    const pathname = useRouterState({ select: (state) => state.location.pathname });

    return (id: string) => {
        if (pathname === "/") {
            scrollToSection(id);
            return;
        }

        void navigate({ to: "/" }).then(() => {
            requestAnimationFrame(() => scrollToSection(id));
        });
    };
}
