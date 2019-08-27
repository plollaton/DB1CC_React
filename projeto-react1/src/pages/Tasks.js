import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import TaskList from '../components/TaskList';

export default class Task extends Component {

    state = {
        tasks: [],
        fetching: false
    }

    componentDidMount() {
        this.requestTasks();
    }

    onTaskClick = task => {
        this.props.history.push(`/tarefas/${task.id}`);
    }

    requestTasks = () => {
        this.setState({ fetching: true });
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                // invocar quando a requisicao terminar com status 200
                const { data } = response;
                this.setState({ tasks: data });
            })
            .catch(error => {
                //invocar quando houver erro 400, 500 ou até falta de internet
                console.warn(error);
            })
            .finally(() => {
                this.setState({ fetching: false });
            });
    }

    renderTaskItem = (task, index) => {
        return (
            <li key={task.id}>
                <Link to={`/tarefas/${task.id}`}>{task.id} - {task.title}</Link>
            </li>
        );
    }

    renderTasks = () => {
        const { fetching, tasks } = this.state;
        if (fetching) {
            return (<div>
                <Spinner color="primary" />
                <Spinner color="secondary" />
                <Spinner color="success" />
                <Spinner color="danger" />
                <Spinner color="warning" />
                <Spinner color="info" />
                <Spinner color="light" />
                <Spinner color="dark" />
            </div>)
        }
        return (
            <TaskList tasks={tasks} onTaskClick={this.onTaskClick} />
        );
    }

    renderTaskDetail = (routeProps) => {
        const { taskId } = routeProps.match.params;
        const task = this.state.tasks.find(item => item.id === parseInt(taskId))
        if (!task) { //null || undefined || '' || 0 || NaN
            return null;
        };
        return (
            <div>
                <div> Id: {task.id} </div>
                <div> Título: {task.title} </div>
                <div> Concluída: {task.completed ? 'Sim' : 'Não'} </div>
                <div> Usuario Id: {task.userId} </div>
            </div>
        );
    }

    renderTaskRoute = () => (
        <Route path='/tarefas/:taskId' render={this.renderTaskDetail} />
    )

    render() {
        return (
            <div>
                <h1>Página de Tarefas</h1>
                {this.renderTasks()}
                {this.renderTaskRoute()}
            </div>
        );
    }
}