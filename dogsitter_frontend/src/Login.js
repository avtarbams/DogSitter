import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
var apiBaseUrl = "http://127.0.0.1:8000/UserProfile/";
import axios from 'axios';
import UploadPage from './UploadPage';
class Login extends Component {



    constructor(props){
        super(props);
        var localloginComponent=[];
        localloginComponent.push(
            <MuiThemeProvider>
                <div>
                    <TextField
                        hintText="Enter your username"
                        floatingLabelText="User Name"
                        onChange = {(event,newValue)=>this.setState({username:newValue})}
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </div>
            </MuiThemeProvider>
        )
        this.state={
            username:'',
            password:'',
            menuValue:1,
            loginComponent:localloginComponent,
            loginRole:'dogsitter'
        }
    }
    componentWillMount(){
        // console.log("willmount prop values",this.props);
        if(this.props.role != undefined){
            if(this.props.role == 'dogsitter'){
                console.log("in dogsitter componentWillMount");
                var localloginComponent=[];
                localloginComponent.push(
                    <MuiThemeProvider>
                        <div>
                            <TextField
                                hintText="Enter your username"
                                floatingLabelText="User Name"
                                onChange = {(event,newValue) => this.setState({username:newValue})}
                            />
                            <br/>
                            <TextField
                                type="password"
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </div>
                    </MuiThemeProvider>
                )
                this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'dogsitter'})
            }
            else if(this.props.role == 'dogowner'){
                console.log("in dogowner componentWillMount");
                var localloginComponent=[];
                localloginComponent.push(
                    <MuiThemeProvider>
                        <div>
                            <TextField
                                hintText="Enter your username"
                                floatingLabelText="User Name"
                                onChange = {(event,newValue) => this.setState({username:newValue})}
                            />
                            <br/>
                            <TextField
                                type="password"
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </div>
                    </MuiThemeProvider>
                )
                this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'dogowner'})
            }
        }
    }
    handleClick(event){
        var self = this;
        var role = this.state.loginRole;
        var username = this.state.username;
        var password = this.state.password;
        var payload={
            "email_id":this.state.username,
            "password":this.state.password
        }
        axios.post(apiBaseUrl+'login/', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.email_id == username && response.data.password == password){
                    console.log("Login successfull");
                    var uploadScreen=[];
                    uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
                    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                }
                else{

                    alert("Username/Password mismatch");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleMenuChange(value){
        console.log("menuvalue",value);
        var loginRole;
        if(value==1){
            var localloginComponent=[];
            loginRole='dogsitter';
            localloginComponent.push(
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Enter your username"
                            floatingLabelText="User Name"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            )
        }
        else if(value == 2){
            var localloginComponent=[];
            loginRole='dogowner';
            localloginComponent.push(
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Enter your username"
                            floatingLabelText="User Name"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            )
        }
        this.setState({menuValue:value,
            loginComponent:localloginComponent,
            loginRole:loginRole})
    }
    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <AppBar  style={{
                        backgroundColor: '#C0CA33',

                    }}
                             titleStyle={{
                                 fontFamily: 'Apple Chancery, cursive'
                             }}
                        title="Login"
                    />
                    <div>
                        <p>Login as:</p>
                        <DropDownMenu value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
                            <MenuItem value={1} primaryText="Dog Sitter" />
                            <MenuItem value={2} primaryText="Dog Owner" />
                        </DropDownMenu>
                    </div>
                </MuiThemeProvider>
                {this.state.loginComponent}
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;