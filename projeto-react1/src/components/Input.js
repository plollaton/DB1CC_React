import React, { Component } from 'react';
import {
    FormGroup, Label, Input as InputReactStrap, FormFeedback
} from 'reactstrap';

// const Input = ({ label, id, ...props }) => (
//     <FormGroup>
//         <Label for={id}>{label}</Label>
//         <InputReactStrap id={id} {...props} />
//     </FormGroup>
// );

class Input extends Component {
    state = {
        errorMessage: undefined,
        touched: false,
    }

    onChange = event => {
        const { target } = event;
        const { onChange, validate } = this.props;

        const errorMessage = validate ? validate(target.value) : undefined;

        this.setState({
            errorMessage,
            touched: true,
        }, () => {
            onChange({ target }, this.isValid());
        });
    }

    isValid = () => {
        const { errorMessage } = this.state;
        return errorMessage === undefined;
    }

    render() {
        const { label, id, ...props } = this.props;
        const { errorMessage, touched } = this.state;
        delete props.validate;
        return (
            <FormGroup>
                <Label for={id}>{label}</Label>
                <InputReactStrap
                    id={id}
                    {...props}
                    onChange={this.onChange}
                    valid={touched && this.isValid()}
                    invalid={touched && !this.isValid()}
                />
                <FormFeedback>{errorMessage}</FormFeedback>
            </FormGroup>
        );
    }
}

export default Input;