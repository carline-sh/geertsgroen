import { EMAIL, KVK, PHONE } from "../config";

export function Footer() {
    return (
        <div className="w-full -mt-6" style={{ backgroundImage: `url(/public/grondvoorvoeter.png)` }}>
            <div className="w-full max-w-7xl mx-auto min-h-48 md:min-h-64 text-white pt-12 px-4">
                <div className="text-2xl font-bold">Geerts Groen</div>
                <div>tel: <a href={"tel:" + PHONE} className="link">{PHONE}</a></div>
                <div>email: <a href={"mailto:" + EMAIL} className="link">{EMAIL}</a></div>
                <div className="text-xs">kvk: {KVK}</div>
            </div>
        </div>
    );
}
