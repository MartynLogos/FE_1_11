import Header from "./components/header/Header";
import './app.scss';
import { Routes, Route } from 'react-router-dom';
import Users from "./components/users/Users";
import Main from "./components/main/Main";
import Tickets from "./components/tickets/Tickets";
import NotFoundPage from "./components/not-foud-page/NotFoundPage";
import Movies from "./components/movies/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>Home</Route>
        <Route path="/users" element={<Users />}>Users</Route>
        <Route path="/tickets" element={<Tickets />}>Tickets</Route>
        <Route path="/movies" element={<Movies />}>Movies</Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
