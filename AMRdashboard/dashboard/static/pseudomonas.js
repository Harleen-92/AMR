var nodes = null;
var edges = null;
var network = null;

function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [{
      id: 1,
      label: "CEFEPIME_I"
    },
    {
      id: 2,
      label: "CEFTAZIDIME_I"
    },
    {
      id: 3,
      label: "LEVOFLOXACIN_I"
    },
    {
      id: 4,
      label: "MEROPENEM_I"
    },
    {
      id: 5,
      label: "PIPERACILLIN_TAZOBACTAM_I"
    },
    {
      id: 6,
      label: "WGI_ESTIMATE_GOVERNMENT_EFFECTIVENESS"
    },
    {
      id: 7,
      label: "GBD_VAL_CIRRHOSIS_HEPB_PR"
    },
    {
      id: 8,
      label: "GBD_VAL_RADON"
    },
    {
      id: 9,
      label: "AMIKACIN_I"
    },
    {
      id: 10,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS_CAPPED"
    },
    {
      id: 11,
      label: "GBD_VAL_HOSPITAL_BEDS_PER1000"
    },
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
   {
     from: 1,
     to: 2,
     value: 1
   },
   {
     from: 1,
     to: 3,
     value: 1
   },
   {
     from: 1,
     to: 4,
     value: 1
   },
   {
     from: 1,
     to: 5,
     value: 1
   },
   {
     from: 1,
     to: 9,
     value: 1
   },
   {
     from: 2,
     to: 5,
     value: 1
   },
   {
     from: 3,
     to: 5,
     value: 0.673076923
   },
   {
     from: 3,
     to: 9,
     value: 1
   },
   {
     from: 4,
     to: 1,
     value: 1
   },
   {
     from: 4,
     to: 3,
     value: 1
   },
   {
     from: 4,
     to: 5,
     value: 0.913461538
   },
   {
     from: 5,
     to: 2,
     value: 1
   },
   {
     from: 5,
     to: 3,
     value: 0.673076923
   },
   {
     from: 6,
     to: 1,
     value: 0.942307692
   },
   {
     from: 6,
     to: 7,
     value: 1
   },
   {
     from: 6,
     to: 8,
     value: 1
   },
   {
     from: 6,
     to: 9,
     value: 1
   },
   {
     from: 6,
     to: 10,
     value: 1
   },
   {
     from: 6,
     to: 11,
     value: 1
   },
   {
     from: 7,
     to: 6,
     value: 1
   },
   {
     from: 7,
     to: 8,
     value: 1
   },
   {
     from: 7,
     to: 10,
     value: 1
   },
   {
     from: 7,
     to: 11,
     value: 1
   },
   {
     from: 8,
     to: 6,
     value: 1
   },
   {
     from: 8,
     to: 7,
     value: 1
   },
   {
     from: 8,
     to: 10,
     value: 1
   },
   {
     from: 8,
     to: 11,
     value: 1
   },
   {
     from: 9,
     to: 2,
     value: 0.682692308
   },
   {
     from: 10,
     to: 1,
     value: 0.644230769
   },
   {
     from: 10,
     to: 4,
     value: 1
   },
   {
     from: 10,
     to: 6,
     value: 1
   },
   {
     from: 10,
     to: 7,
     value: 1
   },
   {
     from: 10,
     to: 8,
     value: 1
   },
   {
     from: 10,
     to: 11,
     value: 1
   },
   {
     from: 11,
     to: 4,
     value: 1
   },
   {
     from: 11,
     to: 6,
     value: 1
   },
   {
     from: 11,
     to: 7,
     value: 1
   },
   {
     from: 11,
     to: 8,
     value: 1
   },
   {
     from: 11,
     to: 10,
     value: 1
   }
 ];

 // Instantiate our network object.
 var container = document.getElementById("mynetwork");
 var data = {
   nodes: nodes,
   edges: edges,
 };
 var options = {
   /*layout: {
       improvedLayout: true
   },*/
   interaction: {
     dragNodes:true,
   dragView: true,
   hideEdgesOnDrag: false,
   hideEdgesOnZoom: false,
   hideNodesOnDrag: false,
   hover: true,
   hoverConnectedEdges: true,
   keyboard: {
     enabled: false,
     speed: {x: 10, y: 10, zoom: 0.02},
     bindToWindow: true
   },
   multiselect: false,
   navigationButtons: true,
   selectable: true,
   selectConnectedEdges: true,
   tooltipDelay: 300,
   zoomSpeed: 1,
   zoomView: true
   },
   nodes: {
     clustering: true,
     scaling: {
      min: 10,
      max: 30,
      label: {
        enabled: false,
        min: 12,
        max: 20,
        maxVisible: 30,
        drawThreshold: 5
      },
      scaling: {
        customScalingFunction: function(min, max, total, value) {
          return value / total;
        },
        min: 5,
        max: 150,
      },
    },
     borderWidth: 3,
     borderWidthSelected: 3,
     brokenImage:undefined,
     shape: "dot",
     chosen: true,
     color: {
     border: '#2B7CE9',
     background: '#97C2FC',
     highlight: {
       border: 'green',
       background: '#A3E4D7'
     },
     hover: {
       border: 'green',
       background: '#A3E4D7'
     }
   },
     scaling: {
       customScalingFunction: function(min, max, total, value) {
         return value / total;
       },
       min: 5,
       max: 150,
     },
   },
   edges: {
     scaling:{
     min: 1,
     max: 8,
   },
     arrows: {
     to: {
       enabled: true,
       imageHeight: undefined,
       imageWidth: undefined,
       scaleFactor: 1,
       src: undefined,
       type: "arrow"
     },
     middle: {
       enabled:false,
       imageHeight: 32,
       imageWidth: 32,
       scaleFactor: 1,
       src: "https://visjs.org/images/visjs_logo.png",
       type: "image"
     },
     from: {
       enabled: false,
       imageHeight: undefined,
       imageWidth: undefined,
       scaleFactor: 1,
       src: undefined,
       type: "arrow"
     },
   },
   endPointOffset: {
     from: 0,
     to: 0
   },
   arrowStrikethrough: false,
   chosen: true,
   /*color: {
     color:'#848484',
     highlight:'#1B4F72',
     hover: '#848484',
     inherit: 'from',
     opacity:1.0
   },*/
     color: {
     color: '#AED6F1',
     highlight:'#1B4F72',
     hover: '#BA4A00',
     inherit: 'from',
     opacity:1.0,
   },
 },
 };
 network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
 draw();
});
