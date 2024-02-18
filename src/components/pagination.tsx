import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArt } from "../api";
import { limit } from "../pages/main";
import { getCard, setPageNumber } from "../store/slices/cardsSlices";
import { useAppSelector } from "../store/store";
import * as S from "../styled/pagination.style";

export const Pagination = () => {
  const currentPage = useAppSelector(
    (state) => state.cards.pagination.current_page
  );

  const totalPages = useAppSelector(
    (state) => state.cards.pagination.total_pages
  );
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();

  const fetchData = (page: number) => {
    dispatch(setPageNumber(page));
    const totalPagesCount = Math.ceil(totalPages / limit);
    setPages(totalPagesCount);
    getArt({
      limit: 6,
      page: page,
    })
      .then((data) => dispatch(getCard(data)))
      .catch((error) => console.log(error));
  };

  const handlePageChange = (page: number) => {
    fetchData(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
      return;
    }
  };

  const handleNextClick = () => {
    if (currentPage < pages) {
      handlePageChange(currentPage + 1);
      return;
    }
  };

  useEffect(() => {
    const totalPagesCount = Math.ceil(totalPages / limit);
    setPages(totalPagesCount);
  }, [totalPages, currentPage]);

  return (
    <S.PaginationCard>
      <S.BtnPrev onClick={handlePrevClick}>Назад</S.BtnPrev>
      <S.Page onClick={() => currentPage && handlePageChange(currentPage)}>
        {currentPage}
      </S.Page>
      <S.BtnNext onClick={handleNextClick}>Вперед</S.BtnNext>
    </S.PaginationCard>
  );
};
