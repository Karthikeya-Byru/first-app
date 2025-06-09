import './Comp1.css';
import Comp2  from '../component-2/Comp2';
//craete test 1 component
function Comp1(){
    //state 
    return(
        <div className="test-1">
            <h2>Test component 1</h2>
            <Comp2/>
        </div>
        
        
    )
}

export default Comp1;