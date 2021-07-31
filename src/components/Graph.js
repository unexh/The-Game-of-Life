import "./Graph.css";
import Node from "./Node";
import { useState } from "react";
const Graph = (props) => {
    let nodeId = [];
    for (let i = 1; i <= props.count; i++){
        nodeId.push(i);
    }
    console.log(nodeId);
    return <div className="GraphBackground">
        {nodeId.map(id => {
            return <Node key={id} id={id}/>
        })}
        <Node></Node>
    </div>;
}

export default Graph;