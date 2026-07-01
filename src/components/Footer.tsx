import { FiMail, FiPhone } from "react-icons/fi";
import { EMAIL, KVK, PHONE } from "../config";

export function Footer() {
    return (
        <div className="w-full -mt-6" style={{ backgroundImage: `url(/public/grondvoorvoeter.png)` }}>
            <div className="w-full max-w-7xl mx-auto min-h-48 md:min-h-64 text-white pt-12 px-4">
                <div className="h-20">
                    <img src="/public/LogoLetterworkWhite.svg" alt="logo" className="h-20 object-contain " />
                </div>
                <div className="pl-4 pt-2">
                    <div className="flex items-center gap-2">
                        <FiPhone />
                        <a href={"tel:" + PHONE} className="link">{PHONE}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiMail />
                        <a href={"mailto:" + EMAIL} className="link">{EMAIL}</a>
                    </div>
                    <div>kvk: {KVK}</div>
                </div>
            </div>
        </div>
    );
}
