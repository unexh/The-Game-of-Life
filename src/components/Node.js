import "./Node.css";
import { useState } from "react";

const basicNodeProps = {
    color: "white"
}

const Node = (props) => {
    const [nodeProps,setNodeProps] = useState({...basicNodeProps,id : props.id})
    return <div className="Node"></div>;
}

export default Node;