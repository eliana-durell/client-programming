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

const Undergraduate = ({degreesObj}) => {
    return (
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
            
            {degreesObj.undergraduate.map((ug =>
                <div key={ug.title}>
                    <Accordion className='degree-space'>
                        <AccordionSummary indicator={<AddIcon />} className="title-space">{ug.title}</AccordionSummary>
                        <AccordionDetails>
                            <p>{ug.description}</p>
                            <div className="rounded-box-orange">
                                <h3>Concenterations</h3>
                                <ul className='degrees'>
                                    {ug.concentrations.map((conc => 
                                        <li key={conc}>{conc}</li>
                                    ))}
                                </ul>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ))}
        </AccordionGroup>
    );
}
export default Undergraduate;