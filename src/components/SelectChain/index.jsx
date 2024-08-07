import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SelectChain = ({ chain, onSelect }) => {
  return (
    <Box
      onClick={() => onSelect()}
      sx={{ maxHeight: "52px", backgroundColor: "background.light", width: "100%", "&:hover": { backgroundColor: "text.grey3", cursor: "pointer" } }}
      borderRadius={"10px"} padding={"12px"}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {
            chain != null ? <img src={chain.icon} alt={"chain"} width="24px" height="24px" style={{ borderRadius: "999px", maxWidth: "28px", width: "28px", height: "28px", objectFit: "cover" }} /> : null
          }
          <Typography sx={{ marginLeft: "10px" }} variant="h6">
            {chain == null ? "Select" : chain.name}
          </Typography>
        </Box>
        <KeyboardArrowDownIcon color="secondary" />
      </Box>
    </Box>
  );
};

export default SelectChain;