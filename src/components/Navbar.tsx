export function Navbar() {
    return (
        <div className="w-full bg-[#788a1d] h-28 text-white px-4">
            <div className="w-full max-w-7xl mx-auto h-full flex items-center gap-4">
                <div className="aspect-square h-20">
                    <img src="/public/logo_opacity_partial.webp" alt="logo" className="w-full h-full object-contain " />
                </div>
                <div className="text-2xl ">
                    Geerts Groen
                </div>
            </div>
        </div>
    );
}
