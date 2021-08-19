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
        <img src={props.img} alt="" />
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
