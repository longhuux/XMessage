import { Avatar, Box, Stack, Badge, Typography, IconButton } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Header */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
        //   backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent="space-between"
          direction={"row"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack direction={"row"} spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} alt={faker.person.fullName()} />
            </StyledBadge>
            <Stack direction={"column"} spacing={0.2}>
              <Typography variant="subtitle2">
                {faker.person.fullName()}
              </Typography>
              <Typography variant="inherit">
                Online
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <IconButton>

            </IconButton>
          </Stack>
        </Stack>
      </Box>
      {/* Message */}
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      {/* Chat Footer */}
      <Box sx={{ height: 100, width: "100%", backgroundColor: "#fff" }}></Box>
    </Stack>
  );
};

export default Conversation;
