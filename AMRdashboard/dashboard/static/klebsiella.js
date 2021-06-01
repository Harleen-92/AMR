var nodes = null;
var edges = null;
var network = null;

function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [{
      id: 1,
    /*value: 2,*/
      label: "AMOXYCILLIN_CLAVULANATE_I"
    },
    {
      id: 2,
      /*value: 2,*/
      label: "CEFEPIME_I"
    },
    {
      id: 3,
      /*value: 2,*/
      label: "GBD_VAL_FRUITS_G_ADJ"
    },
    {
      id: 4,
      label: "GBD_VAL_SEV_WASH_SANITATION"
    },
    {
      id: 5,
        /*value: 2,*/
      label: "CEFTAZIDIME_I"
    },
    {
      id: 6,
      label: "LEVOFLOXACIN_I"
    },
    {
      id: 7,
        /*value: 2,*/
      label: "PIPERACILLIN_TAZOBACTAM_I"
    },
    {
      id: 8,
        /*value: 2,*/
      label: "CEFTRIAXONE_I"
    },
    {
      id: 9,
      label: "FINANCE_GFDD_EI_04"
    },
    {
      id: 10,
      label: "MEROPENEM_I"
    },
    {
      id: 11,
      label: "WGI_ESTIMATE_RULEOF_LAW"
    },
    {
      id: 12,
      /*value: 2,*/
      label: "WGI_ESTIMATE_CONTROLOF_CORRUPTION"
    },
    {
      id: 13,
        /*value: 2,*/
      label: "GBD_VAL_ABORTION_LEGALITY"
    },

    {
      id: 14,
      /*value: 2,*/
      label: "GBD_VAL_DENGUE_OUTBREAKS"
    },
    {
      id: 15,
      /*value: 2,*/
      label: "GBD_VAL_FORTIFICATION_FOLIC_ACID_COMPOSITE"
    },
    {
      id: 16,
      /*value: 2,*/
      label: "GBD_VAL_GOLD_BIN"
    },
    {
      id: 17,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS_CAPPED"
    },
    {
      id: 18,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS2"
    },
    {
      id: 19,
      label: "WGI_ESTIMATE_RULEOF_LAW"
    },
    {
      id: 20,
      label: "GBD_VAL_MEAN_TEMPERATURE_LONG_TERM"
    },

    {
      id: 21,
      label: "GBD_VAL_POP_DENS_UNDER_150_PSQKM_PCT"
    },
    {
      id: 22,
      label: "GBD_VAL_RAINFALL_QUINT5_PROP"
    },
    {
      id: 23,
      label: "GBD_VAL_RAINFALL_QUINT5_PROP"
    },
    {
      id: 24,
      label: "GBD_VAL_FRUITS_G_UNADJ"
    },
    {
      id: 25,
      label: "FINANCE_GFDD_OI_01"
    },
    {
      id: 26,
      label: "AMIKACIN_I"
    },
    {
      id: 27,
        /*value: 2,*/
      label: "AMPICILLIN_I"
    },
    {
      id: 28,
      label: "GBD_VAL_HEPB3_VACC_COVERAGE_PROP_LAG5"
    },
    {
      id: 29,
      label: "GBD_VAL_SEV_SCALAR_ROAD_INJ"
    },
    {
      id: 30,
      label: "TIGECYCLINE_I"
    },
    {
      id: 31,
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
     to: 26,
     value: 0.663461538
   },
   {
     from: 1,
     to: 27,
     value: 1
   },
   {
     from: 1,
     to: 6,
     value: 0.990384615
   },
   {
     from: 1,
     to: 7,
     value: 1
   },
   {
     from: 2,
     to: 27,
     value: 0.923076923
   },
   {
     from: 2,
     to: 5,
     value: 1
   },
   {
     from: 2,
     to: 6,
     value: 1
   },
   {
     from: 2,
     to: 7,
     value: 1
   },
   {
     from: 2,
     to: 8,
     value: 1
   },
   {
     from: 3,
     to: 4,
     value: 1
   },
   {
     from: 3,
     to: 11,
     value: 1
   },
   {
     from: 3,
     to: 12,
     value: 0.990384615
   },
   {
     from: 3,
     to: 13,
     value: 1
   },
   {
     from: 3,
     to: 16,
     value: 0.826923077
   },
   {
     from: 3,
     to: 17,
     value: 0.990384615
   },
   {
     from: 3,
     to: 18,
     value: 1
   },
   {
     from: 3,
     to: 19,
     value: 1
   },
   {
     from: 3,
     to: 28,
     value: 0.971153846
   },
   {
     from: 3,
     to: 20,
     value: 1
   },
   {
     from: 3,
     to: 21,
     value: 1
   },
   {
     from: 3,
     to: 22,
     value: 1
   },
   {
     from: 3,
     to: 23,
     value: 1
   },
   {
     from: 3,
     to: 25,
     value: 1
   },
   {
     from: 4,
     to: 2,
     value: 0.875
   },
   {
     from: 4,
     to: 3,
     value: 1
   },
   {
     from: 4,
     to: 9,
     value: 1
   },
   {
     from: 4,
     to: 11,
     value: 1
   },
   {
     from: 4,
     to: 13,
     value: 1
   },
   {
     from: 4,
     to: 17,
     value: 0.807692308
   },
   {
     from: 4,
     to: 18,
     value: 1
   },
   {
     from: 4,
     to: 20,
     value: 0.990384615
   },
   {
     from: 4,
     to: 21,
     value: 1
   },
   {
     from: 4,
     to: 22,
     value: 1
   },
   {
     from: 4,
     to: 29,
     value: 0.884615385
   },
   {
     from: 4,
     to: 24,
     value: 1
   },
   {
     from: 4,
     to: 25,
     value: 0.932692308
   },
   {
     from: 5,
     to: 2,
     value: 1
   },
   {
     from: 5,
     to: 7,
     value: 0.971153846
   },
   {
     from: 5,
     to: 8,
     value: 1
   },
   {
     from: 5,
     to: 10,
     value: 1
   },
   {
     from: 6,
     to: 30,
     value: 1
   },
   {
     from: 7,
     to: 6,
     value: 1
   },
   {
     from: 7,
     to: 10,
     value: 1
   },
   {
     from: 8,
     to: 2,
     value: 1
   },
   {
     from: 9,
     to: 4,
     value: 1
   },
   {
     from: 9,
     to: 8,
     value: 1
   },
   {
     from: 9,
     to: 21,
     value: 1
   },
   {
     from: 9,
     to: 22,
     value: 1
   },
   {
     from: 9,
     to: 25,
     value: 1
   },
   {
     from: 10,
     to: 26,
     value: 0.836538462
   },
   {
     from: 11,
     to: 1,
     value: 0.855769231
   },
   {
     from: 11,
     to: 12,
     value: 1
   },
   {
     from: 11,
     to: 15,
     value: 0.701923077
   },
   {
     from: 11,
     to: 16,
     value: 1
   },
   {
     from: 11,
     to: 19,
     value: 0.971153846
   },
   {
     from: 11,
     to: 28,
     value: 1
   },
   {
     from: 12,
     to: 31,
     value: 1
   },
   {
     from: 13,
     to: 15,
     value: 0.653846154
   },
   {
     from: 13,
     to: 24,
     value: 0.923076923
   },
   {
     from: 14,
     to: 5,
     value: 1
   },
   {
     from: 15,
     to: 16,
     value: 0.980769231
   },
   {
     from: 15,
     to: 31,
     value: 1
   },
   {
     from: 16,
     to: 13,
     value: 0.990384615
   },
   {
     from: 16,
     to: 14,
     value: 0.778846154
   },
   {
     from: 16,
     to: 15,
     value: 0.980769231
   },
   {
     from: 16,
     to: 25,
     value: 0.576923077
   },
   {
     from: 17,
     to: 3,
     value: 0.990384615
   },
   {
     from: 17,
     to: 4,
     value: 0.807692308
   },
   {
     from: 17,
     to: 5,
     value: 1
   },
   {
     from: 17,
     to: 10,
     value: 1
   },
   {
     from: 17,
     to: 14,
     value: 1
   },
   {
     from: 17,
     to: 18,
     value: 1
   },
   {
     from: 17,
     to: 19,
     value: 1
   },
   {
     from: 17,
     to: 31,
     value: 1
   },
   {
     from: 17,
     to: 21,
     value: 0.923076923
   },
   {
     from: 17,
     to: 22,
     value: 0.807692308
   },
   {
     from: 17,
     to: 23,
     value: 0.769230769
   },
   {
     from: 17,
     to: 25,
     value: 0.932692308
   },
   {
     from: 18,
     to: 3,
     value: 1
   },
   {
     from: 18,
     to: 23,
     value: 1
   },
   {
     from: 18,
     to: 17,
     value: 1
   },
   {
     from: 18,
     to: 20,
     value: 1
   },
   {
     from: 18,
     to: 21,
     value: 1
   },
   {
     from: 18,
     to: 25,
     value: 1
   },
   {
     from: 19,
     to: 28,
     value: 1
   },
   {
     from: 19,
     to: 24,
     value: 0.932692308
   },
   {
     from: 20,
     to: 2,
     value: 0.875
   },
   {
     from: 20,
     to: 11,
     value: 1
   },
   {
     from: 20,
     to: 12,
     value: 1
   },
   {
     from: 20,
     to: 13,
     value: 1
   },
   {
     from: 20,
     to: 14,
     value: 1
   },
   {
     from: 20,
     to: 19,
     value: 1
   },
   {
     from: 21,
     to: 1,
     value: 0.528846154
   },
   {
     from: 21,
     to: 3,
     value: 1
   },
   {
     from: 21,
     to: 4,
     value: 1
   },
   {
     from: 21,
     to: 9,
     value: 1
   },
   {
     from: 21,
     to: 11,
     value: 1
   },
   {
     from: 21,
     to: 13,
     value: 1
   },
   {
     from: 21,
     to: 15,
     value: 0.701923077
   },
   {
     from: 21,
     to: 16,
     value: 0.605769231
   },
   {
     from: 21,
     to: 17,
     value: 0.923076923
   },
   {
     from: 21,
     to: 18,
     value: 1
   },
   {
     from: 21,
     to: 28,
     value: 1
   },
   {
     from: 21,
     to: 20,
     value: 0.971153846
   },
   {
     from: 21,
     to: 22,
     value: 1
   },
   {
     from: 21,
     to: 23,
     value: 1
   },
   {
     from: 21,
     to: 29,
     value: 1
   },
   {
     from: 21,
     to: 24,
     value: 1
   },
   {
     from: 21,
     to: 25,
     value: 0.990384615
   },
   {
     from: 22,
     to: 3,
     value: 1
   },
   {
     from: 22,
     to: 4,
     value: 1
   },
   {
     from: 22,
     to: 9,
     value: 1
   },
   {
     from: 22,
     to: 16,
     value: 0.567307692
   },
   {
     from: 22,
     to: 17,
     value: 0.807692308
   },
   {
     from: 22,
     to: 20,
     value: 1
   },
   {
     from: 22,
     to: 21,
     value: 1
   },
   {
     from: 22,
     to: 25,
     value: 0.913461538
   },
   {
     from: 23,
     to: 3,
     value: 1
   },
   {
     from: 23,
     to: 17,
     value: 0.769230769
   },
   {
     from: 23,
     to: 21,
     value: 1
   },
   {
     from: 23,
     to: 29,
     value: 1
   },
   {
     from: 23,
     to: 25,
     value: 0.971153846
   },
   {
     from: 24,
     to: 12,
     value: 0.980769231
   },
   {
     from: 24,
     to: 14,
     value: 0.980769231
   },
   {
     from: 24,
     to: 29,
     value: 0.903846154
   },
   {
     from: 25,
     to: 3,
     value: 1
   },
   {
     from: 25,
     to: 4,
     value: 0.932692308
   },
   {
     from: 25,
     to: 9,
     value: 1
   },
   {
     from: 25,
     to: 16,
     value: 0.576923077
   },
   {
     from: 25,
     to: 17,
     value: 0.932692308
   },
   {
     from: 25,
     to: 18,
     value: 1
   },
   {
     from: 25,
     to: 19,
     value: 0.971153846
   },
   {
     from: 25,
     to: 28,
     value: 0.980769231
   },
   {
     from: 25,
     to: 21,
     value: 0.990384615
   },
   {
     from: 25,
     to: 22,
     value: 0.913461538
   },
   {
     from: 25,
     to: 23,
     value: 0.971153846
   },
   {
     from: 25,
     to: 29,
     value: 0.644230769
   },
   {
     from: 25,
     to: 24,
     value: 0.971153846
   }
  ]

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
        enabled: false,
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
