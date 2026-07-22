import { FiMail, FiPhone } from "react-icons/fi";
import { email, companyName, kvk, phone } from "../../content/company.json";

export function Footer() {
    return (
        <div className="relative z-20 w-full -mt-6" style={{ backgroundImage: `url(/images/grondvoorvoeter.png)` }}>
            <div className="w-full max-w-7xl mx-auto min-h-48 md:min-h-64 text-white pt-12 px-4 flex justify-between">
                <div className="">
                    <div className="h-20">
                        <img src="/images/LogoLetterworkWhite.svg" alt={companyName} title={companyName} className="h-20 object-contain " />
                    </div>
                    <div className="pl-4 pt-2">
                        <div className="flex items-center gap-2">
                            <FiPhone />
                            <a href={"tel:" + phone} className="link">{phone}</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiMail />
                            <a href={"mailto:" + email} className="link">{email}</a>
                        </div>
                        <div>kvk: {kvk}</div>
                    </div>
                </div>
                <div className="relative grow">
                    <div className="absolute bottom-0 right-0">
                        <img src="/images/broski4.png" className="w-64" />
                    </div>
                </div>
            </div>
        </div>
    );
}
