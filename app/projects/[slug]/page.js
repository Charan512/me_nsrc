import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Sri Ram Charan Nalla`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.screenshots?.[0] || "/api/og"],
    },
    alternates: {
      canonical: `https://nsrcharan.vercel.app/projects/${project.slug}`,
    }
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": "WebApplication",
    "url": project.demoUrl || project.github,
    "offers": {
      "@type": "Offer",
      "price": "0"
    }
  };

  return (
    <article className="min-h-screen bg-bg text-txt pt-32 pb-24 px-4 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-txt-dim hover:text-accent transition-colors mb-8 font-mono text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{project.title}</h1>
        <p className="text-xl md:text-2xl text-txt-mid leading-relaxed font-medium mb-8">
          {project.overview || project.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-accent text-white font-bold hover:brightness-110 transition-all flex items-center gap-2">
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-bg2/80 border border-white/10 hover:border-accent/50 transition-all flex items-center gap-2">
              Source Code <FiGithub className="w-4 h-4" />
            </a>
          )}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-12">
            <img 
              src={project.screenshots[0]} 
              alt={`${project.title} screenshot`} 
              className="w-full rounded-2xl border border-white/10"
            />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-3">
              {project.keyFeatures?.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-txt-mid leading-relaxed">
                  <span className="text-accent mt-1">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-accent/10 text-accent font-mono text-xs border border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.architectureNotes && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Architecture</h3>
                <p className="text-txt-mid leading-relaxed">{project.architectureNotes}</p>
              </div>
            )}
            
            {project.outcome && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Outcome</h3>
                <p className="text-txt-mid leading-relaxed">{project.outcome}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
