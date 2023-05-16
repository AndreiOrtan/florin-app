"use client";
import { IMenuHeader } from "@/types";
import Divider from "@mui/material/Divider";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { useRef, useState } from "react";
import Link from "next/link";

const MenuHeader = ({ header, content }: IMenuHeader) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  function getRoute(str: string) {
    return str.replace(/[\W_]+/g, "-").toLowerCase();
  }

  function handleMouseEnter() {
    setOpen(true);
  }

  function handleMouseLeave() {
    setOpen(false);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
      >
        <Link
          href={`/${header?.toLocaleLowerCase()}`}
          className={`no-underline text-sm block py-2 pl-3 pr-4 rounded hover:bg-gray100 hover:bg-transparent border-0 p-0 ${
            open ? "text-blue700" : "text-gray900"
          }`}
        >
          {header}
        </Link>
      </button>
      {content && (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="auto"
          transition
          disablePortal
          className={`${open ? "menu-container" : ""}`}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} className="mt-3.5">
              <Paper>
                <MenuList
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  className="py-1"
                >
                  {content?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link href={`/fizioterapie/${getRoute(item)}`}>
                          <MenuItem
                            onClick={() => setOpen(false)}
                            key={index}
                            className={`text-xs font-light px-4`}
                          >
                            {item}
                          </MenuItem>
                        </Link>
                        {index !== content.length - 1 ? (
                          <Divider
                            variant="middle"
                            sx={{ my: "0!important" }}
                            light
                          />
                        ) : null}
                      </div>
                    );
                  })}
                </MenuList>
              </Paper>
            </Grow>
          )}
        </Popper>
      )}
    </div>
  );
};

export default MenuHeader;
