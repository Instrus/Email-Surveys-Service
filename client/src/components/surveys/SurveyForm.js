// SurveyForm allows users to fill out a form relating to emails
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

// Field 1: component of input, key = surveyTitle, value = users real-time input
// handleSubmit is a reduxForm prop

class SurveyForm extends Component {

    //helper function to render each input field
    renderFields(){
        return _.map(formFields, ({ label, name }) => {
            return ( <Field 
                key={name}
                component={SurveyField} 
                type="text" 
                name={name} 
                label={label}/> );
        });
    }

    // onSurveySubmit function found in SurveyNew.js
    // onSubmit, onSurveySubmit is called (not called automatically on component render) and updates parent state
    //this.props.handleSubmit is a redux specific helper function to validate user input
    // cannot simply destructure because SurveyForm is wrapped with reduxForm
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text"> Cancel </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className='material-icons right' > done </i>
                    </button>
                </form>
            </div>
        );
    }
}

// helper function for reduxForm - validate function for user input
function validate(values){ //values are the form fields (subject, body, etc) ?
    const errors = {};

    // check for any invalid emails
    errors.recipients = validateEmails(values.recipients || '');

    // if user did not provide a title in the form
    // note: property names match input fields
    _.each(formFields, ({ name }) => {
        if (!values[name]){
            errors[name] = 'You must provide a value';
        }
    });

    return errors; //if empty, no errors (validation complete)
}

export default reduxForm({
    validate: validate, //input validation (for recipient list)
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);