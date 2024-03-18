import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ServiceCard = ({ data, button }) => {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: "cover",
        flexDirection: { xs: "column", md: "row" },
        marginBottom: "20px",
        border: "1px solid #5c5c5c",
        height: { xs: "auto", md: "330px" },
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Chip
            sx={{
              bgcolor: "#fff",
              fontSize: "18px",
              fontFamily: "Outfit",
              color: "#0EAD69",
              width: 45,
              mb: "20px",
            }}
            label={data.id}
          />
          <Typography
            mb={3}
            textAlign="left"
            variant="h2"
            sx={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {data.title}
          </Typography>
          <Typography
            mb={3}
            variant="body2"
            textAlign="left"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {data.description}
          </Typography>
          {button && (
            <Button
              variant="outlined"
              component={Link}
              to={`/blog/${data.id}/`}
              tabIndex={-1}
              startIcon={
                <CardMedia
                  component="img"
                  image="/icons/rocket.png"
                  sx={{ width: 24, height: 24 }}
                  alt="icon"
                />
              }
            >
              <Typography variant="body2">{data.btnText}</Typography>
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
