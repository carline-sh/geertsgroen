const works = [
    "snoeien",
    "maaien",
    "beplanting",
    "onderhoud",
    "plant speciaalzorg",
    "tuinontwerp",
    "bomen",
    "struiken",
    "renovatie",
    "en alles groen"
];

const icons = ["🌿", "✂️", "🌱", "🧹", "🌺", "📐", "🌳", "🌲", "🏡", "🍀"];

export function Works() {
    return (
        <div
            id="diensten"
            className="w-full bg-cover bg-bottom relative scroll-mt-28"
            style={{ backgroundImage: `url(/werkbg.jpg)` }}
        >
            <div className="absolute inset-0 bg-[#FDC005]/60 backdrop-blur-sm" />
            <div className="relative max-w-7xl mx-auto wrap-break-word px-4 md:px-8 py-16 md:py-28">
                <div className="max-w-5xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl merriweather-bold text-white text-center">
                        Wat wij doen
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {works.map((work, i) => (
                            <div
                                key={work}
                                className="bg-white/20 backdrop-blur text-white p-4 rounded-xl hover:bg-white/30 hover:scale-[1.02] transition-all duration-200 cursor-default"
                            >
                                <span className="mr-3 text-lg">{icons[i]}</span>
                                <span className="font-bold capitalize">{work}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
