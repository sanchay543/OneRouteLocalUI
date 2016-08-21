import React from 'react';
import Task from './Task';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';

export default ({
  tasks,
  onTaskClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => (
  <ul className="tasks">{tasks.map(({id, editing, task}) =>
    <li key={id}>
      <Task className="task" id={id}
        editing={editing}
        onClick={onTaskClick.bind(null, id)}
        onMove={LaneActions.move}>
        <Editable
          className="editable"
          editing={editing}
          value={task}
          onEdit={onEdit.bind(null, id)} />
        <button
          className="delete"
          onClick={onDelete.bind(null, id)}>x</button>
      </Task>
    </li>
  )}</ul>
)
