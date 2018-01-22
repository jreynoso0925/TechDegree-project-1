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
var html;
var quote;

 // this function grabs a quote from the 'quotes' array by using the Math.random() method to grab a number and multiply it by the array's length, and rounding the number down in order to select an index of the array
function getRandomQuote(array){
  var number = Math.floor(Math.random() * array.length);
  quote = quotes[number];
  return quote;
}

//this function puts the getRandomQuote function into a variable in order to grab an object from the quotes array.
//it then adds the html tags and the object's properties, depending on whether or not the quote has the property it is asking for.
function printQuote(){
  var quoteObject = getRandomQuote(quotes);
  html = '<p class="quote">' + quoteObject.quote + '</p>';
  html += '<p class="source">' + quoteObject.source;
  if (quoteObject.citation !== undefined){
    html += '<span class="citation"> '+ quoteObject.citation + ' </span>';
  }
  if (quoteObject.year !== undefined){
    html += '<span class="year">' + quoteObject.year + ' </span>';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}

//calling the function insures that a quote is loaded onto the page before pressing the button for the first time
printQuote();
