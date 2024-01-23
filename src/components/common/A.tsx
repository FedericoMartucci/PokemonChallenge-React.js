import styled from "styled-components";

interface AProps {
  width?: string;
  height?: string;
}

export const StyledA = styled.a<AProps>`
  display: block;
  width: ${(props: AProps) => props.width ?? "26.04%"};
  height: ${(props: AProps) => props.height ?? "100%"};
  align-items: center;
  margin-right: 8px;
  text-decoration: none;
  color: black;
`;
