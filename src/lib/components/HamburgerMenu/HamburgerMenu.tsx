"use client";
import dynamic from "next/dynamic";
const Box = dynamic(() => import("@mui/material/Box"), {
  loading: () => <p>Loading...</p>,
});
const Drawer = dynamic(() => import("@mui/material/Drawer"), {
  loading: () => <p>Loading...</p>,
});

import * as React from "react";

import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export default function HamburgerMenu() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  return (
    <div className="block laptop:hidden">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{
          m: 0,
          p: 0,
        }}
      >
        <MenuIcon sx={{ color: "rgba(111, 0, 255, 1)" }} />
      </IconButton>

      <Drawer  sx={{width: '100%',}} anchor="right" open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            p: 2,
            height: 1,
            
            backgroundColor: '#1D2127'
          }}
        >
          <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
            <CloseIcon sx={{ color: "rgba(111, 0, 255, 1)" }} />
          </IconButton>

          <Box sx={{ mb: 2, px: "10px" }}>
            <ul className=" text-white font-medium space-y-3">
              <li>
                <Link aria-label="Link to home" href="/">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link aria-label="Link to about page" href="/about">
                  O mnie
                </Link>
              </li>
              <li>
                <Link aria-label="Link to gallery" href="/offer">
                  Oferta
                </Link>
              </li>
              <li>
                <Link aria-label="Link to news page" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link aria-label="Link to news page" href="#">
                  Projekty
                </Link>
              </li>
              
            </ul>
            <div className="mt-10"><SocialMedia /></div>
            
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
