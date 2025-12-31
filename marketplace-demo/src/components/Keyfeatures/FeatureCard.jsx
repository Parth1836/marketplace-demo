import { Box, Card, CardContent, Typography } from "@mui/material";
function FeatureCard({ icon, title, description }) {
  return (
    <Card
      elevation={3}
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
        <Box
          sx={{
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            borderRadius: 2,
            mb: 2,
          }}
        >
          {icon}
        </Box>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default FeatureCard;
