import { FaWhatsapp } from "react-icons/fa";
import { PHONE } from "../config";

export function Contact() {

    return (
        <div className="w-full bg-[#efc51e]">
            <div className="max-w-7xl mx-auto wrap-break-word py-4 text-white flex items-start justify-between px-4">
                <div className="space-y-2 pt-4 pb-8">
                    <div className="text-2xl font-bold">Contact us</div>
                    <div>sUBTITLE GOES HERE</div>
                    <a href={"https://wa.me/" + PHONE} className="font-sans flex items-center gap-2 border-2 bg-white border-white text-[#efc51e] font-bold px-4 py-2" target="_blank">
                        <FaWhatsapp />
                        <span>Stuur ons een berichtje!</span>
                    </a>
                </div>
                <div>
                    {/* hiero dingen voor rechts */}
                </div>
            </div>
        </div>
    );
}
