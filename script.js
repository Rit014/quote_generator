let currentCategory = 'all';
let filteredQuotes = [];
let currentIndex = 0;

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const themeSwitch = document.getElementById("themeSwitch");

// when documnet load on the DOM
document.addEventListener("DOMContentLoaded", () => {
    filterQuotes();
    displayQuote(currentIndex);
});

// to filter data
const filterQuotes = () => {
    const category = document.getElementById("category").value;
    currentCategory = category;

    if (category === 'all') {
        filteredQuotes = [...quotes.science, ...quotes.family_quotes, ...quotes.life, ...quotes.philosophy, ...quotes.friends_quotes, ...quotes.success_and_yourself_quotes];
    } else {
        filteredQuotes = quotes[category];
    }

    currentIndex = 0;
    displayQuote(currentIndex);
}

// display filtered data or random data
const displayQuote = (index) => {
    const quote = filteredQuotes[index];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `- ${quote.author}`;
}

// for go to the next quote
const nextQuote = () => {
    currentIndex = (currentIndex + 1) % filteredQuotes.length;
    displayQuote(currentIndex);
}

// for go to the previous quote
const previousQuote = () => {
    currentIndex = (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayQuote(currentIndex);
}

// for random quote
const randomQuote = () => {
    currentIndex = Math.floor(Math.random() * filteredQuotes.length);
    displayQuote(currentIndex);
}

// toggle theme of documnet
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
}

const changeFontSize = (action) => {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size'));
    if (action === 'increase') {
        document.documentElement.style.setProperty('--font-size', `${currentSize + 0.2}rem`);
    } else {
        document.documentElement.style.setProperty('--font-size', `${currentSize - 0.2}rem`);
    }
}
