import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import StyledBadge from "./StyledBadge";
import {
  ArrowDownLeft,
  ArrowDownRight,
  Phone,
  VideoCamera,
} from "phosphor-react";

const CallLogElement = ({ online, incoming, missed }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack spacing={2} direction={"row"} alignItems={"center"}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                src={faker.image.avatar()}
                alt={faker.person.fullName()}
              />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} alt={faker.person.fullName()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">
              {faker.person.fullName()}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              {incoming ? (
                <ArrowDownLeft color={missed ? "red" : "green"} />
              ) : (
                <ArrowDownRight color={missed ? "red" : "green"} />
              )}
              <Typography variant="caption">Yesterday 21:21</Typography>
            </Stack>
          </Stack>
        </Stack>
        <IconButton>
          <Phone color="green" />
        </IconButton>
      </Stack>
    </Box>
  );
};

const CallElement = ({ online }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack spacing={2} direction={"row"} alignItems={"center"}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                src={faker.image.avatar()}
                alt={faker.person.fullName()}
              />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} alt={faker.person.fullName()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">
              {faker.person.fullName()}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={0.3}>
          <IconButton>
            <Phone color="green" />
          </IconButton>
          <IconButton>
            <VideoCamera color="green" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export { CallElement, CallLogElement };
