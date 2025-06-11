import './user.css';

function User(props){
    console.log(props)
    return(
        <div className='card border-2 p-4'>
            <img src={props.userData.avatar} alt="" className='w-75 rounded-circle d-block mx-auto'/>
            <div className="card-body">
                <p className="lead">{props.userData.first_name} {props.userData.last_name}</p>
                <p className="lead">{props.userData.email}</p>
            </div>
        </div>
    )
}

export default User;