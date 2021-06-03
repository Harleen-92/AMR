var nodes = null;
var edges = null;
var network = null;

function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [{
      id: 1,
      /*value: 2,*/
      label: "CEFEPIME_I"
    },
    {
      id: 2,
        /*value: 2,*/
      label: "GBD_VAL_FRUITS_G_UNADJ"
    },
    {
      id: 3,
        /*value: 2,*/
      label: "GBD_VAL_HAQI"
    },
    {
      id: 4,
        /*value: 2,*/
      label: "GBD_VAL_SEV_SCALAR_DIARRHEA"
    },
    {
      id: 5,
        /*value: 2,*/
      label: "AMPICILLIN_I"
    },
    {
      id: 6,
      /*value: 2,*/
      label: "AMOXYCILLIN_CLAVULANATE_I"
    },
    {
      id: 7,
        /*value: 2,*/
      label: "CEFTRIAXONE_I"
    },
    {
      id: 8,
        /*value: 2,*/
      label: "AMIKACIN_I"
    },
    {
      id: 9,
      /*value: 2,*/
      label: "LEVOFLOXACIN_I"
    },
    {
      id: 10,
      /*value: 2,*/
      label: "MEROPENEM_I"
    },
    {
      id: 11,
      /*value: 2,*/
      label: "MINOCYCLINE_I"
    },
    {
      id: 12,
      label: "PIPERACILLIN_TAZOBACTAM_I"
    },
    {
      id: 13,
      label: "WGI_RANK_CONTROLOF_CORRUPTION"
    },
    {
      id: 14,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS_CAPPED"
    },
    {
      id: 15,
      label: "GBD_VAL_ROTA_COVERAGE_PROP"
    },
    {
      id: 16,
      label: "TIGECYCLINE_I"
    },
    {
      id: 17,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS"
    },
    {
      id: 18,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS2"
    }
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    {
      from: 1,
      to: 2,
      value: 0
    },
    {
      from: 1,
      to: 3,
      value: 0
    },
    {
      from: 1,
      to: 4,
      value: 1
    },
    {
      from: 1,
      to: 5,
      value: 0.048076923
    },
    {
      from: 1,
      to: 6,
      value: 0
    },
    {
      from: 1,
      to: 7,
      value: 1
    },
    {
      from: 1,
      to: 8,
      value: 1
    },
    {
      from: 1,
      to: 9,
      value: 1
    },
    {
      from: 1,
      to: 10,
      value: 1
    },
    {
      from: 1,
      to: 11,
      value: 0
    },
    {
      from: 1,
      to: 12,
      value: 1
    },
    {
      from: 1,
      to: 13,
      value: 0
    },
    {
      from: 1,
      to: 14,
      value: 0
    },
    {
      from: 1,
      to: 15,
      value: 0
    },
    {
      from: 1,
      to: 16,
      value: 0
    },
    {
      from: 1,
      to: 17,
      value: 0
    },
    {
      from: 1,
      to: 18,
      value: 0
    },
    {
      from: 2,
      to: 1,
      value: 0
    },
    {
      from: 2,
      to: 3,
      value: 1
    },
    {
      from: 2,
      to: 4,
      value: 1
    },
    {
      from: 2,
      to: 5,
      value: 0
    },
    {
      from: 2,
      to: 6,
      value: 0
    },
    {
      from: 2,
      to: 7,
      value: 0
    },
    {
      from: 2,
      to: 8,
      value: 0
    },
    {
      from: 2,
      to: 9,
      value: 0
    },
    {
      from: 2,
      to: 10,
      value: 0
    },
    {
      from: 2,
      to: 11,
      value: 0
    },
    {
      from: 2,
      to: 12,
      value: 0
    },
    {
      from: 2,
      to: 13,
      value: 1
    },
    {
      from: 2,
      to: 14,
      value: 0.096153846
    },
    {
      from: 2,
      to: 15,
      value: 1
    },
    {
      from: 2,
      to: 16,
      value: 0
    },
    {
      from: 2,
      to: 17,
      value: 1
    },
    {
      from: 2,
      to: 18,
      value: 1
    },
    {
      from: 3,
      to: 1,
      value: 0
    },
    {
      from: 3,
      to: 2,
      value: 1
    },
    {
      from: 3,
      to: 4,
      value: 1
    },
    {
      from: 3,
      to: 5,
      value: 0
    },
    {
      from: 3,
      to: 6,
      value: 0
    },
    {
      from: 3,
      to: 7,
      value: 0
    },
    {
      from: 3,
      to: 8,
      value: 0.240384615
    },
    {
      from: 3,
      to: 9,
      value: 0
    },
    {
      from: 3,
      to: 10,
      value: 0
    },
    {
      from: 3,
      to: 11,
      value: 0
    },
    {
      from: 3,
      to: 12,
      value: 0
    },
    {
      from: 3,
      to: 13,
      value: 1
    },
    {
      from: 3,
      to: 14,
      value: 0.615384615
    },
    {
      from: 3,
      to: 15,
      value: 0.326923077
    },
    {
      from: 3,
      to: 16,
      value: 0
    },
    {
      from: 3,
      to: 17,
      value: 1
    },
    {
      from: 3,
      to: 18,
      value: 0
    },
    {
      from: 4,
      to: 1,
      value: 1
    },
    {
      from: 4,
      to: 2,
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
      value: 0
    },
    {
      from: 4,
      to: 6,
      value: 0
    },
    {
      from: 4,
      to: 7,
      value: 0
    },
    {
      from: 4,
      to: 8,
      value: 0.009615385
    },
    {
      from: 4,
      to: 9,
      value: 0
    },
    {
      from: 4,
      to: 10,
      value: 0.375
    },
    {
      from: 4,
      to: 11,
      value: 0
    },
    {
      from: 4,
      to: 12,
      value: 0
    },
    {
      from: 4,
      to: 13,
      value: 1
    },
    {
      from: 4,
      to: 14,
      value: 0.5
    },
    {
      from: 4,
      to: 15,
      value: 1
    },
    {
      from: 4,
      to: 16,
      value: 0
    },
    {
      from: 4,
      to: 17,
      value: 1
    },
    {
      from: 4,
      to: 18,
      value: 1
    },
    {
      from: 5,
      to: 1,
      value: 0.048076923
    },
    {
      from: 5,
      to: 2,
      value: 0
    },
    {
      from: 5,
      to: 3,
      value: 0
    },
    {
      from: 5,
      to: 4,
      value: 0
    },
    {
      from: 5,
      to: 6,
      value: 1
    },
    {
      from: 5,
      to: 7,
      value: 1
    },
    {
      from: 5,
      to: 8,
      value: 0
    },
    {
      from: 5,
      to: 9,
      value: 0
    },
    {
      from: 5,
      to: 10,
      value: 0
    },
    {
      from: 5,
      to: 11,
      value: 0
    },
    {
      from: 5,
      to: 12,
      value: 0.019230769
    },
    {
      from: 5,
      to: 13,
      value: 0
    },
    {
      from: 5,
      to: 14,
      value: 0
    },
    {
      from: 5,
      to: 15,
      value: 0
    },
    {
      from: 5,
      to: 16,
      value: 0
    },
    {
      from: 5,
      to: 17,
      value: 0
    },
    {
      from: 5,
      to: 18,
      value: 0
    },
    {
      from: 6,
      to: 1,
      value: 0
    },
    {
      from: 6,
      to: 2,
      value: 0
    },
    {
      from: 6,
      to: 3,
      value: 0
    },
    {
      from: 6,
      to: 4,
      value: 0
    },
    {
      from: 6,
      to: 5,
      value: 1
    },
    {
      from: 6,
      to: 7,
      value: 0
    },
    {
      from: 6,
      to: 8,
      value: 0
    },
    {
      from: 6,
      to: 9,
      value: 0
    },
    {
      from: 6,
      to: 10,
      value: 0
    },
    {
      from: 6,
      to: 11,
      value: 0
    },
    {
      from: 6,
      to: 12,
      value: 0
    },
    {
      from: 6,
      to: 13,
      value: 0
    },
    {
      from: 6,
      to: 14,
      value: 0
    },
    {
      from: 6,
      to: 15,
      value: 0
    },
    {
      from: 6,
      to: 16,
      value: 0
    },
    {
      from: 6,
      to: 17,
      value: 0
    },
    {
      from: 6,
      to: 18,
      value: 0
    },
    {
      from: 7,
      to: 1,
      value: 1
    },
    {
      from: 7,
      to: 2,
      value: 0
    },
    {
      from: 7,
      to: 3,
      value: 0
    },
    {
      from: 7,
      to: 4,
      value: 0
    },
    {
      from: 7,
      to: 5,
      value: 1
    },
    {
      from: 7,
      to: 6,
      value: 0
    },
    {
      from: 7,
      to: 8,
      value: 0
    },
    {
      from: 7,
      to: 9,
      value: 0
    },
    {
      from: 7,
      to: 10,
      value: 0
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
      value: 0.384615385
    },
    {
      from: 7,
      to: 14,
      value: 1
    },
    {
      from: 7,
      to: 15,
      value: 0
    },
    {
      from: 7,
      to: 16,
      value: 0
    },
    {
      from: 7,
      to: 17,
      value: 0
    },
    {
      from: 7,
      to: 18,
      value: 0
    },
    {
      from: 8,
      to: 1,
      value: 1
    },
    {
      from: 8,
      to: 2,
      value: 0
    },
    {
      from: 8,
      to: 3,
      value: 0.240384615
    },
    {
      from: 8,
      to: 4,
      value: 0.009615385
    },
    {
      from: 8,
      to: 5,
      value: 0
    },
    {
      from: 8,
      to: 6,
      value: 0
    },
    {
      from: 8,
      to: 7,
      value: 0
    },
    {
      from: 8,
      to: 9,
      value: 0.75
    },
    {
      from: 8,
      to: 10,
      value: 0
    },
    {
      from: 8,
      to: 11,
      value: 0
    },
    {
      from: 8,
      to: 12,
      value: 0
    },
    {
      from: 8,
      to: 13,
      value: 0
    },
    {
      from: 8,
      to: 14,
      value: 0
    },
    {
      from: 8,
      to: 15,
      value: 0
    },
    {
      from: 8,
      to: 16,
      value: 0
    },
    {
      from: 8,
      to: 17,
      value: 0
    },
    {
      from: 8,
      to: 18,
      value: 0
    },
    {
      from: 9,
      to: 1,
      value: 1
    },
    {
      from: 9,
      to: 2,
      value: 0
    },
    {
      from: 9,
      to: 3,
      value: 0
    },
    {
      from: 9,
      to: 4,
      value: 0
    },
    {
      from: 9,
      to: 5,
      value: 0
    },
    {
      from: 9,
      to: 7,
      value: 0
    },
    {
      from: 9,
      to: 7,
      value: 0
    },
    {
      from: 9,
      to: 8,
      value: 0.75
    },
    {
      from: 9,
      to: 10,
      value: 0
    },
    {
      from: 9,
      to: 11,
      value: 1
    },
    {
      from: 9,
      to: 12,
      value: 0
    },
    {
      from: 9,
      to: 13,
      value: 0
    },
    {
      from: 9,
      to: 14,
      value: 0
    },
    {
      from: 9,
      to: 15,
      value: 0
    },
    {
      from: 9,
      to: 16,
      value: 0.615384615
    },
    {
      from: 9,
      to: 17,
      value: 0
    },
    {
      from: 9,
      to: 18,
      value: 0
    },
    {
      from: 10,
      to: 1,
      value: 1
    },
    {
      from: 10,
      to: 2,
      value: 0
    },
    {
      from: 10,
      to: 3,
      value: 0
    },
    {
      from: 10,
      to: 4,
      value: 0.375
    },
    {
      from: 10,
      to: 5,
      value: 0
    },
    {
      from: 10,
      to: 6,
      value: 0
    },
    {
      from: 10,
      to: 7,
      value: 0
    },
    {
      from: 10,
      to: 8,
      value: 0
    },
    {
      from: 10,
      to: 9,
      value: 0
    },
    {
      from: 10,
      to: 11,
      value: 0
    },
    {
      from: 10,
      to: 12,
      value: 0
    },
    {
      from: 10,
      to: 13,
      value: 0.009615385
    },
    {
      from: 10,
      to: 14,
      value: 1
    },
    {
      from: 10,
      to: 15,
      value: 0.855769231
    },
    {
      from: 10,
      to: 16,
      value: 0
    },
    {
      from: 10,
      to: 17,
      value: 0.394230769
    },
    {
      from: 10,
      to: 18,
      value: 0.028846154
    },
    {
      from: 11,
      to: 1,
      value: 0
    },
    {
      from: 11,
      to: 2,
      value: 0
    },
    {
      from: 11,
      to: 3,
      value: 0
    },
    {
      from: 11,
      to: 4,
      value: 0
    },
    {
      from: 11,
      to: 5,
      value: 0
    },
    {
      from: 11,
      to: 6,
      value: 0
    },
    {
      from: 11,
      to: 7,
      value: 1
    },
    {
      from: 11,
      to: 8,
      value: 0
    },
    {
      from: 11,
      to: 9,
      value: 1
    },
    {
      from: 11,
      to: 10,
      value: 0
    },
    {
      from: 11,
      to: 12,
      value: 0
    },
    {
      from: 11,
      to: 13,
      value: 0
    },
    {
      from: 11,
      to: 14,
      value: 1
    },
    {
      from: 11,
      to: 15,
      value: 0
    },
    {
      from: 11,
      to: 16,
      value: 1
    },
    {
      from: 11,
      to: 17,
      value: 0
    },
    {
      from: 11,
      to: 18,
      value: 0
    },
    {
      from: 12,
      to: 1,
      value: 1
    },
    {
      from: 12,
      to: 2,
      value: 0
    },
    {
      from: 12,
      to: 3,
      value: 0
    },
    {
      from: 12,
      to: 4,
      value: 0
    },
    {
      from: 12,
      to: 5,
      value: 0.019230769
    },
    {
      from: 12,
      to: 6,
      value: 0
    },
    {
      from: 12,
      to: 7,
      value: 1
    },
    {
      from: 12,
      to: 8,
      value: 0
    },
    {
      from: 12,
      to: 9,
      value: 0
    },
    {
      from: 12,
      to: 10,
      value: 0
    },
    {
      from: 12,
      to: 11,
      value: 0
    },
    {
      from: 12,
      to: 13,
      value: 0
    },
    {
      from: 12,
      to: 14,
      value: 0
    },
    {
      from: 12,
      to: 15,
      value: 0
    },
    {
      from: 12,
      to: 16,
      value: 0
    },
    {
      from: 12,
      to: 17,
      value: 0
    },
    {
      from: 12,
      to: 18,
      value: 0
    },
    {
      from: 13,
      to: 1,
      value: 0
    },
    {
      from: 13,
      to: 2,
      value: 1
    },
    {
      from: 13,
      to: 3,
      value: 1
    },
    {
      from: 13,
      to: 4,
      value: 1
    },
    {
      from: 13,
      to: 5,
      value: 0
    },
    {
      from: 13,
      to: 6,
      value: 0
    },
    {
      from: 13,
      to: 7,
      value: 0.384615385
    },
    {
      from: 13,
      to: 8,
      value: 0
    },
    {
      from: 13,
      to: 9,
      value: 0
    },
    {
      from: 13,
      to: 10,
      value: 0.009615385
    },
    {
      from: 13,
      to: 11,
      value: 0
    },
    {
      from: 13,
      to: 12,
      value: 0
    },
    {
      from: 13,
      to: 14,
      value: 1
    },
    {
      from: 13,
      to: 15,
      value: 0.067307692
    },
    {
      from: 13,
      to: 16,
      value: 0
    },
    {
      from: 13,
      to: 17,
      value: 0
    },
    {
      from: 13,
      to: 18,
      value: 0.163461538
    },
    {
      from: 14,
      to: 1,
      value: 0
    },
    {
      from: 14,
      to: 2,
      value: 0.096153846
    },
    {
      from: 14,
      to: 3,
      value: 0.615384615
    },
    {
      from: 14,
      to: 4,
      value: 0.5
    },
    {
      from: 14,
      to: 5,
      value: 0
    },
    {
      from: 14,
      to: 6,
      value: 0
    },
    {
      from: 14,
      to: 7,
      value: 1
    },
    {
      from: 14,
      to: 8,
      value: 0
    },
    {
      from: 14,
      to: 9,
      value: 0
    },
    {
      from: 14,
      to: 10,
      value: 1
    },
    {
      from: 14,
      to: 11,
      value: 1
    },
    {
      from: 14,
      to: 12,
      value: 0
    },
    {
      from: 14,
      to: 13,
      value: 1
    },
    {
      from: 14,
      to: 15,
      value: 1
    },
    {
      from: 14,
      to: 16,
      value: 0
    },
    {
      from: 14,
      to: 17,
      value: 0.932692308
    },
    {
      from: 14,
      to: 18,
      value: 1
    },
    {
      from: 15,
      to: 1,
      value: 0
    },
    {
      from: 15,
      to: 2,
      value: 1
    },
    {
      from: 15,
      to: 3,
      value: 0.326923077
    },
    {
      from: 15,
      to: 4,
      value: 1
    },
    {
      from: 15,
      to: 5,
      value: 0
    },
    {
      from: 15,
      to: 6,
      value: 0
    },
    {
      from: 15,
      to: 7,
      value: 0
    },
    {
      from: 15,
      to: 8,
      value: 0
    },
    {
      from: 15,
      to: 9,
      value: 0
    },
    {
      from: 15,
      to: 10,
      value: 0.855769231
    },
    {
      from: 15,
      to: 11,
      value: 0
    },
    {
      from: 15,
      to: 12,
      value: 0
    },
    {
      from: 15,
      to: 13,
      value: 0.067307692
    },
    {
      from: 15,
      to: 14,
      value: 1
    },
    {
      from: 15,
      to: 16,
      value: 0
    },
    {
      from: 15,
      to: 17,
      value: 1
    },
    {
      from: 15,
      to: 18,
      value: 0
    },
    {
      from: 16,
      to: 1,
      value: 0
    },
    {
      from: 16,
      to: 2,
      value: 0
    },
    {
      from: 16,
      to: 3,
      value: 0
    },
    {
      from: 16,
      to: 4,
      value: 0
    },
    {
      from: 16,
      to: 5,
      value: 0
    },
    {
      from: 16,
      to: 6,
      value: 0
    },
    {
      from: 16,
      to: 7,
      value: 0
    },
    {
      from: 16,
      to: 8,
      value: 0
    },
    {
      from: 16,
      to: 9,
      value: 0.615384615
    },
    {
      from: 16,
      to: 10,
      value: 0
    },
    {
      from: 16,
      to: 11,
      value: 1
    },
    {
      from: 16,
      to: 12,
      value: 0
    },
    {
      from: 16,
      to: 13,
      value: 0
    },
    {
      from: 16,
      to: 14,
      value: 0
    },
    {
      from: 16,
      to: 15,
      value: 0
    },
    {
      from: 16,
      to: 17,
      value: 0
    },
    {
      from: 16,
      to: 18,
      value: 0
    },
    {
      from: 17,
      to: 1,
      value: 0
    },
    {
      from: 17,
      to: 2,
      value: 1
    },
    {
      from: 17,
      to: 3,
      value: 1
    },
    {
      from: 17,
      to: 4,
      value: 1
    },
    {
      from: 17,
      to: 5,
      value: 0
    },
    {
      from: 17,
      to: 6,
      value: 0
    },
    {
      from: 17,
      to: 7,
      value: 0
    },
    {
      from: 17,
      to: 8,
      value: 0
    },
    {
      from: 17,
      to: 9,
      value: 0
    },
    {
      from: 17,
      to: 10,
      value: 0.394230769
    },
    {
      from: 17,
      to: 11,
      value: 0
    },
    {
      from: 17,
      to: 12,
      value: 0
    },
    {
      from: 17,
      to: 13,
      value: 0
    },
    {
      from: 17,
      to: 14,
      value: 0.932692308
    },
    {
      from: 17,
      to: 15,
      value: 1
    },
    {
      from: 17,
      to: 16,
      value: 0
    },
    {
      from: 17,
      to: 18,
      value: 1
    },
    {
      from: 18,
      to: 1,
      value: 0
    },
    {
      from: 18,
      to: 2,
      value: 1
    },
    {
      from: 18,
      to: 3,
      value: 0
    },
    {
      from: 18,
      to: 4,
      value: 1
    },
    {
      from: 18,
      to: 5,
      value: 0
    },
    {
      from: 18,
      to: 6,
      value: 0
    },
    {
      from: 18,
      to: 7,
      value: 0
    },
    {
      from: 18,
      to: 8,
      value: 0
    },
    {
      from: 18,
      to: 9,
      value: 0
    },
    {
      from: 18,
      to: 10,
      value: 0.028846154
    },
    {
      from: 18,
      to: 11,
      value: 0
    },
    {
      from: 18,
      to: 12,
      value: 0
    },
    {
      from: 18,
      to: 13,
      value: 0.163461538
    },
    {
      from: 18,
      to: 14,
      value: 1
    },
    {
      from: 18,
      to: 15,
      value: 0
    },
    {
      from: 18,
      to: 16,
      value: 0
    },
    {
      from: 18,
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
   /*keyboard: {
     enabled: false,
     speed: {x: 10, y: 10, zoom: 0.02},
     bindToWindow: true
   },*/
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
    physics: false,
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
