import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';

function App() {
  return (
    <div className="App">
    <WarningSign name='alert' />
    <MyBadge name='This is my Badge' color='success'/>
    <BookList/>
    </div>
  );
}

export default App;
