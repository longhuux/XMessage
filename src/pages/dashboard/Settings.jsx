import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from "phosphor-react";
import React from "react";

const Settings = () => {
  const theme = useTheme();
  const list = [
    {
      key: 0,
      icon: <Bell size={20}></Bell>,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20}></Lock>,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20}></Key>,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20}></PencilCircle>,
      title: "Theme",
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20}></Image>,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20}></Note>,
      title: "Request account info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20}></Keyboard>,
      title: "Keyboard shortcuts",
      onclick: () => {},
    },
    {
      key: 7,
      icon: <Info size={20}></Info>,
      title: "Help",
      onclick: () => {},
    },
  ];
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* LeftPanel */}
        <Box
          sx={{
            overflowY: "scroll",
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} />
              </IconButton>
              <Typography variant="h5">Settings</Typography>
            </Stack>
            {/* Profile */}
            <Stack direction={"row"} spacing={3}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={faker.image.avatar()}
                alt={faker.person.fullName()}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">
                  {faker.person.fullName()}
                </Typography>
                <Typography variant="body2">{faker.string.sample()}</Typography>
              </Stack>
            </Stack>
            {/* Options */}
            <Stack spacing={4}>
              {list.map(({key, icon, title, onclick})=>
                <>
                  <Stack spacing={2} sx={{cursor:"pointer"}} onclick={onclick}>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      {icon}
                      <Typography variant="body2">{title}</Typography>
                    </Stack>
                    {key !== 7 && <Divider/>}
                  </Stack>
                </>
              )}
            </Stack>
          </Stack>
        </Box>
        {/* RightPanel */}
      </Stack>
    </>
  );
};

export default Settings;
