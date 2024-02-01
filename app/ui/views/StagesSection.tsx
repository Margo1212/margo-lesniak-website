import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Timeline from "@mui/lab/Timeline/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator/TimelineSeparator";

export const StagesSection = ({ stages }: { stages: any[] }) => {
  return (
    <section className="space-y-6">
      <h4 className="text-white font-bold text-2xl">Etapy współpracy</h4>
      <div className="">
        <Timeline className="w-full" position="alternate">
          {stages?.map((stage: any) => (
            <TimelineItem key={stage.id}>
              <TimelineSeparator className="mx-2">
                <TimelineDot sx={{ backgroundColor: "#6F00FF" }}>
                  <AutoAwesomeIcon sx={{ color: "#36FFB5" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="px-4 relative py-8 space-y-6 rounded-3xl shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35]">
                <p className="absolute right-5 text-3xl font-extrabold text-primary/30">
                  {stage.stageNumber}
                </p>
                <div className="flex flex-col gap-y-5">
                  <h4 className="text-left text-secondary text-xl font-semibold">
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
