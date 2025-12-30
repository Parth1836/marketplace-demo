import * as React from "react";
import { Box, Button, Typography } from "@mui/material";

const partners = Array.from({ length: 12 });

export default function PreBuiltIntegrationsSection() {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        bgcolor: "#f5f5f5",
      }}
    >
      {/* OUTER LAYOUT */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "5fr 7fr",
          },
          gap: 6,
          alignItems: "start",
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ mb: 2, lineHeight: 1.2 }}
          >
            Get started easily with our pre-built partner integrations
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 420 }}
          >
            Our pre-built integrations cover a huge range of services and can be
            up and running in less than 15 minutes.
          </Typography>

          <Button
            variant="outlined"
            size="large"
            sx={{ textTransform: "none", px: 3 }}
          >
            Discover pre-built integrations
          </Button>
        </Box>

        {/* PARTNER GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {partners.map((_, index) => (
            <Box
              key={index}
              sx={{
                height: 80,
                bgcolor: "#f0f0f0",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color="text.secondary" fontSize={14}>
                Partner
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
