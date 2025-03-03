// this toggles between both forms (Survey Form and Survey Form Review)
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    // component state determines if SurveyForm or Review shows
    state = { showFormReview: false }; //create-react-app specific state management
    // helper function to toggle between SurveyForm and Review
    renderContent() {
        // if true, show review
        if (this.state.showFormReview){
            return <SurveyFormReview 
            onCancel={() => this.setState({ showFormReview: false })}/>; //onCancel is defined here and passed to SurveyFormReview
        }
        // else show survey form
        return <SurveyForm 
        onSurveySubmit={() => this.setState({ showFormReview: true})}/>; //onSurveySubmit defined here and passed to SurveyForm
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);