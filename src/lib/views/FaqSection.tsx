import {faq } from "../data/faq"
import Accordion from "@mui/material/Accordion/Accordion"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary"
import Typography from "@mui/material/Typography/Typography"
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails"

export const FaqSection = () => {
    console.log(faq.faq)
    return (
        <section className="relative bg-main-bg flex flex-col laptop:py-14 items-center justify-center px-3 gap-y-5 py-20">
      
      <h2 className="text-4xl text-white font-medium">
          FAQ
        </h2>
      {faq.faq ? (
        <div className=" w-full desktop:w-[800px] mt-8">
          {faq.faq.map((question, i) => (
            <Accordion
              key={i}
              sx={{
                marginBottom: "25px",
                backgroundColor: '#21262d',
                boxShadow: '6px 6px 12px #191c21, -6px -6px 12px #21262d',
                borderBottom: "solid 0.5px #6F00FF",
                overflow: 'hidden'
              }}
            >
              <AccordionSummary
                
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "#6F00FF", marginLeft: "2px" }} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="font-normal text-white">{question.question}</p>
              </AccordionSummary>
              <AccordionDetails >
                <Typography
                  sx={{
                    fontFamily: 'Lato, sans-serif',
                    paddingLeft: "20px",
                    borderLeft: "solid 2px #00FFA2",
                              fontSize: "14px",
                    color: "#AAAEB6",
                              letterSpacing: '0.6px',
                    fontWeight: "100"
                  }}
                >
                  {question.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ) : (
        <h2>No questions founded...</h2>
      )}
    </section>
    )
}
