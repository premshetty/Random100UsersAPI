import React from 'react'

const ShowFullDetails = (props) => {

    console.log(props)
    return (

        <div  >
            <img alt = 'user' src={props.userDetail.image} />
            <p> name: {props.userDetail.name} </p>
            <p> gender :  {props.userDetail.gender} </p>
            <p> adress : {props.userDetail.adress} </p>
            <p> email : {props.userDetail.email} </p>
            <p>  AGE : {props.userDetail.age} </p>
            <p> username :{props.userDetail.username}   </p>
            < button onClick={props.userDetail.delete} >  Delete user  </button>
        </div>
    )
}
export default ShowFullDetails;