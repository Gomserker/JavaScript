const quotes = [
    {
        quote: "If your pictures aren't good enough, you aren't close enough.",
        author: "Robert Capa",
    },
    {
        quote: "Photography takes an instant out of time, altering life by holding it still.",
        author: "Dorothea Lange",
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;