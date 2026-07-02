export function Navbar() {
    return (
        <div className="w-full bg-[#2E3A2B]/60 backdrop-blur-sm h-20 px-4 fixed top-0 z-50">
            <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between">
                <a href="#top" className="h-16">
                    <img src="/LogoLetterworkWhite.svg" alt="Geerts Groen logo" className="w-full h-16 object-contain" />
                </a>
                <nav className="flex items-center gap-6 md:gap-8">
                    <a
                        href="#diensten"
                        className="text-white/80 font-semibold hover:text-white transition-colors duration-200"
                    >
                        Diensten
                    </a>
                    <a
                        href="#contact"
                        className="text-white/80 font-semibold hover:text-white transition-colors duration-200"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    );
}
