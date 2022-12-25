import Oval from './Oval';
import Circle from './Circle';
import Triangleup from './TriangleUp';

const position = { x: 0, y: 0 };
const edgeType = "smoothstep";


const data = [
  {
    name: "IFIC Salary Disbursement",
    processFlowMaker: [
      {
        id: "",
        name: "Salary Disbursment requ",
        step: 1,
        flowState: "init",
        actionPerformed: "next",
        stepSequenceAfterAdditionalActionPerformed: "null",
        additionalAction: "back"
      },
      {
        id: "",
        name: "Added node",
        step: 1,
        flowState: "init",
        actionPerformed: "next",
        stepSequenceAfterAdditionalActionPerformed: "null",
        additionalAction: "back"
      },
  
      {
        id: "",
        name: "Salary Disbursment requ",
        step: 2,
        flowState: "inprogress",
        actionPerformed: "next",
        stepSequenceAfterAdditionalActionPerformed: 1,
        additionalAction: "null"
      },
      {
        id: "",
        name: "Salary Disbursment approval",
        step: 3,
        flowState: "end",
        actionPerformed: "null",
        stepSequenceAfterAdditionalActionPerformed: "null",
        additionalAction: "null"
      },
      {
        id: "",
        name: "Salary Disbursment Finished",
        step: 4,
        flowState: "end",
        actionPerformed: "null",
        stepSequenceAfterAdditionalActionPerformed: "null",
        additionalAction: "back"
      }
    ]
  }
];

export const initialNodes = [];

export const initialEdges = [];

////////////////////////////Making flowmaker with start and end node
let node_number=0;
let edge_number=0;
let additonal_actions=[];
let nodeNumber = 0;
let edgeNumber = 0;

//////////Adding the Start node
let flowmaker=[{
  id:`${node_number}`,
  name: "start",
  step: '0',
  flowState: "init",
  actionPerformed: "next",
  stepSequenceAfterAdditionalActionPerformed: "null",
  additionalAction: "null"

}];
node_number++;
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].processFlowMaker.length; j++) {
    flowmaker.push({
      id:`${node_number}`,
      name:`${data[i].processFlowMaker[j].name}`,
      step:`${data[i].processFlowMaker[j].step}`,
      flowState:`${data[i].processFlowMaker[j].flowState}`,
      actionPerformed:`${data[i].processFlowMaker[j].actionPerformed}`,
      stepSequenceAfterAdditionalActionPerformed:`${data[i].processFlowMaker[j].stepSequenceAfterAdditionalActionPerformed}`,
      additionalAction:`${data[i].processFlowMaker[j].additionalAction}`
    })
    node_number++;
  }
};
//////////////Add the end node
flowmaker.push({
  id:`${node_number}`,
  name: "end",
  step: `${node_number}`,
  flowState: "end",
  actionPerformed: "null",
  stepSequenceAfterAdditionalActionPerformed: "null",
  additionalAction: "null"
})

for(let i=0; i<flowmaker.length;i++){
  if(flowmaker[i].additionalAction==="back"){
    additonal_actions.push(i);
  }
}


console.log(additonal_actions);
////////////////////////////////////////////////Creating nodes from Flowmaker
let incrementor=1;
for(let k=0; k<additonal_actions.length;k++){
  let oval={
    id:`${additonal_actions[k]+incrementor}`,
    name: "back/next",
    step: `${node_number}`,
    flowState: "next",
    actionPerformed: "next",
    stepSequenceAfterAdditionalActionPerformed: "null",
    additionalAction: "extra"
  }
  flowmaker.splice(additonal_actions[k]+incrementor,0,oval);
  incrementor++;
}

for(let h=0;h<flowmaker.length;h++){
  flowmaker[h].id=`${h}`
}

console.log("Now flowmaker is", flowmaker);

for(let i=0;i< flowmaker.length;i++){
    
      let shape=flowmaker[i].name==="back/next"? "oval" : "default";
      if(i===0){
        shape="circle";
      }
      if(i===flowmaker.length-1){
        shape="triangle";
      }
      initialNodes.push({
      id: `${flowmaker[i].id}`,
      type:shape,
      data: { label: `${flowmaker[i].name}`,
      step:`${flowmaker[i].step}`,
      flowState:`${flowmaker[i].flowState}`,
      actionPerformed:`${flowmaker[i].actionPerformed}`,
      stepSequenceAfterAdditionalActionPerformed:`${flowmaker[i].stepSequenceAfterAdditionalActionPerformed}`,
      additionalAction:`${flowmaker[i].additionalAction}`},
     
    });
  
    nodeNumber++; 
}



/////////////////////////////////////////////Creating Edges from Flowmaker
for(let j=0; j< flowmaker.length; j++){
    let edgeselector=2;
    if(flowmaker[j].additionalAction==="extra"){
      if(flowmaker[j-2].additionalAction==="extra"){
        edgeselector=3;
      }
      initialEdges.push({
        id: `e${j}${j+1}a`,
        source: `${j}`,
        sourceHandle:"a",
        target: `${j+1}`,
        type: "straight",
        label: "next",
        
      });
      initialEdges.push({
            id: `e${j}${j-edgeselector}b`,
            source: `${j}`,
            sourceHandle: "b",
            target: `${j-edgeselector}`,
            type: "step",
            label: "back",
            animated:true,
            stroke:"red"
        })    
    }else{
      initialEdges.push({
        id: `e${j}${j+1}`,
        source: `${j}`,
        target: `${j+1}`,
        type: "straight",
        label: "next", 
      })
    }
 }


