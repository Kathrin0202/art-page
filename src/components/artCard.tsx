import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getArtCard } from "../api";
import { setCardDetails } from "../store/slices/cardSlices";
import { setDeleteCard, setLikeCard } from "../store/slices/cardsSlices";
import close from "../styled/img/close.png";
import * as S from "../styled/main.style";
export const ArtCard = ({ card }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  const handleCardLink = (id: number) => {
    navigate(`/art-page/${id}`);
    getArtCard(id)
      .then((cards) => {
        dispatch(setCardDetails(cards));
      })
      .catch((error) => alert(error));
  };

  const handleDeleted = (id: number, event: any) => {
    event.stopPropagation();
    dispatch(setDeleteCard({ id }));
  };

  const LikeCard = (id: number) => {
    setLike(true);
    dispatch(setLikeCard({ id }));
  };

  const DisLikeCard = (id: number) => {
    setLike(false);
    dispatch(setLikeCard({ id }));
  };

  const toggleLikeDisLike = (id: number, event: any) => {
    event.stopPropagation();
    like ? DisLikeCard(id) : LikeCard(id);
  };
  return (
    <S.UserCard onClick={() => handleCardLink(card.id)}>
      <S.LikeBox onClick={(event) => handleDeleted(card.id, event)}>
        <img src={close} alt="close" />
      </S.LikeBox>
      <S.UserImages>
        <S.UserImg
          src={`https://www.artic.edu/iiif/2/${card.image_id}/full/843,/0/default.jpg`}
        />
      </S.UserImages>
      <S.UserLogin>{card.title}</S.UserLogin>
      <S.UserText>
        {card.artist_title ? card.artist_title : "не указан"}
      </S.UserText>
      <S.LikeBox onClick={(event) => toggleLikeDisLike(card.id, event)}>
        {like ? (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="#f24916"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z"
              stroke="#151317"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z"
              stroke="#151317"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </S.LikeBox>
    </S.UserCard>
  );
};
