import animals from './animal';
import './App.css';

const title = '';

const background = (
  <img
    className="ocean-img"
    alt="ocean"
    src="/images/ocean.jpg"
  />
);

const displayFact = (e) =>{
  const animal = e.target.alt;
  const facts = animals[animal].facts;

  const randomIndex = Math.floor(Math.random() * facts.length);

  const fact = facts[randomIndex];

  document.getElementById('fact').innerHTML = fact;
};

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        {title === ''
          ? 'animal fun fact'
          : title}
      </h1>

      <div className="container">
        {background}

        <div className="animals">
          {images}
        </div>
      </div>

      <div id="fact" className="fact">
        Click an animal to learn something cool!
      </div>
    </div>
  );
}

export default App;