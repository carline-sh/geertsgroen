import { Link, getRouteApi } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import {
    formatProjectDate,
    getCategoryLabel,
    getProjectBySlug,
    getProjectCoverImage,
} from "../lib/projects";

const projectRoute = getRouteApi("/projecten/$slug");

export function ProjectPage() {
    const { slug } = projectRoute.useParams();
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-32 text-center space-y-6">
                <h1 className="text-3xl miranda-sans-bold text-[#2E3A2B]">Project niet gevonden</h1>
                <p className="text-[#2E3A2B]/75">Dit project bestaat niet of is verwijderd.</p>
                <Link
                    to="/"
                    className="inline-flex items-center text-[#2E3A2B] font-semibold hover:underline"
                >
                    Terug naar home
                </Link>
            </div>
        );
    }

    const coverImage = getProjectCoverImage(project);
    const categoryLabel = getCategoryLabel(project.category);
    const galleryImages = project.images.slice(1);

    return (
        <article className="w-full bg-[#F5F0E6]">
            <div className="relative w-full min-h-[40vh] md:min-h-[50vh] bg-[#2E3A2B]">
                {coverImage ? (
                    <img
                        src={coverImage}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-[#2E3A2B] to-[#4A5A45]" />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/20" />
                <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-28 pb-12 md:pb-16 text-white space-y-4">
                    <Link
                        to="/"
                        hash="projecten"
                        className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200"
                    >
                        ← Terug naar projecten
                    </Link>
                    <h1 className="text-3xl md:text-5xl miranda-sans-bold leading-tight">{project.title}</h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/80">
                        {categoryLabel && <span>{categoryLabel}</span>}
                        <span>{formatProjectDate(project.date)}</span>
                        {project.location && <span>{project.location}</span>}
                        {project.client && <span>{project.client}</span>}
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-10">
                {project.description && (
                    <p className="text-xl text-[#2E3A2B]/85 leading-relaxed">{project.description}</p>
                )}

                {project.body && (
                    <div className="space-y-4 text-[#2E3A2B]/80 leading-relaxed text-lg [&_p]:mb-4 [&_img]:my-6 [&_img]:w-full [&_img]:rounded-xl [&_img]:object-cover">
                        <ReactMarkdown
                            components={{
                                img: ({ src, alt }) => (
                                    <img src={src} alt={alt || project.title} className="w-full rounded-xl object-cover" />
                                ),
                            }}
                        >
                            {project.body}
                        </ReactMarkdown>
                    </div>
                )}

                {galleryImages.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {galleryImages.map((item) => (
                            <img
                                key={item.image}
                                src={item.image}
                                alt={project.title}
                                className="w-full rounded-xl object-cover aspect-4/3"
                            />
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
