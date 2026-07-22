import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
    formatProjectDate,
    getCategoryLabel,
    getProjectCoverImage,
    getProjects,
} from "../lib/projects";

export function ProjectsCarousel() {
    const projects = getProjects();

    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

    const resetTimer = useCallback(() => {
        clearInterval(timerRef.current);
        if (projects.length <= 1) return;

        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 6000);
    }, [projects.length]);

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, [resetTimer]);

    const goTo = useCallback(
        (index: number) => {
            setCurrent(index);
            resetTimer();
        },
        [resetTimer],
    );

    if (projects.length === 0) {
        return null;
    }

    const project = projects[current];
    const coverImage = getProjectCoverImage(project);
    const categoryLabel = getCategoryLabel(project.category);

    return (
        <section id="projecten" className="w-full bg-[#F5F0E6] scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 md:mb-12">
                    <h2 className="text-3xl md:text-4xl miranda-sans-bold text-[#2E3A2B]">
                        Projecten
                    </h2>
                    <p className="text-lg text-[#2E3A2B]/75 leading-relaxed">
                        Bekijk een selectie van tuinprojecten die ik heb uitgevoerd.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {projects.length > 1 && (
                        <>
                            <button
                                onClick={() => goTo((current - 1 + projects.length) % projects.length)}
                                className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 text-[#2E3A2B]/40 hover:text-[#2E3A2B] text-3xl md:text-4xl transition-colors duration-200 cursor-pointer"
                                aria-label="Vorig project"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() => goTo((current + 1) % projects.length)}
                                className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 text-[#2E3A2B]/40 hover:text-[#2E3A2B] text-3xl md:text-4xl transition-colors duration-200 cursor-pointer"
                                aria-label="Volgend project"
                            >
                                ›
                            </button>
                        </>
                    )}

                    <Link
                        to="/projecten/$slug"
                        params={{ slug: project.slug }}
                        className="group block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div
                                className="min-h-56 md:min-h-80 bg-cover bg-center bg-[#2E3A2B]/10"
                                style={
                                    coverImage
                                        ? { backgroundImage: `url(${coverImage})` }
                                        : undefined
                                }
                            >
                                {!coverImage && (
                                    <div className="h-full min-h-56 md:min-h-80 flex items-center justify-center bg-linear-to-br from-[#2E3A2B] to-[#4A5A45]">
                                        <span className="text-white/70 text-lg miranda-sans-bold px-6 text-center">
                                            {project.title}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 md:p-8 flex flex-col justify-center gap-4">
                                {categoryLabel && (
                                    <span className="inline-flex w-fit rounded-full bg-[#2E3A2B]/10 text-[#2E3A2B] px-3 py-1 text-sm font-semibold">
                                        {categoryLabel}
                                    </span>
                                )}
                                <h3 className="text-2xl md:text-3xl miranda-sans-bold text-[#2E3A2B] group-hover:underline">
                                    {project.title}
                                </h3>
                                <p className="text-[#2E3A2B]/70">
                                    {project.description ?? "Bekijk dit project voor meer details."}
                                </p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#2E3A2B]/60">
                                    <span>{formatProjectDate(project.date)}</span>
                                    {project.location && <span>{project.location}</span>}
                                </div>
                                <span className="text-[#2E3A2B] font-semibold group-hover:underline">
                                    Bekijk project →
                                </span>
                            </div>
                        </div>
                    </Link>

                    {projects.length > 1 && (
                        <div className="flex justify-center gap-2 mt-6">
                            {projects.map((item, index) => (
                                <button
                                    key={item.slug}
                                    onClick={() => goTo(index)}
                                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                        index === current
                                            ? "w-6 bg-[#2E3A2B]"
                                            : "w-2 bg-[#2E3A2B]/30 hover:bg-[#2E3A2B]/50"
                                    }`}
                                    aria-label={`Project ${index + 1}: ${item.title}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
