import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import Typography from "@mui/material/Typography/Typography";
import { FAQItem, FaqSectionProps } from "types/types";

export const FaqSection = ({ faq }: FaqSectionProps) => {
  return (
    <section className="relative flex flex-col laptop:py-14 items-center justify-center px-5 tablet:px-0 gap-y-5 py-20">
      <h2 className="text-4xl text-white font-medium">FAQ</h2>
      {faq.length > 0 ? (
        <div className="w-full desktop:w-[800px] mt-8">
          {faq.map((q: FAQItem) => (
            <Accordion
              key={q.id}
              sx={{
                marginBottom: "25px",
                backgroundColor: "#21262d",
                boxShadow: "2px 2px 8px #131519, -2px -2px 8px #272d35",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    fontSize="medium"
                    sx={{ color: "#6F00FF", marginLeft: "2px" }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="font-normal text-white">{q.question}</p>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    paddingLeft: "20px",
                    borderLeft: "solid 2px #00FFA2",
                    fontSize: "14px",
                    color: "#AAAEB6",
                    letterSpacing: "0.6px",
                    fontWeight: "100",
                  }}
                >
                  {q.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ) : (
        <h2>No questions found...</h2>
      )}
    </section>
  );
};
