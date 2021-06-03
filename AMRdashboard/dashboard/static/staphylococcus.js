var nodes = null;
var edges = null;
var network = null;

function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [{
      id: 1,
      /*value: 2,*/
      label: "ERYTHROMYCIN_I"
    },
    {
      id: 2,
        /*value: 2,*/
      label: "CEFTAROLINE_I"
    },
    {
      id: 3,
        /*value: 2,*/
      label: "MOXIFLOXACIN_I"
    },
    {
      id: 4,
        /*value: 2,*/
      label: "GBD_VAL_HAQI"
    },
    {
      id: 5,
        /*value: 2,*/
      label: "GBD_VAL_HEPB3_VACC_COVERAGE_PROP_LAG10"
    },
    {
      id: 6,
      /*value: 2,*/
      label: "GBD_VAL_PIGSEXT_PC"
    },
    {
      id: 7,
        /*value: 2,*/
      label: "GBD_VAL_POP_UNDER100M_PROP"
    },
    {
      id: 8,
        /*value: 2,*/
      label: "GBD_VAL_RADON"
    },
    {
      id: 9,
      /*value: 2,*/
      label: "GBD_VAL_SANITATION_PROP"
    },
    {
      id: 10,
      /*value: 2,*/
      label: "FINANCE_GFDD_SM_01"
    },
    {
      id: 11,
      /*value: 2,*/
      label: "CLINDAMYCIN_I"
    },
    {
      id: 12,
      label: "TEICOPLANIN_I"
    },
    {
      id: 13,
      label: "GBD_VAL_HEP_C_PREV"
    },
    {
      id: 14,
      label: "GBD_VAL_POP_30TO45LAT_PROP"
    },
    {
      id: 15,
      label: "GBD_VAL_VEGETABLES_G_UNADJ"
    },
    {
      id: 16,
      label: "LEVOFLOXACIN_I"
    },
    {
      id: 17,
      label: "GBD_VAL_RAINFALL_QUINT3_PROP"
    },
    {
      id: 18,
      label: "FINANCE_NY_GDP_MKTP_CD"
    },
    {
      id: 19,
      label: "OXACILLIN_I"
    },
    {
      id: 20,
      label: "WGI_ESTIMATE_POLITICAL_STABILITY_NO_VIOLENCE"
    },
    {
      id: 21,
      label: "GBD_VAL_OMEGA_3_G_ADJ"
    },
    {
      id: 22,
      label: "GBD_VAL_SATURATED_FATS_ADJ_PCT"
    },
    {
      id: 23,
      label: "WGI_RANK_GOVERNMENT_EFFECTIVENESS"
    },
    {
      id: 24,
      label: "WGI_ESTIMATE_VOICEAND_ACCOUNTABILITY"
    },
    {
      id: 25,
      label: "WGI_RANK_REGULATORY_QUALITY"
    },
    {
      id: 26,
      label: "GBD_VAL_ASBESTOS_BIN"
    },
    {
      id: 27,
      label: "GBD_VAL_CALCIUM_G_ADJ"
    },
    {
      id: 28,
      label: "GBD_VAL_CONTRA_MOD_PREV_PROP"
    },
    {
      id: 29,
      label: "GBD_VAL_DTP3_COVERAGE_PROP"
    },
    {
      id: 30,
      label: "GBD_VAL_FIBER_G_ADJ"
    },
    {
      id: 31,
      label: "GBD_VAL_FRUITS_G_ADJ"
    },
    {
      id: 32,
      label: "GBD_VAL_HEP_B_PREV"
    },
    {
      id: 33,
      label: "GBD_VAL_IFD_COVERAGE_PROP"
    },
    {
      id: 34,
      label: "GBD_VAL_PID_AGE_STANDARDIZED"
    },
    {
      id: 35,
      label: "GBD_VAL_POP_1500MPLUS_PROP"
    },
    {
      id: 36,
      label: "GBD_VAL_POP_500MTO1500M_PROP"
    },
    {
      id: 37,
      label: "GBD_VAL_POP_DENS_OVER_1000_PSQKM_PCT"
    },
    {
      id: 38,
      label: "GBD_VAL_SEV_WASH_SANITATION"
    },
    {
      id: 39,
      label: "GBD_VAL_SMOK_PREV_AGESTD_BOTH"
    },
    {
      id: 40,
      label: "GBD_VAL_SMOKING_PREV_REPRO"
    },
    {
      id: 41,
      label: "GBD_VAL_SYPH_PREV"
    },
    {
      id: 42,
      label: "GBD_VAL_ZINC"
    },
    {
      id: 43,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS_CAPPED"
    },
    {
      id: 44,
      label: "GBD_VAL_HEALTH_SYSTEM_ACCESS2"
    },
    {
      id: 45,
      label: "DAPTOMYCIN_I"
    },
    {
      id: 46,
      label: "GBD_VAL_HEPB3_VACC_COVERAGE_PROP_LAG5"
    },
    {
      id: 47,
      label: "GBD_DIFF_BIRTH_PREVALENCE_CHD"
    },
    {
      id: 48,
      label: "TIGECYCLINE_I"
    },
    {
      id: 49,
      label: "GBD_VAL_GOLD_PROD_PC"
    },
    {
      id: 50,
      label: "GBD_VAL_MALARIA_LYSENKO_2_1_PROP"
    },
    {
      id: 51,
      label: "GBD_VAL_SBA_COVERAGE_PROP"
    }
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
   {
     from: 1,
     to: 45,
     value: 1
   },
   {
     from: 1,
     to: 3,
     value: 1
   },
   {
     from: 1,
     to: 11,
     value: 1
   },
   {
     from: 1,
     to: 19,
     value: 0.778846154
   },
   {
     from: 2,
     to: 3,
     value: 1
   },
   {
     from: 2,
     to: 11,
     value: 0.711538462
   },
   {
     from: 2,
     to: 12,
     value: 1
   },
   {
     from: 3,
     to: 1,
     value: 1
   },
   {
     from: 3,
     to: 2,
     value: 1
   },
   {
     from: 3,
     to: 11,
     value: 1
   },
   {
     from: 3,
     to: 16,
     value: 1
   },
   {
     from: 3,
     to: 19,
     value: 1
   },
   {
     from: 4,
     to: 1,
     value: 0.538461538
   },
   {
     from: 4,
     to: 2,
     value: 0.961538462
   },
   {
     from: 4,
     to: 15,
     value: 1
   },
   {
     from: 4,
     to: 23,
     value: 1
   },
   {
     from: 4,
     to: 24,
     value: 1
   },
   {
     from: 4,
     to: 27,
     value: 1
   },
   {
     from: 4,
     to: 46,
     value: 0.990384615
   },
   {
     from: 5,
     to: 46,
     value: 1
   },
   {
     from: 6,
     to: 3,
     value: 0.538461538
   },
   {
     from: 6,
     to: 13,
     value: 1
   },
   {
     from: 6,
     to: 14,
     value: 0.538461538
   },
   {
     from: 6,
     to: 25,
     value: 1
   },
   {
     from: 7,
     to: 18,
     value: 0.75
   },
   {
     from: 8,
     to: 1,
     value: 0.519230769
   },
   {
     from: 8,
     to: 47,
     value: 0.990384615
   },
   {
     from: 8,
     to: 4,
     value: 0.980769231
   },
   {
     from: 8,
     to: 6,
     value: 1
   },
   {
     from: 8,
     to: 10,
     value: 0.913461538
   },
   {
     from: 8,
     to: 47,
     value: 0.586538462
   },
   {
     from: 8,
     to: 17,
     value: 0.923076923
   },
   {
     from: 8,
     to: 21,
     value: 0.990384615
   },
   {
     from: 8,
     to: 22,
     value: 1
   },
   {
     from: 8,
     to: 24,
     value: 1
   },
   {
     from: 8,
     to: 26,
     value: 0.855769231
   },
   {
     from: 8,
     to: 27,
     value: 1
   },
   {
     from: 8,
     to: 28,
     value: 1
   },
   {
     from: 8,
     to: 29,
     value: 1
   },
   {
     from: 8,
     to: 30,
     value: 1
   },
   {
     from: 8,
     to: 31,
     value: 1
   },
   {
     from: 8,
     to: 33,
     value: 0.980769231
   },
   {
     from: 8,
     to: 34,
     value: 1
   },
   {
     from: 8,
     to: 35,
     value: 0.990384615
   },
   {
     from: 8,
     to: 36,
     value: 0.990384615
   },
   {
     from: 8,
     to: 37,
     value: 0.528846154
   },
   {
     from: 8,
     to: 38,
     value: 1
   },
   {
     from: 8,
     to: 39,
     value: 0.961538462
   },
   {
     from: 8,
     to: 46,
     value: 1
   },
   {
     from: 9,
     to: 20,
     value: 0.625
   },
   {
     from: 9,
     to: 24,
     value: 1
   },
   {
     from: 9,
     to: 25,
     value: 0.826923077
   },
   {
     from: 9,
     to: 32,
     value: 0.961538462
   },
   {
     from: 9,
     to: 38,
     value: 1
   },
   {
     from: 10,
     to: 8,
     value: 0.913461538
   },
   {
     from: 10,
     to: 17,
     value: 0.990384615
   },
   {
     from: 10,
     to: 21,
     value: 0.971153846
   },
   {
     from: 10,
     to: 26,
     value: 0.932692308
   },
   {
     from: 10,
     to: 28,
     value: 0.971153846
   },
   {
     from: 10,
     to: 29,
     value: 0.951923077
   },
   {
     from: 10,
     to: 30,
     value: 0.721153846
   },
   {
     from: 10,
     to: 31,
     value: 0.932692308
   },
   {
     from: 10,
     to: 43,
     value: 1
   },
   {
     from: 10,
     to: 44,
     value: 0.961538462
   },
   {
     from: 11,
     to: 1,
     value: 1
   },
   {
     from: 11,
     to: 2,
     value: 0.711538462
   },
   {
     from: 11,
     to: 3,
     value: 1
   },
   {
     from: 11,
     to: 16,
     value: 1
   },
   {
     from: 11,
     to: 48,
     value: 1
   },
   {
     from: 12,
     to: 16,
     value: 0.951923077
   },
   {
     from: 13,
     to: 7,
     value: 0.567307692
   },
   {
     from: 13,
     to: 11,
     value: 0.673076923
   },
   {
     from: 13,
     to: 22,
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
     value: 0.663461538
   },
   {
     from: 14,
     to: 36,
     value: 1
   },
   {
     from: 14,
     to: 39,
     value: 0.836538462
   },
   {
     from: 14,
     to: 2,
     value: 1
   },
   {
     from: 15,
     to: 47,
     value: 0.932692308
   },
   {
     from: 15,
     to: 11,
     value: 0.971153846
   },
   {
     from: 15,
     to: 14,
     value: 1
   },
   {
     from: 15,
     to: 18,
     value: 1
   },
   {
     from: 15,
     to: 23,
     value: 0.846153846
   },
   {
     from: 16,
     to: 3,
     value: 1
   },
   {
     from: 16,
     to: 11,
     value: 1
   },
   {
     from: 16,
     to: 12,
     value: 0.951923077
   },
   {
     from: 17,
     to: 8,
     value: 0.923076923
   },
   {
     from: 17,
     to: 10,
     value: 0.990384615
   },
   {
     from: 17,
     to: 48,
     value: 1
   },
   {
     from: 17,
     to: 21,
     value: 1
   },
   {
     from: 17,
     to: 30,
     value: 1
   },
   {
     from: 17,
     to: 31,
     value: 1
   },
   {
     from: 18,
     to: 48,
     value: 1
   },
   {
     from: 19,
     to: 1,
     value: 0.778846154
   },
   {
     from: 20,
     to: 12,
     value: 0.971153846
   },
   {
     from: 20,
     to: 22,
     value: 1
   },
   {
     from: 20,
     to: 27,
     value: 0.663461538
   },
   {
     from: 20,
     to: 40,
     value: 0.990384615
   },
   {
     from: 20,
     to: 43,
     value: 0.884615385
   },
   {
     from: 21,
     to: 8,
     value: 0.990384615
   },
   {
     from: 21,
     to: 10,
     value: 0.971153846
   },
   {
     from: 21,
     to: 13,
     value: 1
   },
   {
     from: 21,
     to: 17,
     value: 1
   },
   {
     from: 21,
     to: 20,
     value: 1
   },
   {
     from: 21,
     to: 22,
     value: 0.971153846
   },
   {
     from: 21,
     to: 23,
     value: 0.990384615
   },
   {
     from: 21,
     to: 24,
     value: 0.990384615
   },
   {
     from: 21,
     to: 26,
     value: 0.971153846
   },
   {
     from: 21,
     to: 27,
     value: 0.971153846
   },
   {
     from: 21,
     to: 28,
     value: 0.980769231
   },
   {
     from: 21,
     to: 29,
     value: 0.990384615
   },
   {
     from: 21,
     to: 30,
     value: 1
   },
   {
     from: 21,
     to: 31,
     value: 1
   },
   {
     from: 21,
     to: 36,
     value: 0.990384615
   },
   {
     from: 21,
     to: 41,
     value: 0.778846154
   },
   {
     from: 21,
     to: 42,
     value: 0.625
   },
   {
     from: 22,
     to: 47,
     value: 0.932692308
   },
   {
     from: 22,
     to: 12,
     value: 0.826923077
   },
   {
     from: 22,
     to: 15,
     value: 0.567307692
   },
   {
     from: 22,
     to: 42,
     value: 1
   },
   {
     from: 23,
     to: 11,
     value: 0.538461538
   },
   {
     from: 23,
     to: 25,
     value: 1
   },
   {
     from: 23,
     to: 41,
     value: 1
   },
   {
     from: 24,
     to: 20,
     value: 1
   },
   {
     from: 24,
     to: 49,
     value: 1
   },
   {
     from: 24,
     to: 40,
     value: 1
   },
   {
     from: 25,
     to: 5,
     value: 0.913461538
   },
   {
     from: 25,
     to: 50,
     value: 1
   },
   {
     from: 26,
     to: 8,
     value: 0.855769231
   },
   {
     from: 26,
     to: 9,
     value: 0.980769231
   },
   {
     from: 26,
     to: 10,
     value: 0.932692308
   },
   {
     from: 26,
     to: 13,
     value: 0.923076923
   },
   {
     from: 26,
     to: 21,
     value: 0.971153846
   },
   {
     from: 26,
     to: 28,
     value: 0.942307692
   },
   {
     from: 26,
     to: 31,
     value: 0.798076923
   },
   {
     from: 26,
     to: 35,
     value: 0.971153846
   },
   {
     from: 27,
     to: 40,
     value: 1
   },
   {
     from: 28,
     to: 47,
     value: 0.942307692
   },
   {
     from: 28,
     to: 8,
     value: 1
   },
   {
     from: 28,
     to: 9,
     value: 0.730769231
   },
   {
     from: 28,
     to: 10,
     value: 0.971153846
   },
   {
     from: 28,
     to: 13,
     value: 1
   },
   {
     from: 28,
     to: 15,
     value: 0.548076923
   },
   {
     from: 28,
     to: 18,
     value: 0.759615385
   },
   {
     from: 28,
     to: 21,
     value: 0.980769231
   },
   {
     from: 28,
     to: 26,
     value: 0.942307692
   },
   {
     from: 28,
     to: 30,
     value: 0.980769231
   },
   {
     from: 28,
     to: 31,
     value: 1
   },
   {
     from: 28,
     to: 32,
     value: 0.961538462
   },
   {
     from: 28,
     to: 33,
     value: 0.932692308
   },
   {
     from: 28,
     to: 50,
     value: 0.990384615
   },
   {
     from: 28,
     to: 34,
     value: 1
   },
   {
     from: 28,
     to: 36,
     value: 0.759615385
   },
   {
     from: 28,
     to: 38,
     value: 1
   },
   {
     from: 28,
     to: 43,
     value: 0.903846154
   },
   {
     from: 28,
     to: 44,
     value: 0.971153846
   },
   {
     from: 29,
     to: 4,
     value: 1
   },
   {
     from: 29,
     to: 9,
     value: 1
   },
   {
     from: 29,
     to: 18,
     value: 0.759615385
   },
   {
     from: 29,
     to: 35,
     value: 1
   },
   {
     from: 29,
     to: 51,
     value: 0.894230769
   },
   {
     from: 29,
     to: 46,
     value: 0.586538462
   },
   {
     from: 30,
     to: 4,
     value: 0.730769231
   },
   {
     from: 30,
     to: 8,
     value: 1
   },
   {
     from: 30,
     to: 9,
     value: 0.519230769
   },
   {
     from: 30,
     to: 10,
     value: 0.721153846
   },
   {
     from: 30,
     to: 15,
     value: 0.528846154
   },
   {
     from: 30,
     to: 17,
     value: 1
   },
   {
     from: 30,
     to: 20,
     value: 0.778846154
   },
   {
     from: 30,
     to: 21,
     value: 1
   },
   {
     from: 30,
     to: 28,
     value: 0.980769231
   },
   {
     from: 30,
     to: 31,
     value: 1
   },
   {
     from: 30,
     to: 33,
     value: 0.980769231
   },
   {
     from: 30,
     to: 35,
     value: 1
   },
   {
     from: 30,
     to: 38,
     value: 0.759615385
   },
   {
     from: 30,
     to: 44,
     value: 0.980769231
   },
   {
     from: 31,
     to: 4,
     value: 0.721153846
   },
   {
     from: 31,
     to: 6,
     value: 1
   },
   {
     from: 31,
     to: 8,
     value: 1
   },
   {
     from: 31,
     to: 10,
     value: 0.932692308
   },
   {
     from: 31,
     to: 17,
     value: 1
   },
   {
     from: 31,
     to: 20,
     value: 1
   },
   {
     from: 31,
     to: 21,
     value: 1
   },
   {
     from: 31,
     to: 26,
     value: 0.798076923
   },
   {
     from: 31,
     to: 27,
     value: 0.971153846
   },
   {
     from: 31,
     to: 28,
     value: 1
   },
   {
     from: 31,
     to: 29,
     value: 0.990384615
   },
   {
     from: 31,
     to: 30,
     value: 1
   },
   {
     from: 31,
     to: 33,
     value: 0.942307692
   },
   {
     from: 31,
     to: 34,
     value: 0.932692308
   },
   {
     from: 31,
     to: 37,
     value: 0.519230769
   },
   {
     from: 31,
     to: 39,
     value: 1
   },
   {
     from: 31,
     to: 40,
     value: 0.971153846
   },
   {
     from: 31,
     to: 44,
     value: 0.913461538
   },
   {
     from: 32,
     to: 23,
     value: 0.951923077
   },
   {
     from: 32,
     to: 34,
     value: 1
   },
   {
     from: 32,
     to: 41,
     value: 0.990384615
   },
   {
     from: 33,
     to: 8,
     value: 0.980769231
   },
   {
     from: 33,
     to: 28,
     value: 0.932692308
   },
   {
     from: 33,
     to: 30,
     value: 0.980769231
   },
   {
     from: 33,
     to: 31,
     value: 0.942307692
   },
   {
     from: 33,
     to: 51,
     value: 1
   },
   {
     from: 33,
     to: 44,
     value: 1
   },
   {
     from: 34,
     to: 5,
     value: 0.913461538
   },
   {
     from: 34,
     to: 7,
     value: 0.932692308
   },
   {
     from: 34,
     to: 25,
     value: 0.951923077
   },
   {
     from: 34,
     to: 50,
     value: 0.961538462
   },
   {
     from: 34,
     to: 39,
     value: 1
   },
   {
     from: 35,
     to: 9,
     value: 0.980769231
   },
   {
     from: 35,
     to: 49,
     value: 0.932692308
   },
   {
     from: 35,
     to: 36,
     value: 1
   },
   {
     from: 35,
     to: 51,
     value: 1
   },
   {
     from: 36,
     to: 1,
     value: 0.519230769
   },
   {
     from: 36,
     to: 47,
     value: 0.990384615
   },
   {
     from: 36,
     to: 7,
     value: 1
   },
   {
     from: 36,
     to: 14,
     value: 1
   },
   {
     from: 36,
     to: 23,
     value: 0.990384615
   },
   {
     from: 36,
     to: 25,
     value: 0.990384615
   },
   {
     from: 36,
     to: 32,
     value: 0.990384615
   },
   {
     from: 36,
     to: 50,
     value: 0.980769231
   },
   {
     from: 36,
     to: 34,
     value: 0.942307692
   },
   {
     from: 36,
     to: 37,
     value: 0.692307692
   },
   {
     from: 36,
     to: 39,
     value: 0.875
   },
   {
     from: 36,
     to: 41,
     value: 0.826923077
   },
   {
     from: 37,
     to: 5,
     value: 0.673076923
   },
   {
     from: 37,
     to: 8,
     value: 0.528846154
   },
   {
     from: 37,
     to: 31,
     value: 0.519230769
   },
   {
     from: 37,
     to: 49,
     value: 1
   },
   {
     from: 37,
     to: 36,
     value: 0.692307692
   },
   {
     from: 37,
     to: 42,
     value: 1
   },
   {
     from: 37,
     to: 43,
     value: 0.519230769
   },
   {
     from: 38,
     to: 44,
     value: 1
   },
   {
     from: 38,
     to: 6,
     value: 1
   },
   {
     from: 38,
     to: 7,
     value: 0.980769231
   },
   {
     from: 38,
     to: 18,
     value: 1
   },
   {
     from: 39,
     to: 7,
     value: 1
   },
   {
     from: 39,
     to: 22,
     value: 0.961538462
   },
   {
     from: 39,
     to: 49,
     value: 1
   },
   {
     from: 40,
     to: 6,
     value: 1
   },
   {
     from: 40,
     to: 13,
     value: 0.538461538
   },
   {
     from: 40,
     to: 32,
     value: 0.961538462
   },
   {
     from: 40,
     to: 39,
     value: 1
   },
   {
     from: 41,
     to: 5,
     value: 0.942307692
   },
   {
     from: 42,
     to: 50,
     value: 0.971153846
   },
   {
     from: 43,
     to: 1,
     value: 0.711538462
   },
   {
     from: 43,
     to: 2,
     value: 1
   },
   {
     from: 43,
     to: 5,
     value: 1
   },
   {
     from: 43,
     to: 11,
     value: 0.557692308
   },
   {
     from: 43,
     to: 49,
     value: 0.942307692
   },
   {
     from: 44,
     to: 29,
     value: 1
   },
   {
     from: 44,
     to: 43,
     value: 0.778846154
   },
   {
     from: 44,
     to: 43,
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
