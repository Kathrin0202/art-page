import { styled } from "styled-components";

export const PaginationCard = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;
export const BtnPrev = styled.button`
  margin-left: 10px;
  width: 70px;
  height: 50px;
  background-color: #512689;
  border: 1px solid #512689;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #460763;
  }
`;
export const BtnNext = styled.button`
  margin-left: 10px;
  width: 70px;
  height: 50px;
  background-color: #512689;
  border: 1px solid #512689;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #460763;
  }
`;
export const Page = styled.p`
  color: #f24916;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
