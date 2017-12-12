import React, { Component } from 'react'
import { Button, Input, Icon,Dropdown,Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Home.scss'

class Home extends Component {

    constructor(props){
        super(props);
        console.log("constructor");
        this.state={
            isLoggedIn: false,
            query: "",
            track: "",
            artists: []
        };
    }

componentWillMount(){
    console.log("componentWillMount");
}

componentDidMount(){
    console.log("componentDidMount");
}

componentWillReceiveProps(nextProps){
    console.log("componentwillreceiveprops");;
}

shouldComponentUpdate(nextProps, nextState){
    console.log("shouldcomponentupdate");
    return true;
}

    //never change this.setState() here
componentWillUpdate(nextProps, nextState){
    console.log("componentwillupdate");
}

componentDidUpdate(prevProps, prevState){
    console.log("componentdidupdate");
    }

componentWillUnmount(){
    console.log("componentWillUnmount");
}

startNew(event){

}
joinExist(event){}

logOut(event){
    this.setState({
    isLoggedIn: false
    });
}

render() {
    return(
        <div className="home">
            <div className="ui fixed inverted menu">
                <div className="ui container">  
                    <div className="menu item">
                        <i id="mic" className="fa fa-microphone" aria-hidden="true"> </i>  DROP
                    </div>
                    <div className="menu item">
                        <i className="fa fa-home" aria-hidden="true"></i>  Home
                    </div>
                    <div className="menu item">
                        <i className="fa fa-globe" aria-hidden="true"></i>  About
                    </div>
                    <div className="menu item right" />
                        <Link to="/login">
                        <Button className="ui yellow button">Login</Button>
                        </Link>
                        <Link to="/signup">
                        <Button className="ui yellow button">Sign Up</Button>
                        </Link>
                        <Button className="ui black button">Help</Button>   
                </div>
            </div>
            <div className="ui main text container">
                <div className="mainVideo container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ckdsJ-LaCvM?start=32&rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>                    </div>
                    <hr />
                    <div className="ui header" id="animated_div">
                        <h1>What is <i id="mic" className="fa fa-microphone" aria-hidden="true"></i> Drop?</h1>
                    </div> 

                <div className="description">
                        <ul>
                            <li>Option to autoplay the list to keep the party going</li>
                            <li>Automatic music recommendation based on user’s song selection</li>
                            <li>Ability to add can add and delete music to and from the list within the channel</li>
                        </ul>
                    </div>

                </div>
                <div className="ui inverted vertical footer segment">
                    <div className="ui center aligned container">
                        <div className="ui vertical inverted small divided list">
                            <div className="asdsad">
                                <h2 className="ui inverted header">Developers</h2>
                                <p>hlee295</p>
                                <p>jsong78</p>
                                <p>ykim164</p>
                                <p>hpark125</p>
                            </div>
                        </div>
                        <div className="ui inverted section divider"></div>
                        <div className="ui horizontal inverted small divided list">
                            <p>CS498 RK1 Final Project</p>
                            <p>University of Illinois at Urbana-Champaign</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home

