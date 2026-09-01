import { useEffect, useState } from 'react';
import { heading, body, highlights, aboutBody, galleryImages } from '../../content/about.json';

export function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % galleryImages.length);
        }, 4000);

        return () => window.clearInterval(interval);
    }, []);

    const currentImage = galleryImages[activeIndex];

    return (
        <section id="over-ons" className="w-full bg-[#F5F0E6] scroll-mt-28">
            <div className="max-w-6xl mx-auto wrap-break-word px-4 md:px-8 py-16 md:py-24">
                <div className="space-y-10 md:space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 items-start">
                        <div className="w-full max-w-[25rem] md:max-w-none mx-auto md:mx-0">
                            <div className="relative overflow-hidden rounded-[1.6rem] bg-transparent">
                                <div className="aspect-[3/4] w-full overflow-hidden">
                                    <img
                                        src={currentImage.image}
                                        alt={currentImage.alt || 'Geerts Groen'}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 rounded-full bg-black/45 px-4 py-1.5 backdrop-blur-[1px]">
                                    {galleryImages.map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setActiveIndex(index)}
                                            aria-label={`Foto ${index + 1}`}
                                            className="w-11 h-4 -mx-3 flex items-center justify-center cursor-pointer"
                                        >
                                            <span className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80 w-2'}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl miranda-sans-bold text-[#2E3A2B]">
                                    {heading}
                                </h2>
                                <p className="text-[#2E3A2B]/80 leading-relaxed">
                                    {body}
                                </p>
                            </div>
                            {highlights.map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-xl p-5 md:p-6 space-y-2 shadow-sm"
                                >
                                    <h3 className="miranda-sans-bold text-[#2E3A2B]">{item.title}</h3>
                                    <p className="text-[#2E3A2B]/75 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                            <div className="space-y-4">
                                <p className="text-[#2E3A2B]/80 leading-relaxed">
                                    {aboutBody}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
