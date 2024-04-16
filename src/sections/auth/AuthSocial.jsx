import React from "react";
import { Divider, Stack, IconButton } from "@mui/material";
import { GoogleLogo, GithubLogo, TwitterLogo } from "phosphor-react";

const AuthSocial = () => {
  return (
    <>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        <IconButton>
          <GoogleLogo color="#df3e30" />
        </IconButton>
        <IconButton>
          <GithubLogo/>
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1c9cea" />
        </IconButton>
      </Stack>
    </>
  );
};

export default AuthSocial;
