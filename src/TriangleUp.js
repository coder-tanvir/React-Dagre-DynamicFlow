import { useCallback } from "react";
import {Handle,Position} from "reactflow";
import './shape.css';


const Triangleup=()=>{
    return (
        <div className="triangle-up">
            <Handle type="target" position={Position.Top} />
            <div>
            { <label htmlFor="text"></label>
            /*<input id="text" name="text" onChange={onChange} />  */}
            </div>
        </div>
    );
}

export default Triangleup;