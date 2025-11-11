import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { Data } from "../App";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { EditUserModal } from "./EditUserModal";
import { EditNotifications } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

type ListUserProps = {
  data: Data[];
  handleDeleteUser: (id: string) => void;
  handleEditUser: (updatedUser: Data) => void;
};

export const ListUser = ({
  data,
  handleDeleteUser,
  handleEditUser,
}: ListUserProps) => {
  const [sortedData, setSortedData] = useState<Data[]>([...data]);
  const [nameAsc, setNameAsc] = useState(true);
  const [addressAsc, setAddressAsc] = useState(true);
  const [activeSort, setActiveSort] = useState<"name" | "address" | null>(null);

  const [editUser, setEditUser] = useState<Data | null>(null);
  const [openEdit, setOpenEdit] = useState(false);

  const openEditModal = (user: Data) => {
    setEditUser(user);
    setOpenEdit(true);
  };

  const closeEditModal = () => {
    setOpenEdit(false);
    setEditUser(null);
  };

  const handleSaveEdit = (updatedUser: Data) => {
    handleEditUser(updatedUser);
  };

  useEffect(() => {
    setSortedData([...data]);
  }, [data]);

  const handleSortByName = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.name < b.name) return nameAsc ? -1 : 1;
      if (a.name > b.name) return nameAsc ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
    setNameAsc(!nameAsc);
    setActiveSort("name");
  };

  const handleSortByAddress = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.address < b.address) return addressAsc ? -1 : 1;
      if (a.address > b.address) return addressAsc ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
    setAddressAsc(!addressAsc);
    setActiveSort("address");
  };

  const handleReset = () => {
    setSortedData([...data]);
    setNameAsc(true);
    setAddressAsc(true);
    setActiveSort(null);
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        border: "1px solid gray",
        height: "90vh",
        backgroundColor: "#EEEEEE",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Danh sách nhân viên
      </Typography>

      {/* Controls */}
      <Box sx={{ display: "flex", gap: 1, mb: 2, alignItems: "center" }}>
        <Typography sx={{ fontSize: 12 }}>Sắp xếp theo tên</Typography>
        <IconButton
          onClick={handleSortByName}
          sx={{
            backgroundColor: activeSort === "name" ? "#c5e1a5" : "transparent",
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>

        <Typography sx={{ fontSize: 12 }}>Sắp xếp theo địa chỉ</Typography>
        <IconButton
          onClick={handleSortByAddress}
          sx={{
            backgroundColor:
              activeSort === "address" ? "#c5e1a5" : "transparent",
          }}
        >
          <ArrowDownwardIcon />
        </IconButton>

        <Typography sx={{ fontSize: 12 }}>Reset</Typography>
        <IconButton onClick={handleReset} sx={{ backgroundColor: "#eeeeee" }}>
          <RestartAltIcon />
        </IconButton>
      </Box>

      {/* TableContainer */}
      <TableContainer
        component={Paper}
        sx={{
          flex: 1,
          overflow: "auto",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedData.map((user, index) => (
              <TableRow
                key={user.id}
                sx={{
                  backgroundColor: index % 2 === 1 ? "#f5f5f5" : "white",
                }}
              >
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.date}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>
                  <IconButton onClick={() => openEditModal(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDeleteUser(user.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <EditUserModal
            open={openEdit}
            onClose={closeEditModal}
            user={editUser}
            onEdit={handleSaveEdit}
          />
        </Table>
      </TableContainer>
    </Box>
  );
};
