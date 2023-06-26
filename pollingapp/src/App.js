import logo from './logo.svg';
import './App.css';
import PostTable from './components/PostTable';
function App() {
  return (
    <div className="App">
      <h1 style={{color: "green"}}>Polling App</h1>
      <PostTable/>
    </div>
  );
}

export default App;
