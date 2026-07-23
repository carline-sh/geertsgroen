import { FaWhatsapp } from "react-icons/fa";
import { whatsappNumber, email, phone} from "../../content/company.json";
import { heading, body, whatsappText, emailText, phoneText } from '../../content/contact.json';
import { FiMail, FiPhone } from "react-icons/fi";

export function Contact() {
    return (
        <div id="contact" className="w-full scroll-mt-28 relative bg-[#F5F0E6] pb-12 pt-12">
            {/* <div className="absolute left-0 right-0 -top-8 md:-top-20 z-10 pointer-events-none">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                     <div className="max-w-4xl mx-auto">
                        <img
                            src="/images/cutetak.webp"
                            alt=""
                            className="w-full h-auto select-none"
                            draggable={false}
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div> */}
            <div className="relative max-w-6xl mx-auto rounded-4xl bg-[#FDC005] wrap-break-word py-12 text-white flex items-center justify-center px-12 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-3xl md:text-4xl miranda-sans-bold">{heading}</h2>
                    <p className="text-lg opacity-90">{body}</p>
                        </div>
                    <div className="space-y-4">
                        <a
                            href={"https://wa.me/" + whatsappNumber}
                            className="font-sans flex items-center gap-3 bg-[#2e5713] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FaWhatsapp className="text-xl" />
                            <span>{whatsappText}</span>
                        </a>
                        <a
                            href={"tel:" + phone}
                            className="font-sans flex items-center gap-3 bg-[#2e5713] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiPhone className="text-xl" />
                            <span>{phoneText}</span>
                        </a>
                        <a
                            href={"mailto:" + email}
                            className="font-sans flex items-center gap-3 bg-[#2e5713] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiMail className="text-xl" />
                            <span>{emailText}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
