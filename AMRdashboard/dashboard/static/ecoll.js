var nodes = null;
var edges = null;
var network = null;

function draw() {

  nodes = [{
      id: 1,
      /*value: 2,*/
      label: "CEFEPIME_I"
    },
    {
      id: 2,
        /*value: 2,*/
      label: "PIPERACILLIN_TAZOBACTAM_I"
    },
    {
      id: 3,
        /*value: 2,*/
      label: "AMPICILLIN_I"
    },
    {
      id: 4,
        /*value: 2,*/
      label: "CEFTAZIDIME_I"
    },
    {
      id: 5,
        /*value: 2,*/
      label: "CEFTRIAXONE_I"
    },
    {
      id: 6,
      /*value: 2,*/
      label: "AMOXYCILLIN_CLAVULANATE_I"
    },
    {
      id: 7,
        /*value: 2,*/
      label: "GBD_VAL_ABORTION_LEGALITY"
    },
    {
      id: 8,
        /*value: 2,*/
      label: "WGI_ESTIMATE_VOICEAND_ACCOUNTABILITY"
    },
    {
      id: 9,
      /*value: 2,*/
      label: "WGI_ESTIMATE_CONTROLOF_CORRUPTION"
    },
    {
      id: 10,
      /*value: 2,*/
      label: "GBD_VAL_DENGUE_OUTBREAKS"
    },
    {
      id: 11,
      /*value: 2,*/
      label: "GBD_VAL_FORTIFICATION_FOLIC_ACID_COMPOSITE"
    },
    {
      id: 12,
      /*value: 2,*/
      label: "GBD_VAL_FRUITS_G_ADJ"
    },
    {
      id: 13,
      /*value: 2,*/
      label: "GBD_VAL_GOLD_BIN"
    },
    {
      id: 14,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS_CAPPED"
    },
    {
      id: 15,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS2"
    },
    {
      id: 16,
      label: "GBD_VAL_LRI_ANTIBIOTICS"
    },
    {
      id: 17,
      label: "GBD_VAL_MEAN_TEMPERATURE_LONG_TERM"
    },
    {
      id: 18,
      label: "GBD_VAL_SEV_AGESTD_SCALAR_DIARRHEA"
    },
    {
      id: 19,
      label: "GBD_VAL_SEV_SCALAR_DIARRHEA"
    },
    {
      id: 20,
      label: "GBD_VAL_SEV_WASH_WATER"
    },
    {
      id: 21,
      label: "GBD_VAL_SUGAR_G_UNADJ"
    },
    {
      id: 22,
      label: "FINANCE_GFDD_SM_01"
    },
    {
      id: 23,
      label: "GBD_VAL_FRUITS_G_UNADJ"
    },
    {
      id: 24,
      label: "LEVOFLOXACIN_I"
    },
    {
      id: 25,
      label: "AMIKACIN_I"
    },
    {
      id: 26,
      label: "MEROPENEM_I"
    },
    {
      id: 27,
      label: "TIGECYCLINE_I"
    },
    {
      id: 28,
      label: "GBD_VAL_MEASLES_VACC_COV_PROP_2"
    },
    {
      id: 29,
      label: "GBD_VAL_VEHICLES_2WHEELS_PC"
    },
    {
      id: 30,
      label: "GBD_VAL_LEAD_GAS_SMOOTH"
    }
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
     to: 24,
     value: 1
   },
   {
     from: 1,
     to: 6,
     value: 1
   },
   {
     from: 1,
     to: 25,
     value: 1
   },
   {
     from: 2,
     to: 25,
     value: 0.963636364
   },
   {
     from: 3,
     to: 24,
     value: 1
   },
   {
     from: 3,
     to: 6,
     value: 1
   },
   {
     from: 4,
     to: 5,
     value: 1
   },
   {
     from: 4,
     to: 6,
     value: 1
   },
   {
     from: 4,
     to: 26,
     value: 1
   },
   {
     from: 5,
     to: 3,
     value: 1
   },
   {
     from: 6,
     to: 2,
     value: 1
   },
   {
     from: 6,
     to: 24,
     value: 0.972727273
   },
   {
     from: 6,
     to: 27,
     value: 0.736363636
   },
   {
     from: 7,
     to: 8,
     value: 1
   },
   {
     from: 7,
     to: 9,
     value: 1
   },
   {
     from: 7,
     to: 11,
     value: 1
   },
   {
     from: 7,
     to: 12,
     value: 1
   },
   {
     from: 7,
     to: 13,
     value: 0.936363636
   },
   {
     from: 7,
     to: 14,
     value: 1
   },
   {
     from: 7,
     to: 15,
     value: 1
   },
   {
     from: 7,
     to: 16,
     value: 1
   },
   {
     from: 7,
     to: 17,
     value: 1
   },
   {
     from: 7,
     to: 28,
     value: 0.981818182
   },
   {
     from: 7,
     to: 18,
     value: 1
   },
   {
     from: 7,
     to: 21,
     value: 1
   },
   {
     from: 7,
     to: 29,
     value: 1
   },
   {
     from: 7,
     to: 22,
     value: 1
   },
   {
     from: 7,
     to: 23,
     value: 1
   },
   {
     from: 8,
     to: 1,
     value: 0.881818182
   },
   {
     from: 8,
     to: 7,
     value: 1
   },
   {
     from: 8,
     to: 9,
     value: 1
   },
   {
     from: 8,
     to: 12,
     value: 1
   },
   {
     from: 8,
     to: 16,
     value: 1
   },
   {
     from: 8,
     to: 17,
     value: 1
   },
   {
     from: 8,
     to: 18,
     value: 1
   },
   {
     from: 8,
     to: 19,
     value: 0.745454545
   },
   {
     from: 8,
     to: 21,
     value: 1
   },
   {
     from: 8,
     to: 29,
     value: 1
   },
   {
     from: 8,
     to: 22,
     value: 1
   },
   {
     from: 8,
     to: 23,
     value: 1
   },
   {
     from: 9,
     to: 7,
     value: 1
   },
   {
     from: 9,
     to: 8,
     value: 1
   },
   {
     from: 9,
     to: 11,
     value: 1
   },
   {
     from: 9,
     to: 12,
     value: 1
   },
   {
     from: 9,
     to: 13,
     value: 1
   },
   {
     from: 9,
     to: 30,
     value: 1
   },
   {
     from: 9,
     to: 18,
     value: 1
   },
   {
     from: 9,
     to: 21,
     value: 0.890909091
   },
   {
     from: 9,
     to: 22,
     value: 0.890909091
   },
   {
     from: 10,
     to: 4,
     value: 1
   },
   {
     from: 10,
     to: 13,
     value: 0.927272727
   },
   {
     from: 10,
     to: 28,
     value: 0.690909091
   },
   {
     from: 10,
     to: 29,
     value: 0.709090909
   },
   {
     from: 11,
     to: 30,
     value: 1
   },
   {
     from: 12,
     to: 1,
     value: 0.863636364
   },
   {
     from: 12,
     to: 7,
     value: 1
   },
   {
     from: 12,
     to: 8,
     value: 1
   },
   {
     from: 12,
     to: 9,
     value: 1
   },
   {
     from: 12,
     to: 13,
     value: 0.936363636
   },
   {
     from: 12,
     to: 14,
     value: 1
   },
   {
     from: 12,
     to: 15,
     value: 1
   },
   {
     from: 12,
     to: 17,
     value: 1
   },
   {
     from: 12,
     to: 18,
     value: 1
   },
   {
     from: 12,
     to: 19,
     value: 0.754545455
   },
   {
     from: 12,
     to: 20,
     value: 1
   },
   {
     from: 12,
     to: 21,
     value: 0.890909091
   },
   {
     from: 12,
     to: 29,
     value: 1
   },
   {
     from: 12,
     to: 22,
     value: 1
   },
   {
     from: 12,
     to: 23,
     value: 1
   },
   {
     from: 13,
     to: 11,
     value: 1
   },
   {
     from: 14,
     to: 4,
     value: 1
   },
   {
     from: 14,
     to: 5,
     value: 1
   },
   {
     from: 14,
     to: 26,
     value: 1
   },
   {
     from: 14,
     to: 10,
     value: 1
   },
   {
     from: 14,
     to: 15,
     value: 1
   },
   {
     from: 14,
     to: 30,
     value: 1
   },
   {
     from: 15,
     to: 28,
     value: 1
   },
   {
     from: 16,
     to: 15,
     value: 1
   },
   {
     from: 16,
     to: 17,
     value: 1
   },
   {
     from: 16,
     to: 20,
     value: 1
   },
   {
     from: 17,
     to: 1,
     value: 0.527272727
   },
   {
     from: 17,
     to: 10,
     value: 1
   },
   {
     from: 17,
     to: 21,
     value: 0.972727273
   },
   {
     from: 18,
     to: 7,
     value: 1
   },
   {
     from: 18,
     to: 8,
     value: 1
   },
   {
     from: 18,
     to: 9,
     value: 1
   },
   {
     from: 18,
     to: 12,
     value: 1
   },
   {
     from: 18,
     to: 13,
     value: 0.927272727
   },
   {
     from: 18,
     to: 16,
     value: 1
   },
   {
     from: 18,
     to: 19,
     value: 1
   },
   {
     from: 18,
     to: 22,
     value: 0.890909091
   },
   {
     from: 19,
     to: 8,
     value: 0.745454545
   },
   {
     from: 19,
     to: 12,
     value: 0.754545455
   },
   {
     from: 19,
     to: 18,
     value: 1
   },
   {
     from: 19,
     to: 20,
     value: 1
   },
   {
     from: 19,
     to: 21,
     value: 0.890909091
   },
   {
     from: 19,
     to: 22,
     value: 0.754545455
   },
   {
     from: 20,
     to: 14,
     value: 1
   },
   {
     from: 21,
     to: 10,
     value: 1
   },
   {
     from: 21,
     to: 14,
     value: 1
   },
   {
     from: 21,
     to: 17,
     value: 0.972727273
   },
   {
     from: 21,
     to: 20,
     value: 1
   },
   {
     from: 21,
     to: 29,
     value: 0.518181818
   },
   {
     from: 22,
     to: 7,
     value: 1
   },
   {
     from: 22,
     to: 8,
     value: 1
   },
   {
     from: 22,
     to: 9,
     value: 0.890909091
   },
   {
     from: 22,
     to: 12,
     value: 1
   },
   {
     from: 22,
     to: 14,
     value: 1
   },
   {
     from: 22,
     to: 15,
     value: 1
   },
   {
     from: 22,
     to: 30,
     value: 1
   },
   {
     from: 22,
     to: 18,
     value: 0.890909091
   },
   {
     from: 22,
     to: 19,
     value: 0.754545455
   },
   {
     from: 22,
     to: 23,
     value: 1
   },
   {
     from: 23,
     to: 7,
     value: 1
   },
   {
     from: 23,
     to: 8,
     value: 1
   },
   {
     from: 23,
     to: 10,
     value: 1
   },
   {
     from: 23,
     to: 11,
     value: 1
   },
   {
     from: 23,
     to: 12,
     value: 1
   },
   {
     from: 23,
     to: 16,
     value: 1
   },
   {
     from: 23,
     to: 29,
     value: 0.745454545
   },
   {
     from: 23,
     to: 22,
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
   manipulation: {
     enabled: true,
     initiallyActive: false,
     addNode: true,
     addEdge: true,
     editNode: undefined,
     editEdge: true,
     deleteNode: true,
     deleteEdge: true,
     controlNodeStyle:{
       // all node options are valid.
     }
   },
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
