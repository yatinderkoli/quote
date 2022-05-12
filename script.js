var quoteSource = [{

    quote: "It does not matter how slowly you go aslong as you do not stop.",
    name: "Confucius"
},

{
    quote: "TheThe purpose of our lives is to be happy.” — Dalai Lama.",
    name: "DALAI lama"
},

];

const quoteButton = document.getElementById('quoteButton');
function myfunction() {
    //getting a new random number to attach to a quote and setting a limit 
    var sourceLength = quoteSource.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);
    //set a new quote  
    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuoteGenius = quoteSource[randomNumber].name;
    var quoteContainer = document.getElementById('qContainer');
    quoteContainer.innerHTML =`<p>${newQuoteText}</p>
    <p id="quoteGenius">-${newQuoteGenius}</p> `;
};







