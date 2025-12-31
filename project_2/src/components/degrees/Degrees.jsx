import './degrees.css';
import Undergraduate from './Undergraduate';
import Graduate from './Graduate';


const Degrees = ({degreesObj}) => {
    return(
        <div id="degrees">
            <h1 className="text-center">Degrees</h1>
            <div className="rounded-grey">
                <h2>Undergraduate</h2>
                <hr className="hr-width"></hr>
                <Undergraduate degreesObj={degreesObj}></Undergraduate>
                <h2>Graduate</h2>
                <hr className="hr-width"></hr>
                <Graduate degreesObj={degreesObj}></Graduate>
                
            </div>
        </div>
    );
}
export default Degrees;