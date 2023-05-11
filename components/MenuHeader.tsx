"use client";
import { IMenuHeader } from "@/types";
import {
  Button,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import { useRef, useState } from "react";

const MenuHeader = ({ header, content }: IMenuHeader) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
          >
            {header}
          </Button>
          {content && (
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                    >
                      {content?.map((item, index) => {
                        return (
                          <MenuItem onClick={() => setOpen(false)} key={index}>
                            {item}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Paper>
                </Grow>
              )}
            </Popper>
          )}
        </div>
      </Stack>
    </>
  );
};

export default MenuHeader;
