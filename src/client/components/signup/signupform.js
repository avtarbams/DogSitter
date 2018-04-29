import React, {Component} from 'react';
import axios from 'axios';

class Signupform extends Component {



    handleSubmit = event => {
        event.preventDefault();
        let apiBaseUrl = "http://127.0.0.1:8000/UserProfile/";
        var payload={
            "firstName": this.state.firstName,
            "lastName":this.state.lastName,
            "email_id":this.state.email_id,
            "address":this.state.address,
            "password":this.state.password,
            "role":this.state.role
        }
        axios.post(apiBaseUrl+'addUserProfile/', payload)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {

        return (
            <div>
                <form className="bg-light signupform">
                    <fieldset>
                        <legend>Sign Up</legend>
                        <div className="form-group">
                            <input type="text" className="form-control" id="firstName"
                                   placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="lastName"
                                   placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="address"
                                   placeholder="Address"/>
                        </div>
                        <div className="form-group">
                            <select type="role" placeholder="role" className="form-control">
                                <option value="Dog Sitter">Dog Sitter</option>
                                <option value="Dog Owner">Dog Owner</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Sign Up" onClick={this.handleSubmit}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Signupform;