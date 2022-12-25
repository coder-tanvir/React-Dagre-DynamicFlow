import { useCallback } from "react";
import {Handle,Position} from "reactflow";
import './shape.css';

const handleStyle = { left: 5 };

const Oval=()=>{
    return (
        <div className="oval">
        <Handle type="target" position={Position.Top} />
        <div>
           { <label >back/next</label>
          /*<input id="text" name="text" onChange={onChange} />  */}
        </div>
        {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Left} id="b" />
      </div>
    )
}

export default Oval;