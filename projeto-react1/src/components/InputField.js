import React from 'react';

import { Field } from 'react-final-form';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const renderField = fieldProps => {
    const { meta, input, label, innerRef, ...others } = fieldProps;
    return (
        <FormGroup>
            <Label for='input-description'>{label}</Label>
            <Input
                innerRef={innerRef}
                id='input-description'
                valid={meta.touched && meta.valid}
                invalid={meta.touched && meta.invalid}
                {...others}
                {...input} />
            <FormFeedback>{meta.error}</FormFeedback>
        </FormGroup>
    )
};

const InputField = (props) => (
    <Field
        {...props}
        render={renderField} />
);

export default InputField;