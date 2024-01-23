import { ChangeEvent, FormEvent, useState } from "react";
import Lupe from "../../assets/LupeIcon.png";

import { ButtonType, SearchBarProps, Sizes } from "../../utils/types";
import { StyledButton } from "../common/Button";
import { StyledImage } from "../common/Image";
import { StyledSearchBar } from "./StyledSearchBar";
import { StyledSearchInput } from "./StyledSearchInput";

export default function SearchBar({ handleSearch }: SearchBarProps) {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSearch(value);
    setValue("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searched = e.target.value;
    setValue(searched);
  };

  return (
    <StyledSearchBar>
      <StyledSearchInput
        className="search-input"
        onChange={handleChange}
        value={value}
        type="text"
        placeholder="Search..."
      />
      <StyledButton
        buttonType={ButtonType.SEARCH}
        size={Sizes.MEDIUM}
        onClick={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
        type="submit"
      >
        <StyledImage
          maxWidth="100%"
          width="1.5rem"
          opacity={0.5}
          padding="4px"
          src={Lupe}
          alt="Lupe"
        />
      </StyledButton>
    </StyledSearchBar>
  );
}
