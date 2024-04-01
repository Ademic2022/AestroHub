import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/system";
import { FAQs } from "../../data/aboutUs";
import {
  Box,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: 12,
  marginBottom: theme.spacing(1),
  backgroundColor: alpha("#fff", 0.2),
  border: "2px solid #5c5c5c",
  "&::before": {
    display: "none",
  },
}));

const AccordionExpand = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box sx={{ margin: "0 auto" }}>
      {/* default open */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ bgcolor: "#0EAD69", borderRadius: "50%", color: "#fff" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            textAlign="left"
            color="#fff"
            fontSize={{ xs: 21, md: 23 }}
          >
            What is Aestrohub?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            fontSize={{ xs: 18, md: 21 }}
            color="grey.lightActive"
            textAlign="left"
            pl={2}
          >
            Aestrohub is a web3 cross-functional and all-in-one service
            provider, agency, and launchpad, removing the stress and barrier of
            accessing man-power and resources required to build a project.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* loop */}
      {FAQs.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === `panel${faq.id}`}
          onChange={handleChange(`panel${faq.id}`)}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  border: "1px solid #5c5c5c",
                  borderRadius: "50%",
                  color: "#fff",
                }}
              />
            }
            aria-controls={`panel${faq.id}-content`}
            id={`panel${faq.id}-header`}
          >
            <Typography
              fontSize={{ xs: 21, md: 23 }}
              textAlign="left"
              color="#fff"
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              fontSize={{ xs: 18, md: 21 }}
              color="grey.lightActive"
              textAlign="left"
              pl={2}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AccordionExpand;
