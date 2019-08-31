import React, { Component, createRef } from 'react';

import { connect } from 'react-redux';
import { addPostAction, clearPostsAction } from '../redux/posts';
import { Form, Button, Spinner } from 'reactstrap';
import { Form as FinalForm} from 'react-final-form';
import { validatePostDescription } from '../utils/validations'
import Axios from 'axios';

import InputField from '../components/InputField';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.inputDescription = createRef();
    }

    onSubmit = (values, form) => {
        return Axios.get('http://viacep.com.br/ws/01001000/json/')
            .then(() => {
                const { addPost } = this.props;
                const { description } = values;
                addPost(description);
                this.inputDescription.current.focus();
                setTimeout(form.reset);
            });
    }

    renderForm = (renderProps) => {
        const { handleSubmit, form } = renderProps;
        const { submitting, pristine } = form.getState();
        const { clearPosts } = this.props;
        return (
            <Form onSubmit={handleSubmit} className='mb-3'>
                <h1>Postagens</h1>
                <InputField
                    rows={3}
                    type='textarea'
                    name='description'
                    id='input-description'
                    label='Descrição'
                    innerRef={this.inputDescription}
                    validate={validatePostDescription}
                />
                <Button
                    type='submit'
                    color='primary'
                    disabled={submitting || pristine}>
                    {submitting ? <Spinner size='sm' /> : null}
                    Postar
                        </Button>
                {' '}
                <Button type='button' onClick={clearPosts}>Limpar</Button>
            </Form>
        );
    }

    render() {
        return (
            <FinalForm
                onSubmit={this.onSubmit}
                render={this.renderForm}
            />
        )
    }
}

const mapDispatchToProps = {
    addPost: addPostAction,
    clearPosts: clearPostsAction
};

export default connect(null, mapDispatchToProps)(PostForm);