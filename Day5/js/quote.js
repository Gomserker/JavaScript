const quotes = [
    {
        quote: "quote1",
        author: "a;osidufpoisauerasd",
    },
    {
        quote: "quote2",
        author: "a;osid4987ufpoisauerasd",
    },
    {
        quote: "quote3",
        author: "a;osidufpoisauerasd",
    },
    {
        quote: "quote4",
        author: "a;osidufpoisauerasd",
    },
    {
        quote: "quote5",
        author: "a;osid98798654654ufpoisauerasd",
    },
    {
        quote: "quote6",
        author: "a;osid98798654654ufpoisauerasd",
    },
    {
        quote: "quote7",
        author: "a;osid98798654654ufpoisauerasd",
    },
    {
        quote: "quote8",
        author: "a;osid98798654654ufpoisauerasd",
    },
    {
        quote: "quote9",
        author: "a;osid98798654654ufpoisauerasd",
    },
    {
        quote: "quote10",
        author: "a;osid98798654654ufpoisauerasd",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;