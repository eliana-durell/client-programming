import "./careers.css";
import horiz2Img from "../../assets/horiz-2.jpg";

const Careers = ({careersObj}) => {
    // make list for employment and coop title and descriptions

    let careerInfoList = careersObj.introduction.content.map(intro => 
        <div key={intro.title}>
            <h2>{intro.title}</h2>
            <p>{intro.description}</p>
        </div>
    );

    return (
        <div id="employment">
            <h1 className="text-center">Careers</h1>
            <img className="horizontal-img" src={horiz2Img}></img>
            <p className="text-center">{careersObj.introduction.title}</p>
            {careerInfoList[0]}

            <div className="rounded-box-orange careerNames">
                <div className="career-padding">
                    <h2 className="text-center">{careersObj.employers.title}</h2>
                    <hr className="hr-career"></hr>
                    {careersObj.employers.employerNames.map((name => 
                        <div className="text-center" key={name}>
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
                <div className="career-padding">
                    <h2 className="text-center">{careersObj.careers.title}</h2>
                    <hr className="hr-career"></hr>
                    {careersObj.careers.careerNames.map((name => 
                        <div className="text-center" key={name}>
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {careerInfoList[1]}

        </div>
    );
}
export default Careers;