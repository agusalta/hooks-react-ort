import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import CardList from './Component/card/CardList';
import Counter from './Component/counter/Counter';
import UserList from './Component/user/UserList';
import Links from './Component/link/Link';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Links />
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
