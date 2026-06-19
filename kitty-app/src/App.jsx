import './App.css';
function makeDoggy(e) {
  e.target.setAttribute(
    'src',
    'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
  );
  e.target.setAttribute('alt', 'doggy');
}

function App() {
  return (
    <img
      onClick={makeDoggy}
      src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
      alt="kitty"
    />
  );
}

export default App;
