import {projects } from "../../lib/data/projects"
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
              <section className="bg-main-bg px-5 laptop:px-24 flex gap-3 pt-10 pb-32  justify-center flex-wrap">
                  {
                      projects.map((project: any) => (
                          <Link href={project.url} target="_blank" className="p-5 shadow-[12px_12px_24px_#191c21,-5px_-5px_11px_#21262d] hover:bg-[#282930]/30 duration-200 rounded-lg text-white min-h-[350px] w-80" key={project.id}>
                          <div >
                              <div className=" w-full h-40"><Image className="rounded-md object-cover w-full h-full" src={project.image} alt={project.title} width={300} height={300} /></div>
                              <div className="space-y-3 py-4"><p className="font-semibold text-lg">{project.title}</p>
                                  <p className="text-sm">{project.description}</p>
                                  <div className="flex gap-x-2">{project.technologies.map((tech: string, idx: any) => (
                                      <p className="text-xs py-1 px-2  border-[1px] border-[#05A66B]/80 rounded-md bg-[#05A66B]/10" key={idx} >{tech}</p>
                                  ))}</div>
                              </div>
                                
                              </div>
                              </Link>
                      ))
                  }
        </section>
      </Suspense>
    </>
  );
}