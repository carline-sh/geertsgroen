import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const photos = [
    "rechteheg",
    "bloemenbij",
    "hout",
    "willemenkruiwagen",
    "cutebloemcloseup",
    "randjegrasmetvoet",
    "willemEnStruik",
];

export function PhotoCarousel() {
    const stripRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<{ pointerId: number; x: number; scrollLeft: number } | null>(null);
    const [atEnd, setAtEnd] = useState(false);

    return (
        <div className="relative bg-[#F5F0E6]">
        <div
            ref={stripRef}
            id="photo-strip"
            role="region"
            aria-label="Tuinfoto's"
            tabIndex={0}
            onScroll={(event) => {
                const strip = event.currentTarget;
                setAtEnd(strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 1);
            }}
            onPointerDown={(event) => {
                if (event.pointerType !== "mouse" || event.button !== 0) return;
                event.preventDefault();
                event.currentTarget.focus({ preventScroll: true });
                dragRef.current = {
                    pointerId: event.pointerId,
                    x: event.clientX,
                    scrollLeft: event.currentTarget.scrollLeft,
                };
                event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
                const drag = dragRef.current;
                if (!drag || drag.pointerId !== event.pointerId) return;
                event.currentTarget.scrollLeft = drag.scrollLeft + drag.x - event.clientX;
            }}
            onPointerUp={(event) => {
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    event.currentTarget.releasePointerCapture(event.pointerId);
                }
                dragRef.current = null;
            }}
            onPointerCancel={() => { dragRef.current = null; }}
            onLostPointerCapture={() => { dragRef.current = null; }}
            className="overflow-x-auto overscroll-x-contain select-none cursor-grab active:cursor-grabbing bg-[#F5F0E6] py-10 md:py-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none"
        >
            <div aria-hidden="true" className="flex w-max gap-6 md:gap-12">
                {[...photos, ...photos, ...photos].map((image, index) => (
                    <img
                        key={`${image}-${index}`}
                        src={`/images/${image}.webp`}
                        alt=""
                        width={1200}
                        height={1600}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="aspect-4/5 w-[68vw] max-w-64 md:h-80 md:w-64 shrink-0 select-none rounded-lg object-cover [-webkit-user-drag:none] [-webkit-touch-callout:none]"
                    />
                ))}
            </div>
        </div>
        <button
            type="button"
            aria-label="Volgende foto"
            aria-controls="photo-strip"
            disabled={atEnd}
            onClick={() => {
                const strip = stripRef.current;
                const track = strip?.firstElementChild;
                if (!strip || !track) return;
                const step = track.children[1].getBoundingClientRect().left
                    - track.children[0].getBoundingClientRect().left;
                strip.scrollBy({
                    left: step,
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
                });
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-black/45 backdrop-blur-[1px] text-white/60 hover:text-white transition-colors duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e5713]"
        >
            <FaArrowRight aria-hidden="true" />
        </button>
        </div>
    );
}
