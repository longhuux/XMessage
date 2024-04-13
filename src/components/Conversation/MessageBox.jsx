import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline } from "./MsgTypes";

const MessageBox = ({menu}) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMessage el={el} menu={menu}/>
                case "doc":
                  return <DocMessage el={el} menu={menu}/>
                case "link":
                  return <LinkMessage el={el} menu={menu}/>
                case "reply":
                  return <ReplyMessage el={el} menu={menu}/>
                default:
                  return <TextMessage el={el} menu={menu}/>;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default MessageBox;
