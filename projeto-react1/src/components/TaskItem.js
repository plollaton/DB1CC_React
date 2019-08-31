import React from 'react';

import {applyHighlight} from '../utils/view-helper';

const TaskItem = (props) => {
    const { onTaskClick, highlight, task } = props;
    const highlightedTitle = applyHighlight(task.title, highlight, {
        style: {
            backgroundColor: 'yellow'
        }
    });
    return (
        <tr onClick={() => onTaskClick(task)}>
            <td>{task.id}</td>
            <td>{highlightedTitle} </td>
            <td>{task.completed ? 'Sim' : 'Não'}</td>
            <td>{task.userId}</td>
        </tr>
    );
}

export default TaskItem;