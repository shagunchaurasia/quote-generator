//Get Quotes from api
// https://type.fit/api/quotes
var apiQuotes: {
  text: string;
  author: string;
}[];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * apiQuotes.length);
  console.log(randomNumber);
  const quote = apiQuotes[randomNumber];
  console.log(apiQuotes);
  console.log(quote);
  const quoteText = document.getElementById("quote") as HTMLSpanElement | null;
  if (quoteText != null) {
    quoteText.innerHTML = quote.text;
  }
  const quoteAuthor = document.getElementById(
    "author"
  ) as HTMLSpanElement | null;
  if (quoteAuthor != null) {
    quoteAuthor.innerHTML = quote.author || "Anonymous";
  }
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error
    alert(error);
  }
}

getQuotes();
