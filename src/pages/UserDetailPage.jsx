import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserById, fetchAlbumsByUser } from "../services/api";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchUserById(id).then((response) => setUser(response.data));
    fetchAlbumsByUser(id).then((response) => setAlbums(response.data));
  }, [id]);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {user.name}
      </Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>
        Website:{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </Typography>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Albums:
      </Typography>
      <List>
        {albums.map((album) => (
          <ListItem
            key={album.id}
            button
            component={Link}
            to={`/albums/${album.id}`}
            sx={{ border: "1px solid #ddd", borderRadius: 1, mb: 1 }}
          >
            <ListItemText primary={album.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserDetailPage;
