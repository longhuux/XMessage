import { faker } from "@faker-js/faker";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
  return (
    <>
      <Stack direction={"row"} sx={{width: "100%"}}>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
            <Stack p={4} spacing={3}>
                {/* Header */}
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                    <IconButton>
                        <CaretLeft size={24} color="#4b4b4b"/>
                    </IconButton>
                    <Typography variant="h5">Profile</Typography>
                </Stack>
                <Avatar src={faker.image.avatar()}/>
            {/* Form */}
            <ProfileForm/>
            </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
