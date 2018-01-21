// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: "Despite the constant negative press covfefe",
    source: "Donald Trump",
    citation: "Twitter",
    year: 2017
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
    year: 2012
  },
  {
    quote: "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else's highlight reel.",
    source: "Steve Furtick",
    year: 2012
  },
  {
    quote: "The One step in the wrong direction will cause you a thousand years of regret.",
    source: "Chinese Proverb"
  },
  {
    quote: "Teachers open the door, but you must enter by yourself.",
    source: "Chinese Proverb"
  }
];

var quote;

 // this function grabs a quote from the 'quotes' array by using the Math.random() method to grab a number and multiply it by the array's length, and rounding the number down in order to select the index of the array
function getRandomQuote(array){
  var number = Math.floor(Math.random() * array.length);
  quote = quotes[number]['quote'];
  return quote;
}

console.log(getRandomQuote(quotes));
