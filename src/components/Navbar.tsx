import { Link } from "@tanstack/react-router";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useScrollToSection } from "../lib/scroll";

export function Navbar() {
    const scrollToSection = useScrollToSection();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateToSection = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="w-full bg-[#2E3A2B]/60 backdrop-blur-sm h-20 px-4 fixed top-0 z-50">
                <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="w-44 md:w-auto h-16 shrink-0">
                        <img src="/images/LogoLetterworkWhite.svg" alt="Geerts Groen logo" className="h-16 object-contain" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-4 md:gap-8" aria-label="Hoofdnavigatie">
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
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((wasOpen) => !wasOpen)}
                        className="md:hidden w-11 h-11 flex items-center justify-center text-white hover:text-white/80 transition-colors duration-200 cursor-pointer"
                        aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                    </button>
                </div>
                {isMenuOpen && (
                    <nav
                        id="mobile-navigation"
                        className="md:hidden absolute top-20 inset-x-0 bg-[#2E3A2B]/95 backdrop-blur-sm px-4 py-5 shadow-lg"
                        aria-label="Mobiele navigatie"
                    >
                        <div className="max-w-7xl mx-auto flex flex-col items-start gap-4">
                            <button type="button" onClick={() => navigateToSection("diensten")} className="text-white/80 font-semibold hover:text-white transition-colors duration-200 cursor-pointer">
                                Diensten
                            </button>
                            <button type="button" onClick={() => navigateToSection("projecten")} className="text-white/80 font-semibold hover:text-white transition-colors duration-200 cursor-pointer">
                                Projecten
                            </button>
                            <button type="button" onClick={() => navigateToSection("contact")} className="text-white/80 font-semibold hover:text-white transition-colors duration-200 cursor-pointer">
                                Contact
                            </button>
                        </div>
                    </nav>
                )}
            </div>
            <div className="w-full fixed top-20 inset-x-0 text-white/80 bg-red-500 text-sm px-2 py-1 z-10">
                <p className="font-semibold">Let op, deze website is nog in ontwikkeling!</p>
            </div>
        </>
    );
}
