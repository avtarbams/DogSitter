import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import UploadScreen from './UploadScreen';
import Pastfiles from './Pastfiles';
import LoginScreen from './Loginscreen'
import {FlatButton, RaisedButton} from "material-ui";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {draweropen: false,currentScreen:[]};
    }
    componentDidMount(){
        var currentScreen=[];
        currentScreen.push(<UploadScreen appContext={this.props.appContext} role={this.props.role}/>);
        this.setState({currentScreen})
    }
    /**
     * Toggle opening and closing of drawer
     * @param {*} event
     */
    toggleDrawer(event){
        // console.log("drawer click");
        this.setState({draweropen: !this.state.draweropen})
    }
    handleMenuClick(event,page){
        switch(page){
            case "openprint":
                // console.log("need to open uploadapge")
                var currentScreen=[];
                currentScreen.push(<UploadScreen appContext={this.props.appContext} role={this.props.role}/>);
                this.setState({currentScreen})
                break;
            case "openpast":
                // console.log("need to open pastfiles")
                var currentScreen=[];
                currentScreen.push(<Pastfiles appContext={this.props.appContext} role={this.props.role}/>);
                this.setState({currentScreen})
                break;
            case "logout":
                var loginPage =[];
                loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
                this.props.appContext.setState({loginPage:loginPage,uploadScreen:[]})
                break;
        }
        this.setState({draweropen:false})
    }
    render() {
        var styles ={
        };
        return (
            <div className="App">
                <MuiThemeProvider>
                    <AppBar
                        title = "Welcome to DogSitter.com"
                        iconElementRight={<FlatButton label="Logout" onClick={(event) => this.handleMenuClick(event,"logout")}/>}
                    />
                    <div style={styles}>
                    <Card>
                        <CardMedia
                            overlay={<CardTitle title="Bookings" />}
                        >
                            <img src="images/dogsitter.jpg" alt="" />
                        </CardMedia>
                        <CardTitle title="Booking No.1" subtitle="Petsitter: Joe Kurian" />
                        <CardText>
                            Appointment completed. Please click below for feedback.
                        </CardText>
                        <CardActions>
                            <FlatButton label="Feedback" />
                        </CardActions>
                    </Card>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;