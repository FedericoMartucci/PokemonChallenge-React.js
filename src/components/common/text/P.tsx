import styled from "styled-components";
import { Theme } from "../../../utils/theme";

interface PProps {
  primary: boolean;
  size: string;
  theme: Theme;
}

export const StyledP = styled.p<PProps>`
  color: ${(props: PProps) =>
    props.primary ? props.theme.text.main : props.theme.text.secondary};
  font-size: ${(props: PProps) => {
    switch (props.size) {
      case "SMALL":
        return props.theme.size.small;
      case "MEDIUM":
        return props.theme.size.medium;
      case "LARGE":
        return props.theme.size.large;
      case "EXTRALARGE":
        return props.theme.size.extralarge;
    }
  }};
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: -0.15px;
`;
