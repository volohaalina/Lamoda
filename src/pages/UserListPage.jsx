import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../services/api";
import { List, ListItem, ListItemText, Container } from "@mui/material";

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((response) => setUsers(response.data));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            button
            component={Link}
            to={`/users/${user.id}`}
            sx={{ border: "1px solid #ddd", borderRadius: 1, mb: 1 }}
          >
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserListPage;
