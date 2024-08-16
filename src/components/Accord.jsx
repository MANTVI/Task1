
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Accord() {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };
    return (
        <>
          {/* <div className="accordion-item ">
      <button
        className="accordion-title"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        id="accordion-header"
      >
        Q:What are the benefits of using [Your Product/Service]?
      </button>
      {isOpen && (
        <div
        
          aria-labelledby="accordion-header"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      )}
    </div> */}

         <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          // id="panel1-header"
        >
         Q:What are the benefits of using [Your Product/Service]?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
     
        </>
        
    )
}

export default Accord
