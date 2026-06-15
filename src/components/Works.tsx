type WerkDing = {
    text: string;
    icon?: React.ReactNode;
    image?: string;
};

const works: WerkDing[] = [
    {
        text: "snoeien",
    },
    {
        text: "maaien"
    },
    {
        text: "beplanting"
    },
    {
        text: "onderhoud"
    },
    {
        text: "plant speciaalzorg"
    },
    {
        text: "tuinontwerp",
    },
    {
        text: "bomen"
    },
    {
        text: "struiken"
    },
    {
        text: "renovatie"
    },
    {
        text: "en alles groen"
    }
];

export function Works() {
    return (
        <div
            className="w-full bg-cover bg-bottom"
            style={{ backgroundImage: `url(/public/werkbg.jpg)` }}
        >
            <div className="max-w-7xl mx-auto wrap-break-word md:py-4 md:px-8">
                <div className="bg-[#efc51e]/60 backdrop-blur-sm p-4 md:px-10 md:py-8 max-w-5xl mx-auto space-y-4 md:my-24">
                    <div className="text-2xl font-bold text-white text-center">Wat wij doen</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            works.map((work) => (
                                <div key={work.text} className="text-white p-2">
                                    <div className="font-bold">{work.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
