import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAlbumById, fetchPhotosByAlbum } from "../services/api";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

const AlbumDetailPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchAlbumById(id).then((response) => setAlbum(response.data));
    fetchPhotosByAlbum(id).then((response) => setPhotos(response.data));
  }, [id]);

  if (!album) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{album.title}</Typography>
      <Typography>
        Created by:{" "}
        <Link to={`/users/${album.userId}`}>User {album.userId}</Link>
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={photo.thumbnailUrl}
                alt={photo.title}
              />
              <CardContent>
                <Typography variant="body2">{photo.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AlbumDetailPage;
