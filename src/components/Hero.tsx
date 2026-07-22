import { useState, useEffect, useCallback, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappNumber } from "../../content/company.json";
import { title, subtitle, ctaText, images } from '../../content/hero.json';

export function Hero() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const interactedRef = useRef(false);

    const resetTimer = useCallback(() => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
    }, []);

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, [resetTimer]);

    const goTo = useCallback((i: number) => {
        setFade(false);
        setTimeout(() => {
            setCurrent(i);
            setFade(true);
        }, 200);
        interactedRef.current = true;
        resetTimer();
    }, [resetTimer]);

    return (
        <div id="top" className="w-full min-h-[80vh] relative flex items-end overflow-hidden">
            {images.map((src, i) => (
                <div
                    key={src.image}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                    style={{
                        backgroundImage: `url(${src.image})`,
                        opacity: i === current && fade ? 1 : 0,
                    }}
                />
            ))}

            <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/40" />

            <button
                onClick={() => goTo((current - 1 + images.length) % images.length)}
                className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white text-3xl md:text-4xl transition-colors duration-200 cursor-pointer"
                aria-label="Vorige foto"
            >
                ‹
            </button>
            <button
                onClick={() => goTo((current + 1) % images.length)}
                className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white text-3xl md:text-4xl transition-colors duration-200 cursor-pointer"
                aria-label="Volgende foto"
            >
                ›
            </button>

            <div className="relative max-w-7xl mx-auto px-4 md:px-0 wrap-break-word grid grid-cols-1 md:grid-cols-2 h-full gap-8 w-full">
                <div className="flex items-end h-full">
                    {/* <img src={portraitImage} className="max-h-[60vh] select-none" onDragStart={(e) => e.preventDefault()} /> */}
                </div>
                <div className="flex flex-col justify-end h-full pt-16 pb-36">
                    <div className="text-white space-y-6">
                        <div className="font-semibold text-lg tracking-wide opacity-80">
                            {subtitle}
                        </div>
                        <div className="text-3xl md:text-4xl miranda-sans-bold leading-tight">
                            {title}
                        </div>

                        <a
                            href={"https://wa.me/" + whatsappNumber}
                            className="font-sans inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 w-fit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="text-xl" />
                            <span>{ctaText}</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="w-11 h-11 -mx-3 flex items-center justify-center cursor-pointer"
                        aria-label={`Foto ${i + 1}`}
                    >
                        <span className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/60 w-2"}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}
