import * as S from "../styled/main.style";
import { useAppSelector } from "../store/store";
import { ArtCard } from "./artCard";

export const CardContainer = () => {
  const cards = useAppSelector((state) => state.cards.data);
  const filterStatus = useAppSelector((state) => state.cards.filterStatus);
  const visibleCards = filterStatus
    ? cards.filter((card) => card.like === true)
    : cards;
  return (
    <>
      {visibleCards.length > 0 ? (
        <S.UserContainer>
          {visibleCards.map((card) => (
            <ArtCard key={card.id} card={card} />
          ))}
        </S.UserContainer>
      ) : (
        <S.UserTextNot>Пользователи не найдены</S.UserTextNot>
      )}
    </>
  );
};
