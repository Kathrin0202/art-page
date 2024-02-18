import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
`;
export const HeaderBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  padding-top: 32px;
  @media screen and (max-width: 768px) {
    padding-right: 20px;
  }
`;
export const HeaderBtn = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  border: 1px solid #f8f8f8;
  background-color: #512689;
  color: #f8f8f8;
  &:hover {
    background-color: #460763;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
`;
export const HeaderTextTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  padding-top: 32px;
  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const UserContainer = styled.div`
  padding: 48px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
`;

export const UserLogin = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #151317;
  padding-top: 10px;
`;

export const UserImages = styled.div`
  width: 224px;
  height: 224px;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const UserCard = styled.div`
  width: 405px;
  height: 363px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0.9960451126098633px 3.984180450439453px 0px #33333326;
  &:hover {
    border: 1px solid #000000;
  }
`;

export const UserText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #151317;
`;

export const LikeBox = styled.div`
  width: 365px;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderBtnMob = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const UserTextNot = styled.p`
  padding-top: 32px;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center;
  color: #f24916;
  padding-top: 32px;
  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`;
