import {addTask, inputTask} from "../actions/tasks";
import {connect} from "react-redux";
import TodoApp from "../components/TodoApp";


function mapStateToProps({task, tasks}) {
    return {
        task,
        tasks
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addTask(task) {
            dispatch(addTask(task))
        },
        inputTask(task) {
            dispatch(inputTask(task))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
