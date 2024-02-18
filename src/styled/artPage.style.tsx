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
  justify-content: space-between;
  padding: 32px 80px 0px 80px;
  @media screen and (max-width: 768px) {
    padding: 20px;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderTextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 26px;
  padding-bottom: 64px;
  padding-left: 188px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;
export const HeaderTextTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 72px;
  }
`;
export const HeaderText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 37.5px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 23px;
  }
`;

export const UserContainer = styled.div`
  padding: 48px;
  display: flex;
  gap: 100px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const UserImages = styled.div`
  width: 387px;
  height: 387px;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const UserCard = styled.div`
  width: 630px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const UserLogin = styled.div`
  display: flex;
  gap: 8px;
`;

export const UserText = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #151317;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding-top: 26px;
  @media screen and (max-width: 768px) {
    padding-top: 0;
    align-items: center;
  }
`;

export const HeaderBtnMob = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
