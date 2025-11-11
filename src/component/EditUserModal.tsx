import {
  Box,
  Typography,
  Button,
  TextField,
  Modal,
  Autocomplete,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Data } from "../App";
import { useEffect } from "react";
import { gender } from "./addNew";

type EditUserModalProps = {
  open: boolean;
  onClose: () => void;
  user: Data | null;
  onEdit: (updatedUser: Data) => void;
};

export const EditUserModal = ({
  open,
  onClose,
  user,
  onEdit,
}: EditUserModalProps) => {
  const { handleSubmit, control, reset } = useForm<Data>({
    defaultValues: user || {
      id: "",
      name: "",
      date: "",
      gender: "",
      email: "",
      address: "",
    },
  });

  useEffect(() => {
    reset(user || {});
  }, [user, reset]);

  const onSubmit = (formData: Data) => {
    if (!user) return;
    onEdit({ ...formData, id: user.id });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Chỉnh sửa nhân viên
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <Controller
            name="name"
            control={control}
            rules={{ required: "Tên nhân viên là bắt buộc" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Tên nhân viên"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{ mb: 2 }}
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            rules={{
              required: "Ngày sinh là bắt buộc",
              validate: (value) => {
                if (!value) return true;
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return (
                  selectedDate <= today ||
                  "Ngày sinh không được là ngày trong tương lai"
                );
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Ngày sinh"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{ mb: 2 }}
              />
            )}
          />
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Giới tính là bắt buộc" }}
            render={({ field, fieldState }) => (
              <Autocomplete
                options={gender}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) =>
                  option.value === value?.value
                }
                value={gender.find((g) => g.value === field.value) || null}
                onChange={(_, value) => field.onChange(value?.value || "")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Giới tính"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    sx={{ mb: 2 }}
                  />
                )}
              />
            )}
          />
          {/* Email */}
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email là bắt buộc" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{ mb: 2 }}
              />
            )}
          />

          {/* Address */}
          <Controller
            name="address"
            control={control}
            rules={{ required: "Địa chỉ là bắt buộc" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Địa chỉ"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{ mb: 2 }}
              />
            )}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Lưu
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Hủy
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
