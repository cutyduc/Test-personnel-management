import { Box } from "@mui/material";
import { AddNew } from "./component/addNew";
import { ListUser } from "./component/listUser";
import { useState } from "react";

export type Data = {
  id: string;
  name: string;
  date: string;
  gender: string;
  email: string;
  address: string;
};

function App() {
  const [data, setData] = useState<Data[]>([
    {
      id: "MNV1",
      name: "Chử Văn Đức",
      date: "2003-10-14",
      gender: "male",
      email: "chuduc2003work@gmail.com",
      address: "Hà nội",
    },
  ]);

  const handleAdd = (newUser: Data) => {
    setData([...data, newUser]);
  };

  const handleDeleteUser = (id: string) => {
    setData((prev) => prev.filter((user) => user.id !== id));
  };

  const handleEditUser = (updatedUser: Data) => {
    setData((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        p: 4,
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ flex: "0 0 20%", height: "100%" }}>
        <AddNew data={data} onAdd={handleAdd} />
      </Box>

      <Box sx={{ flex: "0 0 80%", height: "100%" }}>
        <ListUser
          data={data}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
        />
      </Box>
    </Box>
  );
}

export default App;
