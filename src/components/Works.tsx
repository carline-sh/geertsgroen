import { FaChevronDown } from "react-icons/fa";
import { heading, servicesCategories } from "../../content/services.json";

export function Works() {
    return (
        <section
            id="diensten"
            className="w-full scroll-mt-28 bg-[#2e5713]"
        >
            <div className="max-w-7xl mx-auto wrap-break-word px-4 md:px-8 py-16 md:py-28">
                <div className="max-w-5xl mx-auto space-y-4 md:space-y-12">
                    <h2 className="text-3xl md:text-4xl miranda-sans-bold text-white">
                        {heading}
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 divide-y md:divide-x-3 md:divide-y-0 divide-[#FDC005] ">
                        {servicesCategories.map((category) => (
                            <div
                                key={category.categoryName}
                                className="flex min-w-0 flex-col gap-3 text-white py-4 px-4 md:px-6 first:pl-0 last:pr-0"
                            >
                                <span className="text-lg md:text-xl font-bold leading-snug">
                                    {category.categoryName}
                                </span>
                                {category.services.map((service) => (
                                    <div
                                        key={service.serviceName}
                                        className="flex min-w-0 flex-col gap-3 bg-white/20 text-white rounded-md"
                                    >
                                        <label className="text-lg leading-snug py-4 px-4 md:px-6 group cursor-pointer"
                                        >
                                            <input type="checkbox" className="hidden" />
                                            <span className="flex justify-between items-center gap-2">
                                                <span>{service.serviceName}</span>
                                                <FaChevronDown className="text-[#FDC005] text-xl transition-transform duration-300 group-has-checked:-rotate-90" />
                                            </span>
                                            <span className="hidden text-sm md:text-base leading-snug group-has-checked:block">
                                                {service.serviceDescription}
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
