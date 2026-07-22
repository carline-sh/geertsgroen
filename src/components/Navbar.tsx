import { Link } from "@tanstack/react-router";
import { useScrollToSection } from "../lib/scroll";

export function Navbar() {
    const scrollToSection = useScrollToSection();

    return (
        <div className="w-full bg-[#2E3A2B]/60 backdrop-blur-sm h-20 px-4 fixed top-0 z-50">
            <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="h-16">
                    <img src="/images/LogoLetterworkWhite.svg" alt="Geerts Groen logo" className="w-full h-16 object-contain" />
                </Link>
                <nav className="flex items-center gap-4 md:gap-8">
                    <h1 className="text-white/80 font-semibold bg-red-500 text-sm px-2 py-1 rounded-md">Let op, deze website is nog in ontwikkeling!</h1>
                    <button
                        type="button"
                        onClick={() => scrollToSection("diensten")}
                        className="text-white/80 font-semibold hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                        Diensten
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection("projecten")}
                        className="text-white/80 font-semibold hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                        Projecten
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection("contact")}
                        className="text-white/80 font-semibold hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </div>
    );
}
