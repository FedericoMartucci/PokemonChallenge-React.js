import styled from "styled-components";
import { Theme } from "../../utils/theme";
import { ButtonType, Sizes } from "../../utils/types";

type StyledButtonProps = {
  onClick?: (e: any) => void;
  theme: Theme;
  buttonType: ButtonType;
  size: Sizes;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props: StyledButtonProps) => props.theme.text.secondary};
  height: 50%;
  width: ${(props: StyledButtonProps) => {
    switch (props.size) {
      case Sizes.SMALL:
        return "5%";
      case Sizes.MEDIUM:
        return "10%";
      default:
        return "10%";
    }
  }};
  background-color: ${(props: StyledButtonProps) => {
    switch (props.buttonType) {
      case ButtonType.SEARCH:
        return props.theme.background.search;
      case ButtonType.FILTER:
        return props.theme.background.main;
      default:
        return props.theme.background.main;
    }
  }};
  margin-left: 8px;
  border: none;
  outline: black solid 1px;
  box-shadow: 0px 0px 4px 2px ${(props: StyledButtonProps) => {
    switch (props.buttonType) {
      case ButtonType.SEARCH:
        return props.theme.shadow.white;
      case ButtonType.FILTER:
        return props.theme.shadow.black;
      default:
        return props.theme.shadow.black;
    }
  }};
  ${(props: StyledButtonProps) =>
    props.buttonType === ButtonType.SEARCH
      ? `border-top-right-radius: 64px;
      border-bottom-right-radius: 64px;
      border-width: 1px;
      max-height: 100%;
      height: 100%;`
      : `border-radius: 64px;`}

  &:hover {
    background-color: ${(props: StyledButtonProps) => {
      switch (props.buttonType) {
        case ButtonType.FILTER:
          return props.theme.hover.dark;
        case ButtonType.SEARCH:
          return props.theme.hover.gray;
        default:
          return props.theme.hover.dark;
      }
    }};
    transition: 0.2s;
  }

  &:active {
    box-shadow: 0px 0px 4px 2px ${(props: StyledButtonProps) => {
      switch (props.buttonType) {
        case ButtonType.SEARCH:
          return props.theme.shadow.black;
        case ButtonType.FILTER:
          return props.theme.shadow.white;
        default:
          return props.theme.shadow.white;
      }
    }};
  }

  @media (min-width: 576px) and (max-width: 768px) {
    ${(props: StyledButtonProps) =>
      (props.buttonType === ButtonType.FILTER ||
        props.buttonType === ButtonType.APPLYFILTER) ?
      "width: 7%;" : "width: 20%;"}

    ${(props: StyledButtonProps) =>
      props.buttonType === ButtonType.APPLYFILTER &&
      "height: 20%; width: 40%; margin-bottom: 8px;"}
  }

  @media (max-width: 576px) {
    ${(props: StyledButtonProps) =>
      (props.buttonType === ButtonType.FILTER ||
        props.buttonType === ButtonType.APPLYFILTER) &&
      "width: 8%;"}

    ${(props: StyledButtonProps) =>
      props.buttonType === ButtonType.APPLYFILTER && "height: 10%; width: 40%;"}
  }
`;
