import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { ProjectsCarousel } from "../components/ProjectsCarousel";
import { Works } from "../components/Works";

export function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Works />   
            <ProjectsCarousel />
            <Contact />
        </>
    );
}
