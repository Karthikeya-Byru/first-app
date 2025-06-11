import './Comp1.css';

//craete test 1 component
function Comp1(props){
    //state 
    return(
        <div className="test-1">
            <h2>Test component 1</h2>
            <h2>{props.data}</h2>
        </div>
        
        
    )
}

export default Comp1;