import { FaWhatsapp } from "react-icons/fa";
import { PHONE } from "../config";

export function Contact() {
    return (
        <div id="contact" className="w-full bg-[#FDC005] scroll-mt-28">
            <div className="max-w-7xl mx-auto wrap-break-word py-12 md:py-16 text-white flex items-center justify-center px-4">
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
