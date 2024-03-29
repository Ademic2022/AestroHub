import React from "react";
import {
  Box,
  Paper,
  CardMedia,
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CustomToast from "@/components/common/CustomToast";
import {
  nameValidator,
  emailValidator,
  textFieldValidator,
} from "@/utils/formValidator";

const CommentForm = ({ slug }) => {
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [saveInfo, setSaveInfo] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  React.useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    if (savedName && savedEmail) {
      reset({ name: savedName, email: savedEmail });
      setSaveInfo(true);
    }
  }, []);
  const onSubmit = async (data) => {
    setLoading(true);
    if (saveInfo) {
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
    } else {
      localStorage.clear()
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, slug: slug }),
      });
      if (!response) {
        setMessage("Failed to create comment");
        setOpen(true);
      }

      setMessage("Comment created, awaiting review...");
      setOpen(true);
    } catch (error) {
      console.error("Error creating comment:", error);
    } finally {
      setLoading(false);
      reset()
    }
  };
  React.useEffect(() => {
    if (open) {
      const timeoutId = setTimeout(() => {
        setOpen(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  const handleCheckboxChange = (event) => {
    setSaveInfo(event.target.checked);
  };
  return (
    <Box my={2}>
      <Paper
        sx={{ p: 2, borderRadius: 5, display: "flex", flexDirection: "column" }}
      >
        <Typography mb={1} textAlign="left">
          Leave a Reply
        </Typography>
        <Divider sx={{ mb: 2 }}>Comment</Divider>
        <Grid
          container
          spacing={4}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          mb={2}
        >
          <Grid item xs={12}>
            <TextField
              label="Comment"
              {...register("comment", textFieldValidator)}
              error={!!errors.company}
              helperText={!!errors.company ? errors.company.message : ""}
              multiline
              rows={3}
              variant="outlined"
              fullWidth
            />
          </Grid>
          {!saveInfo && (
            <>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  size="small"
                  {...register("name", nameValidator)}
                  error={!!errors.name}
                  helperText={!!errors.name ? errors.name.message : ""}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  size="small"
                  {...register("email", emailValidator)}
                  error={!!errors.email}
                  helperText={!!errors.email ? errors.email.message : ""}
                  fullWidth
                />
              </Grid>
            </>
          )}
          <Grid item style={{ paddingTop: "5px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                sx={{ mb: 1 }}
                control={
                  <Checkbox defaultChecked onChange={handleCheckboxChange} />
                }
                label={
                  <Typography
                    textAlign="left"
                    variant="body1"
                    sx={{ fontSize: "0.9rem", lineHeight: "15px" }}
                  >
                    {saveInfo
                      ? "Your name is saved for future comments. Uncheck the box to remove it."
                      : "Save my name, email in this browser for the next time I comment"}
                  </Typography>
                }
              />
              <Button
                variant="outlined"
                size="large"
                type="submit"
                sx={{ border: "1px solid #5c5c5c" }}
                disabled={loading}
                startIcon={
                  !loading ? (
                    <CardMedia
                      component="img"
                      image="/icons/rocket.webp"
                      sx={{ width: 24, height: 24 }}
                      alt="icon"
                    />
                  ) : null
                }
              >
                {loading ? <CircularProgress size={24} /> : "Add Comment"}
              </Button>
            </Box>
          </Grid>
        </Grid>
        <CustomToast open={open} message={message} bgcolor="#000" />
      </Paper>
    </Box>
  );
};

export default CommentForm;
