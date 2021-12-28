import './App.css';
import Button from './components/Button';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello and welcome to SplashFace!</h1>
        <h2>
          <input type="file" id="btn"/>
          <Button text='Submit'/>
        </h2>
        <Post liked = {false}/>
      </header>
    </div>
  );
}

export default App;
