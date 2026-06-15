import { FaWhatsapp } from "react-icons/fa";
import { PHONE } from "../config";

export function Hero() {
    return (
        <div className="w-full min-h-[65vh] bg-[#b69aeb] flex items-end">
            <div className="max-w-7xl mx-auto wrap-break-word grid grid-cols-1 md:grid-cols-2 h-full gap-8">
                <div className="flex items-end h-full">
                    <img src="/public/broski.webp" className="max-h-[60vh]" />
                </div>
                <div className="flex h-full items-end py-24">
                    <div className="text-white space-y-4">
                        <div className="text-2xl">
                            Wij zijn cool en deze text moet beter
                        </div>
                        <div>
                            als jij dat ook vind stuur ons een berichtje hieronder
                        </div>
                        <a href={"https://wa.me/" + PHONE} className="font-sans flex items-center gap-2 border-2 bg-white border-white text-[#efc51e] font-bold px-4 py-2 w-fit" target="_blank">
                            <FaWhatsapp />
                            <span>Stuur ons een berichtje!</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
