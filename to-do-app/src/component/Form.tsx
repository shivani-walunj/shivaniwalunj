import { Component, SyntheticEvent } from "react";
import "../sass/form.scss";
interface FormState {
  inputData: string;
  allTasks: string[];
  editTask: {
    id: null | number;
    status: boolean;
  };
}
export default class Form extends Component<Record<string, never>, FormState> {
  state: FormState = {
    inputData: "",
    allTasks: [],
    editTask: {
      id: null,
      status: false,
    },
  };

  handleAdd = (e: SyntheticEvent) => {
    e.preventDefault();
    if (this.state.editTask.status) {
      const updatedData: Array<string> = [...this.state.allTasks];
      if (this.state.editTask.id !== null)
        updatedData[this.state.editTask.id] = this.state.inputData;
      console.log(this.state.inputData);
      this.setState({ allTasks: [...updatedData] });

      return;
    }
    this.setState((prevState) => ({
      allTasks: [...prevState.allTasks, prevState.inputData],
      inputData: "",
    }));
  };

  handleDelete = (e: SyntheticEvent, id: number) => {
    e.preventDefault();
    this.setState((prevState) => ({
      allTasks: [...prevState.allTasks].filter((_, index) => id !== index),
    }));
  };

  handleEdit = (e: SyntheticEvent, id: number) => {
    e.preventDefault();
    this.setState({
      inputData: this.state.allTasks[id],
      editTask: { id: id, status: true },
    });
  };

  handleRemoveAll = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState((_) => ({
      allTasks: [],
    }));
  };
  render() {
    return (
      <div className="main-container">
        <form className="content-container">
          <div className="add-tasks">
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter a Task"
                value={this.state.inputData}
                onChange={(e) => {
                  this.setState({ inputData: e.target.value });
                }}
              />
              <button onClick={this.handleAdd}>
                {this.state.editTask.status ? "Update" : "Add"}
              </button>
            </div>
            <div className="task-list">
              {this.state.allTasks.map((task: string, index: number) => (
                <div className="task" key={index + 1}>
                  {task}
                  <div className="list-btn">
                    <button onClick={(e) => this.handleDelete(e, index)}>
                      Del
                    </button>
                    <button onClick={(e) => this.handleEdit(e, index)}>
                      Edit
                    </button>
                  </div>
                </div> // Correct key usage
              ))}
            </div>
          </div>
          <div className="remove-tasks">
            <button onClick={this.handleRemoveAll}>Remove All</button>
          </div>
        </form>
      </div>
    );
  }
}
