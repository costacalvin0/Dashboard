import { Box } from "@mui/material";

const { default: styled } = require("@emotion/styled");

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

export default FlexBetween;