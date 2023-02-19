
import React from 'react';
import styled from "@emotion/styled";

const ScreenContainerStyle = styled('div')(({ theme }) => ({
  padding: 20,
  height: "100%",
  overflowY: "auto",
}));

const ScreenContainer = (props) => {

  return (
    <ScreenContainerStyle>{props.children}</ScreenContainerStyle>
  );
};

export default ScreenContainer;