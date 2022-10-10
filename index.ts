//Get Quotes from api
// https://type.fit/api/quotes
var apiQuotes: {
  text: string;
  author: string;
}[];
const quoteContainer = document.getElementById("quote-container") as HTMLDivElement | null;
const quoteText = document.getElementById("quote") as HTMLSpanElement | null;
const authorText = document.getElementById("author") as HTMLSpanElement | null;
const twitterButton = document.getElementById(
  "twitter"
) as HTMLButtonElement | null;
const newQuoteButton = document.getElementById(
  "new-quote"
) as HTMLButtonElement | null;
const loader = document.getElementById("loader") as HTMLDivElement | null;

function newQuote() {
  loading();
  const randomNumber = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomNumber];
  //Check quote length to determine styling
  if (quote.text.length > 50) {
    quoteText?.classList.add("long-quote");
  } else {
    quoteText?.classList.remove("long-quote");
  }
  if (quoteText != null) {
    quoteText.textContent = quote.text;
  }
  if (authorText != null) {
    authorText.textContent = quote.author || "Anonymous";
  }
  complete();
}

async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    alert(error);
  }
}
//Post to twitter
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText?.textContent} - ${authorText?.textContent}`;
  window.open(twitterUrl, "_blank");
}

function loading() {
  if (loader != null && quoteContainer!=null) {
    loader.hidden = false;
    quoteContainer.hidden = true;
  }
}

function complete(){
  if (loader != null && quoteContainer!=null) {
  
    quoteContainer.hidden = false
    loader.hidden = true;
  }
}

//Onload functionality
getQuotes();
newQuoteButton?.addEventListener("click", newQuote);
twitterButton?.addEventListener("click", tweetQuote);
loading();
