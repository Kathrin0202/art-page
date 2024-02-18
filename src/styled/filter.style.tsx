import { styled } from "styled-components";

export const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  column-gap: 10px;
`;
export const FilterContainerTitle = styled.p`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #f24916;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FilterButton = styled.div`
  width: 250px;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: transparent;
  padding: 10px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #512689;
  margin: 10px;
  text-align: center;
  &:hover {
    border-color: #f24916;
    color: #151317;
    cursor: pointer;
  }
`;
