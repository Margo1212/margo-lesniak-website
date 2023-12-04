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
        <MenuIcon sx={{ color: "#CC08F2" }} />
      </IconButton>

      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            p: 2,
            height: 1,
          }}
        >
          <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>

          <Box sx={{ mb: 2, px: "10px" }}>
            <ul className=" space-y-2 align-middle font-medium py-6 flex flex-col justify-between">
              <li>
                <Link href="/">Strona główna</Link>
              </li>
              <li>
                <Link href="/about">O nas</Link>
              </li>
              <li>
                <Link href="/about-services">O usługach</Link>
              </li>
              <li>
                <Link href="/gallery">Galeria</Link>
              </li>
              <li>
                <Link href="/price-list">Cennik</Link>
              </li>
              <li>
                <Link href="/products">Produkty</Link>
              </li>
              <li>
                <Link href="/news">Nowośći</Link>
              </li>
              <li>
                <Link href="/vouchers">
                  <p className="text-wrapper">Bony podarunkowe</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">Kontakt</Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
