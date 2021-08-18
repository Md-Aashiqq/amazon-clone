import styled, { css } from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  width: auto;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  height: 100%;

  /* @media (min-width: 1408px) {
    max-width: 1244px;
  }
  @media (min-width: 1024px) {
    max-width: 968px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  } */

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.alignTop &&
    css`
      align-items: top;
    `}
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;

export const CustomCursor = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.red};
  border-radius: 100%;
  transition: all 0.1s ease-in-out;
  transition-property: width, height, transfrom, border;
  will-change: width, height, transfrom, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 4px solid ${(props) => props.theme.color} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 52px;
    height: 52px;
    border: 4px solid ${(props) => props.theme.red};
  }
`;
