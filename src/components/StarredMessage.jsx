import {
    Box,
    Grid,
    IconButton,
    Stack,
    Tab,
    Tabs,
    Typography,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import { useDispatch } from "react-redux";
  import { UpdateSidebarType } from "../redux/slices/app";
  import { CaretLeft, X } from "phosphor-react";
  import { faker } from "@faker-js/faker";
  import { SHARED_DOCS, SHARED_LINKS } from "../data";
  import { DocMessage, LinkMessage } from "./Conversation/MsgTypes";
import MessageBox from "./Conversation/MessageBox";
  
  const StarredMessage = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
  
    return (
      <Box sx={{ width: 320, height: "100vh" }}>
        <Stack sx={{ height: "100%" }}>
          <Box
            sx={{
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
              width: "100%",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#f8faff"
                  : theme.palette.background,
            }}
          >
            <Stack
              sx={{ height: "100%", p: 2 }}
              direction={"row"}
              alignItems={"center"}
              spacing={3}
            >
              <IconButton
                onClick={() => {
                  dispatch(UpdateSidebarType("CONTACT"));
                }}
              >
                <CaretLeft />
              </IconButton>
              <Typography>Starred Message</Typography>
            </Stack>
          </Box>
          {/* Body */}
          <Stack
            sx={{
              height: "100%",
              position: "relative",
              flexGrow: 1,
              overflowY: "scroll",
            }}
            p={3}
            spacing={3}
          >
            <MessageBox/>
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export default StarredMessage;
  