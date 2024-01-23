export const LightTheme: Partial<Theme> = {
  background: {
    main: "#FF0000",
    secondary: "#FFFFFF",
    search: "#EEEEEE",
  },
  types: {
    normal: "#A8A090",
    fighting: "#A05038",
    flying: "#98A8F0",
    poison: "#B058A0",
    ground: "#E9D6A4",
    rock: "#B8A058",
    bug: "#A8B820",
    ghost: "#6060B0",
    steel: "#A8A8C0",
    fire: "#F05030",
    water: "#3899F8",
    grass: "#78C850",
    electric: "#F8D030",
    psychic: "#F870A0",
    ice: "#58C8E0",
    dragon: "#7860E0",
    dark: "#7A5848",
    fairy: "#E79FE7",
    unknown: "#D2C21A",
    shadow: "#5F5F5F",
  },
  hover: {
    dark: "#EE0000",
    gray: "#CCCCCC",
  },
  text: {
    main: "#000000",
    secondary: "#FFFFFF",
  },
  size: {
    extrasmall: "12px",
    small: "16px",
    medium: "24px",
    large: "32px",
    extralarge: "48px",
  },
  shadow: {
    white: "rgba(255, 255, 255, 0.4)",
    black: "rgba(0, 0, 0, 0.4)",
  },
  outline: {
    black: "#000000",
    white: "#FFFFFF",
  },
};

export type Theme = {
  background: {
    main: string;
    secondary: string;
    search: string;
  };
  types: {
    normal: string;
    fighting: string;
    flying: string;
    poison: string;
    ground: string;
    rock: string;
    bug: string;
    ghost: string;
    steel: string;
    fire: string;
    water: string;
    grass: string;
    electric: string;
    psychic: string;
    ice: string;
    dragon: string;
    dark: string;
    fairy: string;
    unknown: string;
    shadow: string;
  };
  hover: {
    dark: string;
    gray: string;
  };
  text: {
    main: string;
    secondary: string;
  };
  size: {
    extrasmall: string;
    small: string;
    medium: string;
    large: string;
    extralarge: string;
  };
  shadow: {
    black: string;
    white: string;
  }
  outline: {
    black: string;
    white: string;
  };
};
