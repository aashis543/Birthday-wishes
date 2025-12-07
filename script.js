const quotes = [
    "Wishing you a day filled with love and joy!",
    "May your birthday be as wonderful as you are!",
    "Cheers to you on your special day!",
    "Here's to a year full of blessings and beyond!",
    "Happy Birthday! May all your dreams come true!"
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}