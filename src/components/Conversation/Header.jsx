import { Avatar, Box, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react'
import React from 'react'
import {faker} from "@faker-js/faker"
import StyledBadge from '../StyledBadge'

const Header = () => {
    const theme = useTheme()
  return (
    <Box
    sx={{
      width: "100%",
      backgroundColor:
        theme.palette.mode === "light"
          ? "#F8FAFF"
          : theme.palette.background.paper,
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
    }}
    p={2}
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
          <Avatar
            src={faker.image.avatar()}
            alt={faker.person.fullName()}
          />
        </StyledBadge>
        <Stack direction={"column"} spacing={0.2}>
          <Typography variant="subtitle2">
            {faker.person.fullName()}
          </Typography>
          <Typography variant="inherit">Online</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={3} alignItems={"center"}>
        <IconButton>
          <VideoCamera />
        </IconButton>
        <IconButton>
          <Phone />
        </IconButton>
        <IconButton>
          <MagnifyingGlass />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton>
          <CaretDown />
        </IconButton>
      </Stack>
    </Stack>
  </Box>
  )
}

export default Header