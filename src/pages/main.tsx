import { getArt } from "../api";
import * as S from "../styled/main.style";
import { useEffect } from "react";
import { CardContainer } from "../components/cardConteiner";
import { useDispatch } from "react-redux";
import { getCard } from "../store/slices/cardsSlices";
import { useAppSelector } from "../store/store";
import { Pagination } from "../components/pagination";
import { FilterContainer } from "../components/filterCard";

export const limit = 6;

export const Main = () => {
  const dispatch = useDispatch();
  const currentPage = useAppSelector(
    (state) => state.cards.pagination.current_page
  );

  useEffect(() => {
    getArt({ page: currentPage, limit: limit })
      .then((cards) => {
        dispatch(getCard(cards));
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <S.Main>
      <S.Header>
        <S.HeaderTextBox>
          <S.HeaderTextTitle>
            WELCOME TO THE ART INSTITUTE OF CHICAGO
          </S.HeaderTextTitle>
        </S.HeaderTextBox>
      </S.Header>
      <FilterContainer />
      <CardContainer />
      <Pagination />
    </S.Main>
  );
};
