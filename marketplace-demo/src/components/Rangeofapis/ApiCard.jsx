import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
function ApiCard({ title, description }) {
  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <ApiIcon color="primary" />
          <Chip label="Live" size="small" />
          <Chip label="Sandbox" size="small" variant="outlined" />
        </Stack>

        {/* Image Placeholder */}
        <Box
          sx={{
            height: 160,
            bgcolor: "grey.300",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Image Placeholder
          </Typography>
        </Box>

        {/* Content */}
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          {description}
        </Typography>

        <Button variant="contained" fullWidth>
          View product
        </Button>
      </CardContent>
    </Card>
  );
}
export default ApiCard;
