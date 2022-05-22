let input = document.querySelector('.input');
let beerId = input.value;
input.addEventListener('change', () => beerId = input.value)
let get = (selector) => document.querySelector(selector);
async function getBeer(id) {
  const url = `https://api.punkapi.com/v2/beers/${id}`
  try {
    const res = await fetch(url)
    const data = await res.json()
    get('.beer-name span').textContent = data[0].name;
    get('.beer-tagline span').textContent = data[0].tagline;
    get('.beer-first_brewed span').textContent = data[0].first_brewed;
    get('.beer-description span').textContent = data[0].description;
    get('.beer-brewers_tips span').textContent = data[0].brewers_tips;
  } catch {
    get('.beer-name span').textContent = ':( try another ID';
  }
};

get('.button_get').onclick = () => getBeer(beerId);
