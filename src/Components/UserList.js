import React, { useState } from 'react'
import ShowFullDetails from './ShowFullDetails';
import classes from './UserDetails.module.css'

const UserList = (props) => {
    const [showFullDetails, setShowFulDetails] = useState(false);
   
    return (
        <div className={classes.flex}>
            <div className={classes.list} >
                <p> name : {props.name} </p>
                <p>gender : {props.gender} </p>
                <div>
                    <button onClick={() => setShowFulDetails(!showFullDetails)} className={classes.button} > {props.last} details </button>
                </div >

            </div>

            {

                showFullDetails ? <div className={classes.fulldetails} > <ShowFullDetails userDetail={props} />  </div> : null

            }

        </div>
    )
}
export default UserList;