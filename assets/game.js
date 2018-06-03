var wins = 0;
var losses = 0;
  var max = 100;
  var min = 20; 
  var currentWins = $("#wins")
  var currentLoss = $("#losses")
  var crystals = $("#crystals");
  var counter = 0;
  var targetNumber = 0;
  var randomnumber;
  // Now for the hard part. Creating multiple crystals each with their own unique number value.
var numberOptionsMin = 2;
var numberOptionsMax = 10;
var numberOptions = [];
  // We begin by expanding our array to include four options.
  function randomNumberPicker(){
    numberOptions = [];
    targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#number-to-guess").text(targetNumber);
    $("#current-score").text(counter);
    $(currentWins).text(wins);
  $(currentLoss).text(losses);
  while(numberOptions.length < 4){
    randomnumber = Math.floor(Math.random() * (numberOptionsMax - numberOptionsMin + 1)) + numberOptionsMin;
    if(numberOptions.indexOf(randomnumber) > -1) continue;
    numberOptions[numberOptions.length] = randomnumber;
  }
  console.log(numberOptions);
}

 


  // Next we create a for loop to create crystals for every numberOption.
  function crystalCreation(){
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "https://images-na.ssl-images-amazon.com/images/I/7169H6OzyrL.png");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    crystals.append(imageCrystal);
  }
}

    
    randomNumberPicker();
    crystalCreation();


  // This time, our click event applies to every single crystal on the page. Not just one.
  $(crystals).on("click", ".crystal-image", function() {
   
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#current-score").text(counter);

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    

    if (counter === targetNumber || counter === targetNumber-1 || counter === targetNumber-2) {
      wins++;
      $("#current-score").text(counter);
      alert("You win!");
      numberOptions = [];
      counter = 0;
      $(crystals).text("");
      randomNumberPicker();
      crystalCreation();
      
    }

    else if (counter >= targetNumber) {
      $("#current-score").text(counter);
      losses++;
      alert("You lose!!");
      numberOptions = [];
      counter = 0;
      $(crystals).text("");
      randomNumberPicker();
      crystalCreation();
    }

  });

  