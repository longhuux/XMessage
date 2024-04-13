import {
  Box,
  Stack,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MessageBox from "./MessageBox";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Header */}
      <Header />
      {/* Message */}
      <Box width={"100%"} sx={{ flexGrow: 1, height:"100%", overflowY:"scroll" }}>
        <MessageBox menu={true}/>
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
