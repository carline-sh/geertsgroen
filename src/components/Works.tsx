import { heading, servicesList } from "../../content/services.json";

export function Works() {
    return (
        <section
            id="diensten"
            className="w-full scroll-mt-28 bg-[#2e5713]"
        >
            <div className="max-w-7xl mx-auto wrap-break-word px-4 md:px-8 py-16 md:py-28">
                <div className="max-w-5xl mx-auto space-y-4 md:space-y-12">
                    <h2 className="text-3xl md:text-4xl miranda-sans-bold text-white">
                        {heading}
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-none md:grid-flow-col md:grid-rows-3">
                        {servicesList.map((work) => (
                            <div
                                key={work.serviceName}
                                className="flex min-w-0 flex-col gap-3 bg-white/20 text-white rounded-md py-4 px-4 md:px-6"
                            >
                                <span className="text-lg md:text-xl font-bold leading-snug">
                                    {work.serviceName}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
