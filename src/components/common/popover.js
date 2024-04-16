import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicPopover({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        style={{ width: "24px", height: "24px" }}
      >
        <img
          src={"/Filter.png"}
          alt="fliter"
          height={24}
          width={24}
          style={{
            padding: "4px",
            borderRadius: "4px",
            backgroundColor: "#282828",
            cursor: "pointer",
          }}
        />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {children}
      </Popover>
    </div>
  );
}
