import React, { Component } from 'react';
import Titulo from '../components/Titulo';
import Contador from '../components/Contador';
import { Alert } from 'reactstrap';
// destructuring
// desestruturando um objeto - facilitar o uso

export default class Home extends Component {
    render() {
        return (
            <div>
                <Titulo textColor='red'>
                    agora foi...........
                </Titulo>
                <Contador inicio={10} tempo={200}></Contador>
                <Contador inicio={1000} tempo={10}></Contador>
                <Alert color='info'>
                    Alert para exibir info
                </Alert>
                <Alert color='danger'>
                    Alert para exibir error
                </Alert>
                <Alert color='warning'>
                    Alert para exibir warning
                </Alert>
            </div>
        );
    }
}