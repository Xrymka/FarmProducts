import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;
  min-height: 100%;
  height: 100%;
`;