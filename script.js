
let key = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
let quotes = [];
var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

function getRandomQuote() {
  return Math.floor(Math.random() * quotes.length);
}

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
  }

function showData() {
  let index = getRandomQuote();
  let col = getRandomColor();
  let text = document.getElementById('text');
  text.innerText = `${quotes[index].quote} `;
  text.style.color = colors[col];
    
  let author = document.getElementById('author');
  author.innerText = `${quotes[index].author}`;
  author.style.color = colors[col];

  document.body.style.backgroundColor = colors[col];
  document.getElementById('tweet-quote').style.backgroundColor = colors[col];
  document.getElementById('tumblr-quote').style.backgroundColor = colors[col];
  document.getElementById('new-quote').style.backgroundColor = colors[col];
  document.getElementById('bar').style.color = colors[col];

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quotes[index].quote + '" ' + quotes[index].author)
  );

  $('#tumblr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(quotes[index].author) +
      '&content=' +
      encodeURIComponent(quotes[index].quote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );
}

function handleClick() {
  showData();
}

fetch(key)
  .then(response => response.json())
  .then(data => {
    quotes = data.quotes;
    showData();
  })
  .catch(error => console.error('Error fetching data:', error));

document.getElementById('new-quote').addEventListener('click', handleClick);