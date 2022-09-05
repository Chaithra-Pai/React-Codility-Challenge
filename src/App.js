import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <LikeButton />
      <Todo/>
    </div>
  );
}

export default App;
