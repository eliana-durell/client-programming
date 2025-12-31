// npm install @chakra-ui/react@latest
import { Tabs } from "@chakra-ui/react"

import PeopleCard from "./PeopleCard";
import './people.css';

const People = ({peopleObj}) => {
    return (
        <div className="people-box" id="people">
            <h1 className="text-center">Our People</h1>
            <p className="text-center box-space">{peopleObj.subTitle}</p>
            <Tabs.Root
                className="card-grid-size people-rounded-grey"
                defaultValue="faculty"
                variant="plain"
                css={{
                    "--tabs-indicator-bg": "colors.gray.subtle",
                    "--tabs-indicator-shadow": "shadows.xs",
                    "--tabs-trigger-radius": "radii.full",
                }}
                >
                <Tabs.List className="btn-center">
                    <Tabs.Trigger value="faculty" className="btn-space">Faculty</Tabs.Trigger>
                    <hr></hr>
                    <Tabs.Trigger value="staff" className="btn-space">Staff</Tabs.Trigger>
                    <hr></hr>
                </Tabs.List>
                <Tabs.Content value="faculty" className="card-grid">
                    {peopleObj.faculty.map(info => 
                            <PeopleCard info={info}></PeopleCard>
                    )}
                </Tabs.Content>
                <Tabs.Content value="staff"  className="card-grid">
                    {peopleObj.staff.map(info => 
                        <PeopleCard info={info}></PeopleCard>
                    )}
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
}
export default People;