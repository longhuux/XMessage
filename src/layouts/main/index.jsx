import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import Logo from "../../assets/Images/logo.jpeg";
import { useSelector } from "react-redux";

const isAuthenticated = false;

const MainLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if(isLoggedIn){
    return <Navigate to="/app"/>
  }
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={3}>
          <Stack
            sx={{ width: "100%" }}
            direction={"column"}
            alignItems={"center"}
          >
            <img style={{ height: 120, width: 120, borderRadius: 24 }} src={Logo} alt="Logo" />
          </Stack>
        </Stack>  
        

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
