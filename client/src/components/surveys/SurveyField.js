// renders a label and text input
import React from 'react';

// Field (SurveyForm.js) passes props.input (object) to component (SurveyField in this case)
// input contains event handlers (and we wire it up to the input component within)
export default ( { input, label, meta: { error, touched }} ) => {
    return (
        <div>
            <label>{label}</label>
            <input { ...input} style={{ marginBottom: '5px' }} />
            <div className='red-text' style={{ marginBottom: '20px' }}>
            {touched && error}
            </div>
            
        </div>
    );
};