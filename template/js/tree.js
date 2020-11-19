
const dataSource = {
    chart: {
      caption: "Largest International migrations (In Millions)",
      subcaption:
        "A No-Node Sankey where the entities are just represented by the labels.",
        theme: "umber",
        orientation: "horizontal",
        linkalpha: 30,
        linkhoveralpha: 60,
        nodelabelposition: "start"
        // showLegend='0'
    },
    nodes: [
        {   label: "tatapa1"},
        {   label: "tatama1"},
        {   label: "tatapa2"},
        {   label: "tatama2" },
        {   label: "tatapa3"},
        {  label: "tatama3"},
        {  label: "tatapa4"},
        {  label: "tatama4"},
        {  label: "tapa1"},
        {  label: "tama2"},
        {  label: "tapa3"},
        {  label: "tama4"},
        {  label: "pa12"},
        {  label: "ma34"},
        {  label: "hijo"}
      ],
      links: [
        {from: "tatapa1",to: "tapa1",value: 1},
        {from: "tatama1",to: "tapa1",value: 1},
        
        {from: "tatapa2",to: "tama2",value: 1},
        {from: "tatama2",to: "tama2",value: 1},
       
        {from: "tatapa3",to: "tapa3",value: 1},
        {from: "tatama3",to: "tapa3",value: 1},
        
        {from: "tatapa4",to: "tama4",value: 1},
        {from: "tatama4",to: "tama4",value: 1},

        {from: "tapa1",to: "pa12",value: 1},
        {from: "tama2",to: "pa12",value: 1},


        {from: "tapa3",to: "ma34",value: 1},
        {from: "tama4",to: "ma34",value: 1},


        {from: "pa12",to: "hijo",value: 1},
        {from: "ma34",to: "hijo",value: 1},



        
      ]
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "sankey",
      renderAt: "chart-container",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource: dataSource
    }).render();
  });
