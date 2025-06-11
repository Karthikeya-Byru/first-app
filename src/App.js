import './App.css';
// import img1 from './images/img-1.webp'
// import Comp1 from './components/component-1/Comp1';
import Users from './components/users/users';

function App() {
//state
// let students = [
//   {rno:250,name:'Ramu',branch:'ECE'},
//   {rno:253,name:'Sai durga',branch:'ECE'},
//   {rno:1250,name:'Rajesh',branch:'ECM'},
//   {rno:423,name:'shiva',branch:'CSE'},
//   {rno:50,name:'Suresh',branch:'EEE'},
// ]
//req handler function
  // function Even(){
  //   console.log("Hello console")
  // }
  // // parameterised function
  // function test(a){
  //   console.log("value of a ",a)
  // }

  //reusability state
  // let a =10;
  // let b =20;
  // let c =30;
  return (
    <div className='text-center'>
      <h1 className='display-4 bg-info text-light p-4'>Welcome to react page</h1>
      {/* table of students */}
      {/* <table className='table text-center table-hover'>
        <thead>
          <tr>
            <th>rno</th>
            <th>name</th>
            <th>branch</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map(Element=><tr key={Element.r}>
                <td>{Element.rno}</td>
                <td>{Element.name}</td>
                <td>{Element.branch}</td>
            </tr>)
          }
        </tbody>
      </table> */}
      {/* grid o f cards */}
      {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {
          students.map(Element=><div className='col g-4' key={Element.rno}>
            <div className='card m-4'>
              <div className="card-body text-center border p-3">
                <h3>{Element.rno}</h3>
                <h4>{Element.name}</h4>
                <h4>{Element.branch}</h4>
              </div>
            </div>
          </div>)
        }
      </div> */}
      {/* <button className="btn btn-success" onClick={Even}>click</button>
      <button className="btn btn-warning" onClick={()=>test(12)}>click</button>    */}
      <div className='container'>
        {/* nest comp1 components */}
        {/* <Comp1 data={a}/>
        <Comp1 data={b}/>
        <Comp1 data={c}/> */}

        {/* nesting user components */}
        <Users/>
      </div>

    </div>
  );
}

export default App;
