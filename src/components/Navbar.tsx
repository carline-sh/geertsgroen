import { Link } from "@tanstack/react-router";

export function Navbar() {
    return (
        <div className="w-full bg-[#2E3A2B]/60 backdrop-blur-sm h-20 px-4 fixed top-0 z-50">
            <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between">
                <Link to="/" className="h-16">
                    <img src="/images/LogoLetterworkWhite.svg" alt="Geerts Groen logo" className="w-full h-16 object-contain" />
                </Link>
                <nav className="flex items-center gap-4 md:gap-8">
                    
                    <Link
                        to="/"
                        hash="diensten"
                        className="text-white/80 font-semibold hover:text-white transition-colors duration-200"
                    >
                        Diensten
                    </Link>
                    <Link
                        to="/"
                        hash="projecten"
                        className="text-white/80 font-semibold hover:text-white transition-colors duration-200"
                    >
                        Projecten
                    </Link>
                    <Link
                        to="/"
                        hash="contact"
                        className="text-white/80 font-semibold hover:text-white transition-colors duration-200"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    );
}
