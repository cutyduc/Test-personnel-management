import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import { Data } from "../App";
import { Controller, useForm } from "react-hook-form";

type AddNewProps = {
  data: Data[];
  onAdd: (newUser: Data) => void;
};

const gender = [
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
];

export const AddNew = ({ data, onAdd }: AddNewProps) => {
  const { handleSubmit, control, reset } = useForm<Data>({
    defaultValues: {
      id: "",
      name: "",
      date: "",
      gender: "",
      email: "",
      address: "",
    },
  });

  const generateId = () => {
    const MNV = data.length + 1;
    return `MNV${MNV}`;
  };

  const onSubmit = (formData: Data) => {
    const newId = formData.id || generateId();

    const exists = data.some((user) => user.id === newId);
    if (exists) {
      alert(`Mã nhân viên ${newId} đã tồn tại! Vui lòng nhập mã khác.`);
      return;
    }

    const newUser = {
      ...formData,
      id: newId,
    };
    onAdd(newUser);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          p: 2,
          borderRadius: 1,
          border: "1px solid gray",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          backgroundColor: "#EEEEEE",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Thêm mới nhân viên
        </Typography>

        {/* ID */}
        <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Mã nhân viên" fullWidth />
          )}
        />

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
            />
          )}
        />

        {/* Date */}
        <Controller
          name="date"
          control={control}
          rules={{ required: "Ngày sinh là bắt buộc" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Ngày sinh"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        {/* Gender */}
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
            />
          )}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Thêm mới
          </Button>
          <Button
            type="reset"
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              reset();
            }}
          >
            Hủy bỏ
          </Button>
        </Box>
      </Box>
    </form>
  );
};
