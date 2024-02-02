import CloseFilter from "../../assets/FilterBar.svg";
import OpenFilter from "../../assets/Cross.svg";

import { ButtonType, FilterButtonProps, Sizes } from "../../utils/types";

import { useState } from "react";
import { StyledButton } from "../common/Button";
import { StyledImage } from "../common/Image";

export default function FilterButton({ handleFilter }: FilterButtonProps) {
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsFiltering(!isFiltering);
    handleFilter(isFiltering);
  };

  return (
    <StyledButton
      onClick={handleClick}
      buttonType={ButtonType.FILTER}
      size={Sizes.SMALL}
    >
      {isFiltering ? (
        <StyledImage width="50%" src={OpenFilter} alt="Open filters" />
      ) : (
        <StyledImage width="50%" src={CloseFilter} alt="Close filters" />
      )}
    </StyledButton>
  );
}
