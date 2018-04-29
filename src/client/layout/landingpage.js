import React, {Component} from 'react';
import './layout.css'
import Signupform from "../components/signup/signupform";
import Header from "../components/header/header";
import Main from "../components/main/main";

class Landinpage extends Component {
    render() {
        return (
            <div className="landingpage">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Main/>
                        </div>
                        <div className="col-md-4">
                            <Signupform/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Landinpage;