// Colors
var river = 'rgba(52, 152, 219,0.6)';
var riverDark = 'rgba(41, 128, 185,0.6)';
var wisteria = 'rgba(52, 73, 94,0.5)';
var wisteriaDark = 'rgba(44, 62, 80,0.5)';


// Hypothetical data point
var randomDataPoint = function(){ return Math.round(Math.random()*100)};

// Chart input
var exampleInput = {
  labels : ['January','February','March','April', 'May'],
  datasets : [
    {
      fillColor : river,
      strokeColor : river,
      highlightFill: riverDark,
      highlightStroke: riverDark,
      data : [randomDataPoint(), randomDataPoint(), randomDataPoint(), randomDataPoint(), randomDataPoint()]
    },
    {
      fillColor : wisteria,
      strokeColor : wisteria,
      highlightFill : wisteriaDark,
      highlightStroke : wisteriaDark,
      data : [randomDataPoint(), randomDataPoint(), randomDataPoint(), randomDataPoint(), randomDataPoint()]
    }
  ]
}

var exampleInput2 = [
  {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
  },
  {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
  },
  {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
  },
  {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
  },
  {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
  }
];

// Set defaults
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleFontStyle = "bold";

// Render the charts
window.onload = function(){
  // example one
  var contextOne = $('#barChart').get(0).getContext("2d");
  var barChart = new Chart(contextOne).Bar(exampleInput, { /* optionsObject */ });

  // example two
  var contextTwo = $('#lineChart').get(0).getContext("2d");
  var lineChart = new Chart(contextTwo).Line(exampleInput, { /* optionsObject */ });

  // example three
  var contextThree = $('#radarChart').get(0).getContext("2d");
  var radarChart = new Chart(contextThree).Radar(exampleInput, { /* optionsObject */ });

  // example four
  var contextFour = $('#polarChart').get(0).getContext("2d");
  var polarChart = new Chart(contextFour).PolarArea(exampleInput2, { /* optionsObject */ });
}
