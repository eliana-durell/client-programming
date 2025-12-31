import { useState, useEffect } from 'react'
import './App.css'

import getData from './utils/getData';
import Degrees from './components/degrees/Degrees';
import Minors from './components/minors/Minors';
import Overview from './components/overview/Overview';
import Careers from './components/careers/Careers';
import Statistics from './components/statistics/Statistics';
import CoopTable from './components/tables/CoopTable';
import JobTable from './components/tables/JobTable';
import People from './components/people/People';

import { Anchor, Col, Row } from 'antd';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();
  const [degreesObj, setDegreesObj] = useState();
  const [minorsObj, setMinorsObj] = useState();
  const [employmentObj, setEmploymentObj] = useState();
  const [peopleObj, setPeopleObj] = useState();

  useEffect(() => {
    Promise.all([
      getData("about/"),
      getData("degrees/"),
      getData("minors/"),
      getData("employment/"),
      getData("people/")
    ])
    .then(([about, degrees, minors, employment, people]) => {
      setAboutObj(about);
      setDegreesObj(degrees);
      setMinorsObj(minors);
      setEmploymentObj(employment);
      setPeopleObj(people);
      setLoaded(true);
    })

  }, []);

  if (!loaded) return (
    <>
      <h1>Welcome to the iSchool</h1>
      <h3>Loading...</h3>
    </>
  )

  return (
    <>
      <div className='hero-img'>
      </div>
     
        <main>


           <Row>
              <Col span={4} className='nav-tabs'>
                <Anchor
                  items={[
                    {
                      key: 'Overview',
                      href: '#overview',
                      title: 'Overview',
                    },
                    {
                      key: 'Degrees',
                      href: '#degrees',
                      title: 'Degrees',
                    },
                    {
                      key: 'Minors',
                      href: '#minors',
                      title: 'Minors',
                    },
                    {
                      key: 'Employment',
                      href: '#employment',
                      title: 'Employment',
                    },
                     {
                      key: 'People',
                      href: '#people',
                      title: 'People',
                    },
                  ]}
                />
              </Col>
              <Col span={16}>
                <Overview overviewObj={aboutObj}></Overview>
                <Degrees degreesObj={degreesObj}/>
                <Minors minorsObj={minorsObj.UgMinors}></Minors>
                <Careers careersObj={employmentObj}></Careers>
                <Statistics statisticsObj={employmentObj.degreeStatistics}></Statistics>
                <CoopTable coopTableObj={employmentObj.coopTable}></CoopTable>
                <JobTable jobTableObj={employmentObj.employmentTable}></JobTable>
                <People peopleObj={peopleObj}></People>
              </Col>
            </Row>
        </main>

    </>
  );
}
export default App;
