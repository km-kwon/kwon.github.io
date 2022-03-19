const quotes = [
    {
        quote: "No great man ever complains of want of opportunity.",
        author: "Someone" 
    },
    {
        quote: "Do not accustom yourself to use big words for little matters.",
        author: "Future you"
    },
    {
        quote: "love what you have.",
        author: "Only me"
    },
    {
        quote: "Only I can change my life, No one can do it for me.",
        author: "Telling from Mind"
    },
    {
        quote: "No pain no gain.",
        author: "Someone"
    },
    {
        quote: "Who dares, wins.",
        author: "Begining"
    },
    {
        quote: "Rome is not built in a day.",
        author: "Someone"
    },
    {
        quote: " We can give advice, but we cannot give conduct.",
        author: "Me"
    },
    {
        quote: "Better late than never.",
        author: "You"
    },
    {
        quote: "The unexamined life is not worth living.",
        author: "Future"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `# ${todayQuote.quote}`;
author.innerText = `# ${todayQuote.author}`;