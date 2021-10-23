import React, { Component } from 'react'
import Search from './Search';
import UserDetails from './UserDetails';
import classes from './UserDetails.module.css'
class Home extends Component {
    state = {
        user: [],
        status: false,
        message: "loading user info...",
        showusers: false,
        showfulldetails: false,
        filterText: ''
    }
    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=100"
        const response = await fetch(url);
        const data = await response.json();
        console.log(" result" + data.results);
        this.setState({ user: data.results })
        console.log("state", this.state.user);
    }


    filterTextChangeHandler = (filterText) => {
        this.setState({ filterText: filterText })

    }


    render() {
        let btnstyle = classes.showuser;
        let btnname = '';
        this.state.showusers ? btnstyle = classes.hideuser : btnstyle = classes.showuser;
        console.log(this.state.filterText);
        const showusers = () => {
            this.setState({ showusers: !this.state.showusers })
        }
        const Fulldetails = () => {
            this.setState({ showfulldetails: !this.state.showfulldetails })
        }
        this.state.showusers ? btnname = 'hide users details' : btnname = ' show users details';

        return (

            <div>
                <div className={btnstyle}>  <button onClick={showusers} > {btnname}</button></div>
                {
                    this.state.showusers ?
                        <div>
                            <h1 className='h1' > Random Users </h1>
                            <Search filterTextChangeHandler={this.filterTextChangeHandler} filterText={this.state.filterText} />
                            <UserDetails
                                filtertext={this.state.filterText}
                                user={this.state.user} showfulldetails={Fulldetails} showfulldetailscondition={this.state.sh} />
                        </div>
                        : null
                }
            </div>


        )
    }

}

export default Home;