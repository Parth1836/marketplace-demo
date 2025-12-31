import * as React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function ApiExplorerSection() {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        
      }}
    >
      {/* Outer Card */}
      <Box
        sx={{
          border: "1px solid",
          borderColor: "grey.300",
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          alignItems: "center",
          backgroundColor: "#f5f5f5"
        }}
      >
        {/* Left: Illustration / Image */}
        <Box
          sx={{
            height: { xs: 200, md: 260 },
            bgcolor: "grey.300",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography color="text.secondary">
            API Explorer Interface Illustration
          </Typography>
        </Box>

        {/* Right: Text & Button */}
        <Box>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
            Explorer lets you see exactly how API Calls work
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Use our interactive API Explorer to make live requests and see
            responses instantly, without writing a single line of code.
            Accelerate your development and integration process.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              px: 3,
              bgcolor: "common.black",
              "&:hover": {
                bgcolor: "grey.900",
              },
            }}
          >
            Launch API Explorer →
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
