import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import Typography from "@mui/material/Typography/Typography";
import { getFaq } from "../data/faq";

export const FaqSection = async () => {
  const faqData = getFaq();
  const faq = await Promise.resolve(faqData).catch((err) => console.error(err));

  return (
    <section className="relative flex flex-col laptop:py-14 items-center justify-center px-3 laptop:px-0 gap-y-5 py-20">
      <h2 className="text-4xl text-white font-medium">FAQ</h2>
      {faq[0].question ? (
        <div className=" w-full desktop:w-[800px] mt-8">
          {faq[0].question.map((q: any) => (
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
        <h2>No questions founded...</h2>
      )}
    </section>
  );
};
