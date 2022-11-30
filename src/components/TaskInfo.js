// import "./App.css";
// import charmbin1 from "./assets/charmbin1.svg";
// import ellipse4 from "./assets/ellipse4.png";
// import ellipse2 from "./assets/ellipse2.png";
// import vector from "./assets/vector.svg";
// import vector1 from "./assets/vector1.svg";

// const list = [
//   {
//     id: 1,
//     title: [
//       "Sáng: Thu gom tại MCP 1",
//       "Sáng: Thu gom tại MCP 2",
//       "Sáng: Thu gom tại MCP 3",
//     ],
//     from: "20/9",
//     to: "26/9",
//   },
//   {
//     id: 2,
//     title: "Sáng: Thu gom tại MCP 3",
//     from: "10/11",
//     to: "1/12",
//   },
//   {
//     id: 3,
//     title: "Sáng: Thu gom tại MCP 2",
//     from: "20/9",
//     to: "26/9",
//   },
//   {
//     id: 4,
//     title: "Chiều: Thu gom tại MCP 5",
//     from: "20/9",
//     to: "26/9",
//   },
//   {
//     id: 5,
//     title: "Chiều: Thu gom tại MCP 5",
//     from: "20/9",
//     to: "26/9",
//   },
// ];

// const ListTask = (list) => {
//   return (
//     <>
//       <li className="list-group-item list-group-item-action">
//         <div className="left-column">
//           {list.title}
//         </div>
//         <div className="bottom-column">
//           {" "}
//           {list.from} to {list.to}{" "}
//         </div>
//         <div className="right-column">
//           {" "}
//           <img type="button" className="charmbin" src={charmbin1} />
//         </div>
//       </li>
//       <br />
//     </>
//   );
// };

// const Heading = () => (
//   <div className="rectangle-35">
//     <div className="logo">
//       <div className="rectangle-1">
//         <span className="logo-1">LOGO</span>
//       </div>
//     </div>
//     <button className="frame-5">JANITOR</button>
//     <div className="frame-6">COLLECTOR</div>
//     <div className="frame-7">ROUTE</div>
//     <img className="vector" src={vector} />
//     <img className="vector-1" src={vector1} />
//     <img className="ellipse-4" src={ellipse4} />
//   </div>
// );

// const Info = () => (
//   <div className="flex-container">
//     <img className="ellipse-2" src={ellipse2} />
//     <div className="flex-container-1">
//       <span className="name">Nick</span>
//       <span className="janitor">Janitor</span>
//     </div>
//     <span className="id">ID #0123</span>
//   </div>
// );

// const Assign = () => (
//   <div className="position-absolute top end-0">
//     <span>MCP: MCP1, MCP2, MCP3</span>
//     <br />
//     <a href="https://www.google.com" type="button" className="btn btn-success">
//       Assign MCP
//     </a>
//     <br />
//     <br />
//     <br />
//     Vehicle: Troller 1
//     <br />
//     <a href="https://www.google.com" type="button" className="btn btn-danger">
//       Assign vehicle
//     </a>
//   </div>
// );

// const NewTask = () => (
//   <div className="new-task">
//     <button type="button" className="btn btn-secondary">
//       New Task
//     </button>
//   </div>
// );

// const App = () => {
//   return (
//     <div className="information-for-task">
//       <Heading />
//       <span className="task-information">TASK INFORMATION</span>
//       <div className="rectangle-3">
//         <Info />
//         <div className="position-relative">
//           <div className="body">
//             <Assign />
//             <div className="test">
//               <ul className="list-group">
//                 {list.map((a) => (
//                   <ListTask
//                     key={a.id}
//                     title={a.title}
//                     from={a.from}
//                     to={a.to}
//                   />
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <NewTask />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;

import "./TaskInfo.css";
import ellipse4 from "../assets/ellipse4.png";
import charmbin1 from "../assets/charmbin1.svg";
import ellipse2 from "../assets/ellipse2.png";
import vector from "../assets/vector.svg";
import vector1 from "../assets/vector1.svg";

const list = [
  {
    id: 1,
    title: [
      "Sáng: Thu gom tại MCP 1",
      "Sáng: Thu gom tại MCP 2",
      "Sáng: Thu gom tại MCP 3",
    ],
    from: "20/9",
    to: "26/9",
  },
  {
    id: 2,
    title: "Sáng: Thu gom tại MCP 3",
    from: "10/11",
    to: "1/12",
  },
  {
    id: 3,
    title: "Sáng: Thu gom tại MCP 2",
    from: "20/9",
    to: "26/9",
  },
  {
    id: 4,
    title: "Chiều: Thu gom tại MCP 5",
    from: "20/9",
    to: "26/9",
  },
  {
    id: 5,
    title: "Chiều: Thu gom tại MCP 5",
    from: "20/9",
    to: "26/9",
  },
];

const ListTask = (list) => {
  return (
    <>
    <br />
      <li className="list-group-item list-group-item-action border">
        <div className="left-column">
          {list.title}
        </div>
        <div className="bottom-column">
          {" "}
          {list.from} to {list.to}{" "}
        </div>
        <div className="right-column">
          {" "}
          <img type="button" className="charmbin" src={charmbin1} />
        </div>
      </li>
    </>
  );
};

const Heading = () => (
  <div className="rectangle-35">
    <div className="logo">
      <div className="rectangle-1">
        <span className="logo-1">LOGO</span>
      </div>
    </div>
    <button className="frame">JANITOR</button>
    <div className="frame">COLLECTOR</div>
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

const NewTask = () => (
  <div className="new-task">
    <button type="button" className="btn btn-secondary">
      New Task
    </button>
  </div>
);

const TaskInfo = () => {
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
              <ul className="list-group">
              {list.map((a) => (
                  <ListTask
                    key={a.id}
                    title={a.title}
                    from={a.from}
                    to={a.to}
                  />
                ))}
              </ul>
            </div>
          </div>
          <NewTask />
        </div>
      </div>
    </div>
  );
};
export default TaskInfo;
