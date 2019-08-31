import axios from 'axios';
import { setFetchingTasks, receiveTasks } from "../redux/tasks";

export const requestTasksThunk = () => {
    return (dispatch, getState) => {
        dispatch(setFetchingTasks(true));
        return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            // invocar quando a requisicao terminar com status 200
            const { data } = response;
            dispatch(receiveTasks({
                data,
                error: null,
            }))
        })
        .catch(error => {
            //invocar quando houver erro 400, 500 ou até falta de internet
            console.warn(error);
            dispatch(receiveTasks({
                data: [],
                error: error.message,
            }))
        })
        .finally(() => {
            dispatch(setFetchingTasks(false));
        });
    }
}