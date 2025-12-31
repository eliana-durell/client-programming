import "./minors.css";
import { useState } from "react";

// npm install @chakra-ui/react@latest
import { Tabs } from "@chakra-ui/react"

import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';

import getData from "../../utils/getData";

const Minors = ({minorsObj}) => {
    const [courseDict, setCourseDict] = useState({});
    const [activeTabs, setActiveTabs] = useState({});
    const [loadingCourses, setLoadingCourses] = useState({})

    const handleTabClick = async (minorName, courseId) => {
        // if clicking the same tab close it 
        // store all [minor] : previous tabs open
        if (activeTabs[minorName] == courseId) {
            setActiveTabs(prev => ({
                ...prev,
                // open? close else open
                [minorName]: null
            }));
            return;
        }

        // opening new tab
        setActiveTabs(prev => ({
            ...prev,
            [minorName]: courseId
        }));

        // get course details if not already loaded
        if (!courseDict[courseId]) {
            // set to loading
            setLoadingCourses(prev => ({
                ...prev, 
                [courseId]: true}
            ));
            //fetch data
            const courseData = await getData(`course/courseID=${courseId}`);
            setCourseDict(prev => ({
                ...prev,
                [courseId]: [courseData.title, courseData.description]
            }));
            // update
            setLoadingCourses(prev => ({...prev, [courseId]: false}));
        }
    };

    return (
        <div id="minors">
            <h1 className="text-center">Minors</h1>
            <div className="rounded-box-black">
                {minorsObj.map(m => 
                    <div key={m.name}>
                        <div>
                            <p className="course-title">{m.title}</p>
                            <AccordionGroup
                                sx={{
                                    maxWidth: "100vw",
                                    [`& .${accordionSummaryClasses.indicator}`]: {
                                    transition: '0.2s',
                                    },
                                    [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                                    transform: 'rotate(45deg)',
                                    },
                                }}
                            >
                                <Accordion>
                                    <AccordionSummary indicator={<AddIcon />} className="course-description" sx={{padding: "0"}}>Description</AccordionSummary>
                                    <AccordionDetails className="rounded-box-grey">
                                        {m.description}
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionGroup>
                            <div>
                                <Tabs.Root
                                    value={activeTabs[m.name] || ""}
                                    defaultValue="members"
                                    variant="plain"
                                    css={{
                                        "--tabs-indicator-bg": "colors.gray.subtle",
                                        "--tabs-indicator-shadow": "shadows.xs",
                                        "--tabs-trigger-radius": "radii.full",
                                    }}
                                    >
                                    <Tabs.List className="course-list">
                                        {m.courses.map(course => 
                                            <Tabs.Trigger key={course} value={course} 
                                                className="course-btn" 
                                                onClick={() => handleTabClick(m.name, course)}
                                            >
                                                {course}
                                            </Tabs.Trigger>
                                        )}
                                    </Tabs.List>
                                        {m.courses.map(course => 
                                            activeTabs[m.name] === course && 
                                            (

                                            <Tabs.Content key={course} value={course} className="rounded-box-grey class-size">
                                                {loadingCourses[course] ? (
                                                    <p>Loading course details...</p>
                                                ) : courseDict[course] ? (
                                                    <>
                                                        <p className="class-name">
                                                            {new DOMParser().parseFromString(courseDict[course][0], "text/html").body.textContent}
                                                        </p>
                                                        <p>{courseDict[course][1]}</p>
                                                    </>
                                                ) : null}
                                            </Tabs.Content>
                                            )
                                        )}
                                </Tabs.Root>
                            </div>
                        </div>
                        <hr className="hr-color"></hr>
                    </div>
                )}
            </div>
        </div>
    );

}
export default Minors;












// import "./minors.css";
// import { useState } from "react";

// // npm install @chakra-ui/react@latest
// import { Tabs } from "@chakra-ui/react"

// import AccordionGroup from '@mui/joy/AccordionGroup';
// import Accordion from '@mui/joy/Accordion';
// import AccordionDetails from '@mui/joy/AccordionDetails';
// import AccordionSummary, {
//   accordionSummaryClasses,
// } from '@mui/joy/AccordionSummary';
// import AddIcon from '@mui/icons-material/Add';

// const Minors = ({minorsObj, coursesObj}) => {
//     let courseDict = {};
//     for(const c of coursesObj) {
//         courseDict[c.courseID] = [c.title, c.description];
//     }

//     const [activeTabs, setActiveTabs] = useState({});

//     const handleTabClick = (minorName, courseId) => {
//         // store all [minor] : previous tabs open
//         setActiveTabs(prev => ({
//             ...prev,
//             // open? close else open
//             [minorName]: prev[minorName] === courseId ? null : courseId
//         }));
//     };

//     return (
//         <div id="minors">
//             <h1 className="text-center">Minors</h1>
//             <div className="rounded-box-black">
//                 {minorsObj.map(m => 
//                     <div key={m.name}>
//                         <div>
//                             <p className="course-title">{m.title}</p>
//                             <p className="course-name">{m.name}</p> 
//                             <AccordionGroup
//                                 sx={{
//                                     maxWidth: "100vw",
//                                     [`& .${accordionSummaryClasses.indicator}`]: {
//                                     transition: '0.2s',
//                                     },
//                                     [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
//                                     transform: 'rotate(45deg)',
//                                     },
//                                 }}
//                             >
//                                 <Accordion>
//                                     <AccordionSummary indicator={<AddIcon />} className="course-description" sx={{padding: "0"}}>Description</AccordionSummary>
//                                     <AccordionDetails className="rounded-box-grey">
//                                         {m.description}
//                                     </AccordionDetails>
//                                 </Accordion>
//                             </AccordionGroup>
//                             <div>
//                                 <Tabs.Root
//                                     value={activeTabs[m.name] || ""}
//                                     defaultValue="members"
//                                     variant="plain"
//                                     css={{
//                                         "--tabs-indicator-bg": "colors.gray.subtle",
//                                         "--tabs-indicator-shadow": "shadows.xs",
//                                         "--tabs-trigger-radius": "radii.full",
//                                     }}
//                                     >
//                                     <Tabs.List className="course-list">
//                                         {m.courses.map(course => 
//                                             <Tabs.Trigger key={course} value={course} 
//                                                 className="course-btn" 
//                                                 onClick={() => handleTabClick(m.name, course)}
//                                             >
//                                                 {course}
//                                             </Tabs.Trigger>
//                                         )}
//                                     </Tabs.List>
//                                         {m.courses.map(course => 
//                                             activeTabs[m.name] === course && 
//                                             (
//                                             <Tabs.Content key={course} value={course} className="rounded-box-grey class-size">
//                                                 <p className="class-name">{new DOMParser().parseFromString(courseDict[course][0], "text/html").body.textContent}</p>
//                                                 <p>{courseDict[course][1]}</p>
//                                             </Tabs.Content>
//                                             )
//                                         )}
//                                 </Tabs.Root>
//                             </div>
//                         </div>
//                         <hr className="hr-color"></hr>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );

// }
// export default Minors;

