import React, { Component } from 'react';



import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landinpage from "../client/layout/landingpage";

class Routes extends Component{

    render(){

        return(

            <BrowserRouter>

                <div>

                    <Route path = "/" exact component = {Landinpage}/>












                </div>









            </BrowserRouter>






        );





    }



}
export default Routes;