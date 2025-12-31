// npm install @mui/joy @emotion/react @emotion/styled
// npm install @mui/icons-material
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';

const Graduate = ({degreesObj}) => {
    let graduateAC = degreesObj.graduate[3];
    let acTitle = graduateAC["degreeName"];
    let acList = graduateAC["availableCertificates"];

    return (
        <>
         <AccordionGroup id="table-padding"
            sx={{ 
                maxWidth: "100vw",
                [`& .${accordionSummaryClasses.indicator}`]: {
                transition: '0.2s',
                },
                [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                transform: 'rotate(45deg)',
                },
                borderTop: '2px solid black',
                '& .MuiAccordion-root': {
                borderColor: 'black !important',
                }
            }}
            >
            {degreesObj.graduate.map((gr =>
                gr.degreeName == "graduate advanced certificates" ?
                (<div key={gr.degreeName}></div>)
                :
                (
                    <div key={gr.title}>
                        <Accordion>
                            <AccordionSummary indicator={<AddIcon />} className="title-space">{gr.title}</AccordionSummary>
                            <AccordionDetails>
                                <p>{gr.description}</p>
                                <div className="rounded-box-orange">
                                    <h4>Concenterations</h4>
                                    <ul className='degrees'>
                                        {gr.concentrations.map((conc => 
                                            <li key={conc}>{conc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            ))}
        </AccordionGroup>

        <h2>Graduate Advanced Certificates</h2>
        <hr></hr>
        <AccordionGroup id="table-padding"
            sx = {{
                borderTop: '2px solid black',
                '& .MuiAccordion-root': {
                borderColor: 'black !important',
                }
            }}>
            {acList.map((ac =>
                <div key={ac}>
                    <Accordion className="top-btm-border">
                        <AccordionSummary indicator={" "} className="title-space">{ac}</AccordionSummary>
                    </Accordion>
                </div>
            ))}
        </AccordionGroup>
        </>
    );
}
export default Graduate;