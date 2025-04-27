import React from "react";
import Box from '@mui/material/Box';
import AppNavbar from '@/components/ui/AppNavbar';
import SideMenu from '@/components/ui/SideMenu';
import { Stack } from "@mui/material";
import Header from "@/components/ui/Header";


function MainLayout({ children }: { 
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <AppNavbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: 'background.default',
          overflow: 'auto',
        }}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
          {/* Main content */}
          { children }
        </Stack>
      </Box>
    </Box>
  );

}

export default MainLayout;