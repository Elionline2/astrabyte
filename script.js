// Responsive navigation menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Exclude links with href="#" from smooth scrolling
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
      return;
    }
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to Top button functionality
const backToTopButton = document.createElement('a');
backToTopButton.setAttribute('href', '#');
backToTopButton.classList.add('back-to-top');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Show button after scrolling 300px
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Random Quote Generation
const quotes = [
  { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" }
  // Add more quotes here
];

function displayRandomQuote() {
  const quoteDisplay = document.querySelector('#random-quote-display');
  const loaderElement = quoteDisplay.querySelector('.loader'); // Get the loader element
  const quoteElement = quoteDisplay.querySelector('.quote-text'); // Target the new quote display div
  const authorElement = quoteDisplay.querySelector('.quote-author'); // Target the new quote display div

  if (quoteElement && authorElement && loaderElement) {
    // Hide quote and author, show loader
    quoteElement.style.display = 'none';
    authorElement.style.display = 'none';
    loaderElement.style.display = 'block';

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Simulate a delay for fetching the quote (optional)
    setTimeout(() => {
      quoteElement.textContent = `"${randomQuote.quote}"`;
      authorElement.textContent = `- ${randomQuote.author}`;

      // Show quote and author, hide loader
      loaderElement.style.display = 'none';
      quoteElement.style.display = 'block';
      authorElement.style.display = 'block';
    }, 500); // Adjust delay time as needed (in milliseconds)
  }
}

// Display a random quote when the 'Get a quote' button is clicked
const getQuoteButton = document.querySelector('.contact-item .btn-primary'); // Select the Get a quote button specifically within contact-item
if (getQuoteButton) {
  getQuoteButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default button behavior (like navigating)
    displayRandomQuote();
  });
}

// Display a random quote when the page loads
document.addEventListener('DOMContentLoaded', displayRandomQuote); 