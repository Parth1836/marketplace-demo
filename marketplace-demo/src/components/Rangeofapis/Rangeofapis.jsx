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
import ApiCard from "./ApiCard";

const products = [
  {
    title: "Account Services",
    description:
      "APIs that provide access to account information including account details, balances, transactions and statements. Supports real accounts.",
  },
  {
    title: "Payment Acceptance",
    description:
      "Payment APIs that enable initiation and processing of payments including Faster Payments, CHAPS, Transfers and International payments.",
  },
  {
    title: "Commercial Cards",
    description:
      "APIs that support commercial card-based payment services and enterprise cash management capabilities.",
  },
  {
    title: "Domestic Payments",
    description:
      "APIs for UK domestic payments including Faster Payments, CHAPS and Transfers. Supports single and bulk payments.",
  },
];

function Rangeofapis() {
  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Build anything using our extensive range of APIs
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore our comprehensive suite of APIs designed for seamless
            integration and innovation.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {products.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ApiCard {...item} />
            </Grid>
          ))}
        </Grid>

        {/* Footer CTA */}
        <Box textAlign="center" mt={6}>
          <Button variant="outlined" size="large">
            Explore all APIs
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
export default Rangeofapis;
