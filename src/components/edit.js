import "./edit.css";
import ellipse4 from "../assets/ellipse4.png";
import ellipse2 from "../assets/ellipse2.png";
import vector from "../assets/vector.svg";
import vector1 from "../assets/vector1.svg";
import React from "react";
const list = {
  id: 1,
  title: [
    "Sáng: Thu gom tại MCP 1",
    "Sáng: Thu gom tại MCP 2",
    "Sáng: Thu gom tại MCP 3",
  ],
  from: "20/9",
  to: "26/9",
};

const Heading = () => (
  <div className="rectangle-35">
    <div className="logo">
      <div className="rectangle-1">
        <span className="logo-1">LOGO</span>
      </div>
    </div>
    <button className="frame">JANItoR</button>
    <div className="frame">COLLECtoR</div>
    <div className="frame">ROUTE</div>
    <img className="vector" src={vector} />
    <img className="vector-1" src={vector1} />
    <img className="ellipse-admin" src={ellipse4} />
  </div>
);

const Info = () => (
  <div className="employee">
    <img className="employee-img" src={ellipse2} />
    <div className="employee-info">
      <span className="name">Nick</span>
      <span className="janitor">Janitor</span>
    </div>
    <span className="id">ID #0123</span>
  </div>
);

const Assign = () => (
  <div className="position-absolute top end-0">
    <span>MCP: MCP1, MCP2, MCP3</span>
    <br />
    <a href="https://www.google.com" type="button" className="btn btn-success">
      Assign MCP
    </a>
    <br />
    <br />
    <br />
    Vehicle: Troller 1
    <br />
    <a href="https://www.google.com" type="button" className="btn btn-danger">
      Assign vehicle
    </a>
  </div>
);

class App extends React.Component {
  // declaring state
  state = {
    from: "",
    to: "",
    title: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { from, to, title } = this.state;

    const data = {
      from,
      to,
      title,
    };
    console.log(data);
  };
  render() {
    // accessing the state value by destrutcturing the state
    const { from, to, title } = this.state;
    return (
      <div className="information-for-task">
        <Heading />
        <span className="task-information">TASK INFORMATION</span>
        <div className="full-body">
          <Info />
          <div className="position-relative">
            <div className="body">
              <Assign />
              <div className="test">
                <div className="card">
                  <div className="card-body">
                    <div className="left-column">{list.title}</div>
                    <div className="bottom-column">
                      {" "}
                      {list.from} to {list.to}{" "}
                    </div>
                  </div>
                </div>
                <br />
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="from" class = 'pad-from'> From</label>
                        <input
                          type="date"
                          name="from"
                          value={from}
                          onChange={this.handleChange}
                          placeholder="From"
                        />
                        <label htmlFor="to" class = 'pad-to'> to </label>
                        <input
                          type="date"
                          name="to"
                          value={to}
                          onChange={this.handleChange}
                          placeholder="To"
                        />
                      </div>
                      <div>
                        <label htmlFor="title">Title</label> <br />
                        <textarea
                          id="title"
                          name="title"
                          value={title}
                          onChange={this.handleChange}
                          cols="70"
                          rows="5"
                          placeholder="Write about task ..."
                        />
                      </div>
                      <br/>
                      <div>
                        <button className="btn btn-info confirm">Confirm</button>
                        <button className="btn btn-danger cancel">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
