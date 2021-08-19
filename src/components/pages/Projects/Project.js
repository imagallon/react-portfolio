import React from "react";
import "./Projects.scss";

// export default function Project(props) {
//   return (
//     <div>
//       <div className="card">
//         <div className="card-body">
//           <h5 className="card-title">{props.name}</h5>
//           <p className="card-text">{props.description}</p>
//           <a href="{props.url}" className="btn btn-primary">
//             {props.name}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Project(props) {
  return (
    <div>
      <li className="card">
        <img
          src="https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
          alt=""
        />
        <h3>
          <a href={props.url}>{props.name}</a>
        </h3>
        <h4>
          <a href={props.github}>GitHub</a>
        </h4>
        <p>{props.description}</p>
      </li>
    </div>
  );
}
