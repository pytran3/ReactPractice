import {addTask, inputTask} from "../actions/tasks";
import {connect} from "react-redux";
import TodoApp from "../components/TodoApp";
import {push} from "react-router-redux";

function mapStateToProps({tasks}) {
    return {
        task: tasks.task,
        tasks: tasks.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTask(task) {
            dispatch(addTask(task))
        },
        inputTask(task) {
            dispatch(inputTask(task))
        },
        redirectToError() {
            dispatch(push("/error"))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
