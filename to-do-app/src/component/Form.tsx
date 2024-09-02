import { Component, SyntheticEvent } from "react";
interface FormSate {
  inputData: string;
  allTasks: string[];
}
export default class Form extends Component<Record<string, never>, FormSate> {
  state: FormSate = {
    inputData: "",
    allTasks: [],
  };

  handleAdd = (e: SyntheticEvent) => {
    e.preventDefault();
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

  handleRemoveAll = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState((_) => ({
      allTasks: [],
    }));
  };
  render() {
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              placeholder="Enter a Task"
              value={this.state.inputData}
              onChange={(e) => {
                this.setState({ inputData: e.target.value });
              }}
            />
            <button onClick={this.handleAdd}>Add</button>{" "}
            {this.state.allTasks.map((task: string, index: number) => (
              <div key={index + 1}>
                {task}
                <button onClick={(e) => this.handleDelete(e, index)}>
                  Delete
                </button>
              </div> // Correct key usage
            ))}
          </div>
          <button onClick={this.handleRemoveAll}>Remove All</button>
        </form>
      </div>
    );
  }
}
