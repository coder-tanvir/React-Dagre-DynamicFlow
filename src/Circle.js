import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import './shape.css';



function Circle() {
      return (
    <div className="circle">
      <div>
      <Handle type="target" position={Position.Top} id="a" />
         { <label htmlFor="text">Start</label>
        /*<input id="text" name="text" onChange={onChange} />  */}
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default Circle;