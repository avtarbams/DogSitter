import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps);
    }
    handleClick(event,role){
        var apiBaseUrl = "http://127.0.0.1:8000/UserProfile/";
        // console.log("values in register handler",role);
        var self = this;
        //To be done:check for empty values before hitting submit
        if(this.state.firstName.length>0 && this.state.lastName.length>0 && this.state.email_id.length>0 && this.state.password.length>0){
            var payload={
                "firstName": this.state.firstName,
                "lastName":this.state.lastName,
                "email_id":this.state.email_id,
                "address":this.state.address,
                "password":this.state.password,
                "role":role
            }
            axios.post(apiBaseUrl+'addUserProfile/', payload)
                .then(function (response) {
                    console.log(response);
                        var loginscreen=[];
                        loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} role={role}/>);
                        var loginmessage = "Thanks for registration.Login here";
                        self.props.parentContext.setState({loginscreen:loginscreen,
                            loginmessage:loginmessage,
                            isLogin:true
                        });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }
    render() {
        // console.log("props",this.props);
        var userhintText,userLabel;
        if(this.props.role === "dogsitter"){
            userhintText="Enter your email address",
                userLabel="User Name"
        }
        else{
            userhintText="Enter your email address",
                userLabel="User Name"
        }
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Register"
                        />
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange = {(event,newValue) => this.setState({firstName:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange = {(event,newValue) => this.setState({lastName:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText={userhintText}
                            floatingLabelText={userLabel}
                            onChange = {(event,newValue) => this.setState({email_id:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Address"
                            floatingLabelText="Address"
                            onChange = {(event,newValue) => this.setState({address:newValue})}
                        />
                        <br/>
                        <TextField
                            type = "password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event,this.props.role)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Register;