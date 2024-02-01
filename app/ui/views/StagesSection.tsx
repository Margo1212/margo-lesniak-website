"use client";

import { useResizeHook } from "@/lib/utils/useResizeHook";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { timelineItemClasses } from "@mui/lab";
import Timeline from "@mui/lab/Timeline/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator/TimelineSeparator";

export const StagesSection = ({ stages }: { stages: any[] }) => {
  const size = useResizeHook();
  return (
    <section className="space-y-8">
      <h4 className="text-white font-bold text-3xl">Etapy współpracy</h4>
      <p className="text-text w-1/2">
        Nasza współpraca to płynny proces, zaplanowany w kilku kluczowych
        etapach. Od pierwszego kontaktu po finalne dostosowanie, każdy etap jest
        starannie kierowany, aby zapewnić Ci najwyższą jakość usług.
      </p>
      <div className="">
        <Timeline
          className="box-border"
          position={size.width >= 640 ? "alternate-reverse" : "right"}
          sx={
            size.width <= 640
              ? {
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }
              : null
          }
        >
          {stages?.map((stage: any) => (
            <TimelineItem key={stage.id} className="m-3">
              <TimelineSeparator className="mx-2">
                <TimelineDot sx={{ backgroundColor: "#6F00FF" }}>
                  <AutoAwesomeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className=" px-4 py-6 space-y-6 rounded-3xl shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35]">
                <p className="text-3xl text-left font-extrabold text-primary/30">
                  {stage.stageNumber}
                </p>
                <div className="flex flex-col gap-y-5">
                  <h4 className="text-left text-secondary text-xl">
                    {stage.title}
                  </h4>
                  {stage.description.map((text: any) => (
                    <div key={text.type} className="even:text-left">
                      {text.children.map((p: any) => (
                        <p
                          key={p.text}
                          className="font-medium text-text text-sm"
                        >
                          {p.text}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};
