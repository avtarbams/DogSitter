import React, {Component} from 'react';

import "../../layout/layout.css";

class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand text-white" href="#">
                        <img src="http://webpage.pace.edu/ab85414n/dogsitter/logo_ds.png" className="d-inline-block align-top" alt/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">

                        </ul>
                        <form className="form-inline my-2 my-lg-0 float-right">
                            <input className="form-control mr-sm-2" type="text" placeholder="Username or Email"
                                   aria-label="Search"/>
                            <input className="form-control mr-sm-2" type="password" placeholder="Password"
                                   aria-label="Search"/>
                            <fieldset>
                                <label className="checkbox inline">
                                    <input type="checkbox" defaultValue="remember-me" />&nbsp;&nbsp;<span className="text-white">Remember me
                                </span>
                                </label>
                                <a className="help-inline" href="#">Forgot password?</a>
                            </fieldset>
                            &nbsp;&nbsp;
                            <input className="btn btn-danger my-2 my-sm-0" type="submit" value="Login"/>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;