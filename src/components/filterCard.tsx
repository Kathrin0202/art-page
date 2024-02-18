import { useDispatch } from "react-redux";
import { setFilterStatus } from "../store/slices/cardsSlices";
import * as S from "../styled/filter.style";

export const chooseRepo = ["true", "false"];

export const FilterContainer = () => {
  const dispatch = useDispatch();

  return (
    <S.FilterContainer>
      <S.FilterContainerTitle>Сортировать:</S.FilterContainerTitle>
      <S.FilterButton
        onClick={() => dispatch(setFilterStatus())}
      >
        {" "}
        Like Art
      </S.FilterButton>
    </S.FilterContainer>
  );
};
