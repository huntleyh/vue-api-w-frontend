import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home: React.FC = () => (
  <div>
    <h1>Hello World</h1>
    <p>This is a minimal React TSX application!</p>
  </div>
);

const Hello: React.FC = () => {
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>API Response</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link> | <Link to="/hello">Hello API</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hello" element={<Hello />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
