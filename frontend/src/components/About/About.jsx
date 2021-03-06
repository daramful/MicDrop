import React, { Component } from 'react'
import { Button, Input, Icon,Dropdown,Card,Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from '../Home/Home.scss'

class Home extends Component {

    constructor(props){
        super(props);
        console.log("constructor");
            this.state={
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

    render() {
        return(
            <div className="home">
                <div className="ui main text container">
                    <div className="title">
                        <h1>About Us</h1>
                    </div>
                    <div className="content">
                        <p>
                            Have you ever wanted to share your favorite music during a party, road trip, or even a study session?
                            <br/>
                            Mic Drop offers you functions to add your favorite music to the list, and share it with your friends.
                        </p>
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
            </div>
        )
    }
}

export default Home

