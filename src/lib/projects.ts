import { parse as parseYaml } from "yaml";

export interface Project {
    slug: string;
    title: string;
    date: string;
    client?: string;
    location?: string;
    category?: string;
    description?: string;
    images: { image: string }[];
    body: string;
}

interface ProjectFrontmatter {
    title?: string;
    date?: string | Date;
    client?: string;
    location?: string;
    category?: string;
    description?: string;
    images?: { image: string }[];
}

const categoryLabels: Record<string, string> = {
    tuinontwerp: "Tuinontwerp",
    beplanting: "Beplanting",
    onderhoud: "Onderhoud",
    renovatie: "Renovatie",
    "bomen-struiken": "Bomen & Struiken",
    overig: "Overig",
};

const projectFiles = import.meta.glob("../../content/projecten/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>;

function slugFromPath(path: string): string {
    const filename = path.split("/").pop() ?? "";
    return filename.replace(/\.md$/, "");
}

function parseFrontmatter(raw: string): { data: ProjectFrontmatter; content: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

    if (!match) {
        return { data: {}, content: raw };
    }

    const data = (parseYaml(match[1]) as ProjectFrontmatter | null) ?? {};
    return { data, content: match[2] ?? "" };
}

function normalizeDate(date: string | Date | undefined): string {
    if (!date) return "";
    if (date instanceof Date) return date.toISOString().slice(0, 10);
    return String(date);
}

export function getCategoryLabel(category?: string): string | undefined {
    if (!category) return undefined;
    return categoryLabels[category] ?? category;
}

export function formatProjectDate(date: string): string {
    return new Date(date).toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export function getProjects(): Project[] {
    return Object.entries(projectFiles)
        .map(([path, raw]) => {
            const { data, content } = parseFrontmatter(raw);

            return {
                slug: slugFromPath(path),
                title: data.title ?? slugFromPath(path),
                date: normalizeDate(data.date),
                client: data.client,
                location: data.location,
                category: data.category,
                description: data.description,
                images: data.images ?? [],
                body: content.trim(),
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
    return getProjects().find((project) => project.slug === slug);
}

export function getProjectCoverImage(project: Project): string | undefined {
    return project.images[0]?.image;
}
