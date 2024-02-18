import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../store/store";
import * as S from "../styled/artPage.style";
import back from "../styled/img/eva_arrow.png";

export const ArtPage = () => {
  let navigate = useNavigate();
  const handleClickMain = () => {
    navigate("/");
  };
  const param = useParams();
  const cards = useAppSelector((state) => state.card.data);

  return (
    <S.Main>
      <S.Header>
        <S.HeaderBtnBox>
          <S.HeaderBtn onClick={handleClickMain}>Назад</S.HeaderBtn>
          <S.HeaderBtnMob src={back} onClick={handleClickMain} />
        </S.HeaderBtnBox>
        <S.HeaderTextBox>
          <S.HeaderTextTitle>{cards.title}</S.HeaderTextTitle>
        </S.HeaderTextBox>
      </S.Header>
      <S.UserContainer>
        <S.UserCard>
          <S.UserText>Artist: {cards.artist_title}</S.UserText>
          <S.UserText>Classification: {cards.classification_titles}</S.UserText>
          <S.UserText>Place: {cards.place_of_origin}</S.UserText>
          <S.UserText>Date: {cards.date_display}</S.UserText>
          <S.UserText>{cards.description}</S.UserText>
        </S.UserCard>
        <S.UserLogin>
          <S.UserImages>
            <S.UserImg
              src={`https://www.artic.edu/iiif/2/${cards.image_id}/full/843,/0/default.jpg`}
            />
          </S.UserImages>
        </S.UserLogin>
      </S.UserContainer>
    </S.Main>
  );
};
