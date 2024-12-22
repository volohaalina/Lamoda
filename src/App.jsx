import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import AlbumListPage from "./pages/AlbumListPage";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/users" />} />
      <Route path="/users" element={<UserListPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
      <Route path="/albums" element={<AlbumListPage />} />
      <Route path="/albums/:id" element={<AlbumDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
