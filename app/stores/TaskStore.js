import TaskActions from '../actions/TaskActions';

export default class TaskStore {
  constructor() {
    this.bindActions(TaskActions);

    this.tasks = [];
  }
  create(task) {
    this.setState({
      tasks: this.tasks.concat(task)
    });
  }
  update(updatedTask) {
    this.setState({
      tasks: this.tasks.map(task => {
        if(task.id === updatedTask.id) {
          return Object.assign({}, task, updatedTask);
        }

        return task;
      })
    });
  }
  delete(id) {
    this.setState({
      tasks: this.tasks.filter(task => task.id !== id)
    });
  }
}
