import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import FeatureCard from "./FeatureCard";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import CodeIcon from "@mui/icons-material/Code";
function Keyfatures() {
  return (
    <div>
      <Box sx={{ py: 10, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Key features
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our platform is designed for security, scalability, and developer
              experience.
              <br />
              Focus on your product, we&apos;ll handle the infrastructure.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<SecurityIcon fontSize="large" />}
                title="Easy to integrate"
                description="Leverage our secure infrastructure with end-to-end
              encryption and compliance with global standards."
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<BoltIcon fontSize="large" />}
                title="Innovate faster"
                description="Built for scale, our APIs offer low latency and high
              availability to ensure a seamless user experience."
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<CodeIcon fontSize="large" />}
                title="Cost effective"
                description="Create your applications on an API built for global
              scale. Proven tech helps reduce operational costs."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
export default Keyfatures;
