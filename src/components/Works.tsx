import { heading, backgroundImage, servicesList } from '../../content/services.json';

export function Works() {
    return (
        <section
            id="diensten"
            className="w-full bg-cover bg-bottom relative scroll-mt-28"
            style={{ backgroundImage: "url(" + backgroundImage + ")" }}
        >
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="relative max-w-7xl mx-auto wrap-break-word px-4 md:px-8 py-16 md:py-28">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl miranda-sans-bold text-white text-center">
                        {heading}
                    </h2>

                    <div className="space-y-3">
                        {servicesList.map((work) => (
                            <div
                                key={work.serviceName}
                                className="flex items-center gap-4 bg-white/20 backdrop-blur text-white px-5 py-4 rounded-xl hover:bg-white/30 transition-colors duration-200"
                            >
                                <span className="w-1 self-stretch shrink-0 rounded-full bg-[#FDC005]" />
                                <span className="text-lg md:text-xl font-bold">{work.serviceName}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
