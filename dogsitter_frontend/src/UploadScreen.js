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

    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <AppBar
                        title= "Dogsitter"
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;