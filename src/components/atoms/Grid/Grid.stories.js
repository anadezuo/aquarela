import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

export default {
  title: "Components/Atoms/Grid",
  component: Grid,
};

const Box = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const usage = () => (
  <Grid sm={2} md={4} lg={5} xl={6}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </Grid>
);
