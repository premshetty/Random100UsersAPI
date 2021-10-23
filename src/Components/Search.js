import React from "react";
import classes from './UserDetails.module.css'

const Search = (props) => {
  return (
    <input className={classes.search} type="text" placeholder='search...'
      value={props.filterText}

      onChange={(event) => { props.filterTextChangeHandler(event.target.value) }}
    />
  );
}




export default Search;