import React from "react";
import UserList from "./UserList";

const UserDetails = (props) => {
    const user = props.user;
    //console.log( "userdetails" + props.user );
    const filtertext = props.filtertext;
    return user.map((data) => {

        const gender = data.gender;
        const image = data.picture.large;
        const age = data.dob.age;
        const email = data.email;
        const adress = data.location.city
        const name = data.name.title + '.' + data.name.first + ' ' + data.name.last
        const username = data.login.username
        const lastname = data.name.last;
        //filter
        const filterTextToLower = filtertext.toLowerCase();
        const nametolower = name.toLowerCase();
        console.log("data", data.name);

        if(nametolower.indexOf(filterTextToLower) >= 0 ){
             return <UserList fulldetails={props.showfulldetails}
            condition={props.showfulldetailscondition}
            username={username} last = { lastname}
            image={image} adress={adress} email={email} age={age}
            key={data.phone} gender={gender} name={name}

        />}
        else {
            return null;
        }

    })

}

export default UserDetails;