import './users.css'; 
import User from '../user/user';
function Users(){
    //users array
   let usersList =  [
  {
    id: 1,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    id: 2,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    id: 3,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    id: 4,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
  {
    id: 5,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg"
  },
  {
    id: 6,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg"
  }
];

    return(
        <div>
            <h1>Users List</h1>
            {/* user components */}
            <div className="d-flex justify-content-around mb-5">
            <User userData={usersList[0]}/>
            <User userData={usersList[1]}/>
            <User userData={usersList[2]}/>
            </div>
            <div className="d-flex justify-content-around mb-5">
            <User userData={usersList[3]}/>
            <User userData={usersList[4]}/>
            <User userData={usersList[5]}/>
            </div>
        </div>
    )
}

export default Users;