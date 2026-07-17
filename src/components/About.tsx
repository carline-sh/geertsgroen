import { heading, body, highlights } from '../../content/about.json';

export function About() {
    return (
        <section id="over-ons" className="w-full bg-[#F5F0E6] scroll-mt-28">
            <div className="max-w-7xl mx-auto wrap-break-word px-4 md:px-8 py-16 md:py-24">
                <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl md:text-4xl merriweather-bold text-[#2E3A2B]">
                            {heading}
                        </h2>
                        <p className="text-lg text-[#2E3A2B]/80 leading-relaxed">
                            {body}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="bg-[#2E3A2B]/10 rounded-xl p-5 md:p-6 space-y-2 shadow-sm"
                            >
                                <h3 className="merriweather-bold text-[#2E3A2B]">{item.title}</h3>
                                <p className="text-[#2E3A2B]/75 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
