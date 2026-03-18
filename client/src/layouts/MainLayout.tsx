import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Box, Toolbar } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Navbar /> 

      <Toolbar /> {/* Este Toolbar compensa la altura del navbar */}
      
      <Box>
        <Outlet />
      </Box>
      
      <Footer />
    </>
  );
};

export default MainLayout;