import logo from './logo.svg';
import './App.css';
import RichTextEditor from './components/RichTextEditor';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    
    <div className="App">
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <RichTextEditor />
    </div>
  );
}

export default App;
