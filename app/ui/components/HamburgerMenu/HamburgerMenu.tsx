"use client";
import dynamic from "next/dynamic";
const Box = dynamic(() => import("@mui/material/Box"));
const Drawer = dynamic(() => import("@mui/material/Drawer"));

import * as React from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
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
        <MenuIcon sx={{ color: "rgba(111, 0, 255, 1)", fontSize: "32px" }} />
      </IconButton>

      <Drawer
        PaperProps={{
          sx: { width: "100%", height: "50%" },
        }}
        anchor="top"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            p: 2,
            height: "100%",

            backgroundColor: "#1D2127",
          }}
        >
          <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
            <CloseIcon sx={{ color: "rgba(111, 0, 255, 1)" }} />
          </IconButton>

          <ul className="h-3/4 text-white font-medium space-y-7 flex flex-col justify-between items-center">
            <li>
              <Link
                className="hover:text-secondary focus:text-secondary focus:underline transition-colors duration-300 "
                aria-label="Link to home"
                href="/"
                onClick={toggleDrawer(false)}
              >
                Strona Główna
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-secondary focus:text-secondary focus:underline transition-colors duration-300 "
                aria-label="Link to gallery"
                href="/services"
                onClick={toggleDrawer(false)}
              >
                Usługi
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-secondary focus:text-secondary focus:underline transition-colors duration-300 "
                aria-label="Link to news page"
                href="/blog"
                onClick={toggleDrawer(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-secondary focus:text-secondary focus:underline transition-colors duration-300 "
                aria-label="Link to news page"
                href="/projects"
                onClick={toggleDrawer(false)}
              >
                Projekty
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-7  bg-gradient-to-b from-[#05A66B] to-[#008253] text-white text-center tracking-wide transition ease-in-out duration-300 hover:scale-105 shadow-md rounded-full font-semibold"
                href="/contact"
                onClick={toggleDrawer(false)}
              >
                Skontaktuj się ze mną
              </Link>
            </li>
            <li>
              <SocialMedia />
            </li>
          </ul>
        </Box>
      </Drawer>
    </div>
  );
}
