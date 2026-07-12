import { FaWhatsapp } from "react-icons/fa";
import { PHONE } from "../config";

export function Contact() {
    return (
        <div id="contact" className="w-full bg-[#FDC005] scroll-mt-28 relative">
            <div className="absolute left-0 right-0 -top-16 md:-top-20 z-10 pointer-events-none">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <img
                            src="/cutetak.webp"
                            alt=""
                            className="w-full h-auto select-none"
                            draggable={false}
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
            <div className="relative max-w-7xl mx-auto wrap-break-word pt-20 md:pt-28 pb-12 md:pb-16 text-white flex items-center justify-center px-4">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl md:text-4xl merriweather-bold">Contact</h2>
                    <p className="text-lg opacity-90">Neem contact met ons op voor een vrijblijvende offerte.</p>
                    <a
                        href={"https://wa.me/" + PHONE}
                        className="font-sans inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp className="text-xl" />
                        <span>Stuur ons een berichtje!</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
