import React, { Suspense, lazy } from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import StarredMessage from "../../components/StarredMessage";

const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  const theme = useTheme();
  const { sideBar } = useSelector((store) => store.app);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chát */}
      <Chats />
      {/* Conversation */}
      <Box
        sx={{
          height: "100%",
          width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f0f4fa"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
      {/* Contacts */}
      {sideBar.open &&
        (() => {
          switch (sideBar.type.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessage/>;
            case "SHARED":
              return <SharedMessage />;
            default:
              break;
          }
        })()} 
    </Stack>
  );
};

export default GeneralApp;
