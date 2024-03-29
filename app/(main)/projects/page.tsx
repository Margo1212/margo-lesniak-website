import { PagesTitle } from "@/ui/components/PagesTitle/PagesTitle";
import { projects } from "@lib/projects";
import { NextBreadcrumb } from "@ui/components/Breadcrumbs/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section className="px-5 laptop:px-0 gap-3 pt-10 pb-32 space-y-10">
        <PagesTitle>Projekty</PagesTitle>
        <NextBreadcrumb
          homeElement={"Strona Główna"}
          separator={
            <svg
              className="w-6 h-6 text-text"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
          activeClasses="text-amber-500"
          containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
          listClasses="hover:underline mx-2 font-bold text-text"
          capitalizeLinks
        />
        <div className="grid laptop:grid-cols-3 content-center tablet:grid-cols-2 tablet:gap-x-12 grid-cols-1 desktop:gap-x-32 gap-y-14">
          {projects.map((project: any) => (
            <Link
              href={project.url}
              target="_blank"
              className="p-5 hover:-translate-y-3 w-full shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] hover:bg-[#282930]/30 duration-200 rounded-3xl text-white min-h-[350px]"
              key={project.id}
            >
              <div>
                <div className=" w-full h-40">
                  <Image
                    className="rounded-md object-cover w-full h-full"
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="space-y-3 py-4">
                  <p className="font-semibold text-lg">{project.title}</p>
                  <p className="text-sm">{project.description}</p>
                  <div className="flex gap-x-2">
                    {project.technologies.map((tech: string, idx: any) => (
                      <p
                        className="text-xs py-1 px-2  border-[1px] border-[#05A66B]/80 rounded-md bg-[#05A66B]/10"
                        key={idx}
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
