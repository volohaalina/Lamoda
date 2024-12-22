import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAlbumsByUser } from "../services/api";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

const AlbumListPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbumsByUser().then((response) => setAlbums(response.data));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Albums
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

export default AlbumListPage;
