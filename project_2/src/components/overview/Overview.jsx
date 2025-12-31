import "./overview.css";
import horizImg from "../../assets/horiz.jpg";
import vert1Img from "../../assets/vert-1.jpeg";
import vert2Img from "../../assets/vert-2.jpg";

const Overview = ({overviewObj}) => {
    return (
        <div id="overview">
            <p>{overviewObj.description}</p>
            <img className="horizontal-img" src={horizImg}></img>
            <div className="rounded-box-orange quote-box">
                <p>{overviewObj.quote}</p>
                <p className="text-center">-{overviewObj.quoteAuthor}</p>
            </div>
            <div className="vertical-img-box">
                <img className="vertical-img" src={vert1Img}></img>
                <img className="vertical-img" src={vert2Img}></img>
            </div>
        </div>
    );
}
export default Overview;