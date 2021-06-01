var nodes = null;
var edges = null;
var network = null;

function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [{
      id: 1,
      /*value: 2,*/
      label: "CEFTAZIDIME_I"
    },
    {
      id: 2,
        /*value: 2,*/
      label: "PIPERACILLIN_TAZOBACTAM_I"
    },
    {
      id: 3,
        /*value: 2,*/
      label: "CEFTRIAXONE_I"
    },
    {
      id: 4,
        /*value: 2,*/
      label: "WGI_ESTIMATE_RULEOF_LAW"
    },
    {
      id: 5,
        /*value: 2,*/
      label: "WGI_ESTIMATE_GOVERNMENT_EFFECTIVENESS"
    },
    {
      id: 6,
      /*value: 2,*/
      label: "GBD_VAL_MEAN_TEMPERATURE_LONG_TERM"
    },
    {
      id: 7,
        /*value: 2,*/
      label: "AMIKACIN_I"
    },
    {
      id: 8,
        /*value: 2,*/
      label: "CEFEPIME_I"
    },
    {
      id: 9,
      /*value: 2,*/
      label: "LEVOFLOXACIN_I"
    },
    {
      id: 10,
      /*value: 2,*/
      label: "GBD_VAL_DIABETES_FPG"
    },
    {
      id: 11,
      /*value: 2,*/
      label: "FINANCE_GFDD_OI_01"
    },
    {
      id: 12,
      /*value: 2,*/
      label: "WGI_ESTIMATE_CONTROLOF_CORRUPTION"
    },
    {
      id: 13,
      /*value: 2,*/
      label: "GBD_VAL_CIRRHOSIS_HEPB_PR"
    },
    {
      id: 14,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS_CAPPED"
    },
    {
      id: 15,
      label: "GBD_VAL_HOSPITAL_BEDS_PER1000"
    },
    {
      id: 16,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS2"
    },
    {
      id: 17,
      label: "GBD_VAL_PIGSEXT_PC"
    },
    {
      id: 18,
      label: "MEROPENEM_I"
    },
    {
      id: 19,
      label: "MINOCYCLINE_I"
    },
    {
      id: 20,
      label: "GBD_VAL_LEAD_GAS_SMOOTH"
    }
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
   {
     from: 1,
     to: 3,
     value: 1
   },
   {
     from: 1,
     to: 9,
     value: 0.951923076923077
   },
   {
     from: 1,
     to: 19,
     value: 0.528846153846154
   },
   {
     from: 2,
     to: 1,
     value: 0.951923076923077
   },
   {
     from: 2,
     to: 3,
     value: 1
   },
   {
     from: 2,
     to: 7,
     value: 0.625
   },
   {
     from: 2,
     to: 8,
     value: 1
   },
   {
     from: 2,
     to: 9,
     value: 0.990384615384615
   },
   {
     from: 2,
     to: 18,
     value: 1
   },
   {
     from: 3,
     to: 19,
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
     value: 0.980769230769231
   },
   {
     from: 4,
     to: 11,
     value: 1
   },
   {
     from: 4,
     to: 12,
     value: 1
   },
   {
     from: 4,
     to: 13,
     value: 1
   },
   {
     from: 5,
     to: 2,
     value: 0.836538461538461
   },
   {
     from: 5,
     to: 15,
     value: 1
   },
   {
     from: 6,
     to: 2,
     value: 0.971153846153846
   },
   {
     from: 6,
     to: 5,
     value: 0.980769230769231
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
     from: 6,
     to: 12,
     value: 1
   },

   {
     from: 6,
     to: 15,
     value: 1
   },
   {
     from: 7,
     to: 9,
     value: 0.798076923076923
   },
   {
     from: 2,
     to: 8,
     value: 1
   },
   {
     from: 8,
     to: 9,
     value: 0.846153846153846
   },
   {
     from: 9,
     to: 3,
     value: 0.951923076923077
   },
   {
     from: 9,
     to: 7,
     value: 0.798076923076923
   },
   {
     from: 10,
     to: 4,
     value: 0.980769230769231
   },
   {
     from: 10,
     to: 5,
     value: 0.759615384615385
   },
   {
     from: 10,
     to: 6,
     value: 1
   },
   {
     from: 10,
     to: 11,
     value: 1
   },
   {
     from: 10,
     to: 12,
     value: 1
   },
   {
     from: 10,
     to: 13,
     value: 0.913461538461539
   },
   {
     from: 10,
     to: 15,
     value: 1
   },
   {
     from: 10,
     to: 16,
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
     to: 10,
     value: 1
   },
   {
     from: 11,
     to: 12,
     value: 1
   },
   {
     from: 11,
     to: 14,
     value: 1
   },
   {
     from: 11,
     to: 16,
     value: 0.913461538461539
   },
   {
     from: 12,
     to: 4,
     value: 1
   },
   {
     from: 12,
     to: 6,
     value: 1
   },
   {
     from: 12,
     to: 10,
     value: 1
   },
   {
     from: 12,
     to: 11,
     value: 1
   },
   {
     from: 12,
     to: 15,
     value: 0.980769230769231
   },
   {
     from: 12,
     to: 20,
     value: 1
   },
   {
     from: 12,
     to: 16,
     value: 0.884615384615385
   },
   {
     from: 12,
     to: 17,
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
        enabled:'false',
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
      opacity:1.0
    },
  },
  };
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});
