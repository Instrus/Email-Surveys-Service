import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux'; //gives components the ability to call action creators
import * as actions from '../actions'; // import all action creators

import Header from './Header';
import Landing from './Landing';

import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

// class based component
class App extends Component {

    // preferred method to handle initial ajax requests
    // when the component has been rendered/mounted onto screen:
    componentDidMount(){
        // find if user is signed in
        this.props.fetchUser();
    }

    render(){
        return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route exact = {true} path = "/" component = {Landing} />
                <Route exact = {true} path = "/surveys" component = {Dashboard} />
                <Route path = "/surveys/new" component = {SurveyNew} />
            </div>
        </BrowserRouter>
        )
    }
}

// argument 1 (null in our case) is for "map state to props function"
// once we pass in all actions (actions), they're assigned to the App component as props
export default connect(null, actions)(App); // connects all actions to the store