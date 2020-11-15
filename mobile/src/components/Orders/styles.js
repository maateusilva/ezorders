import styled, { css } from 'styled-components/native';

export const List = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 120,
    paddingHorizontal: 16,
  },
}))`
  width: 100%;
`;

const cardStatusVariants = {
  PREPARING: css`background: #F6A609;`,
  DONE: css`background: #2AC769;`,
};

const cardTextStatusVariants = {
  PREPARING: css`color: #FFF;`,
  DONE: css`color: #FFF;`,
};

export const Card = styled.View`
  background: #fff;
  flex-direction: row;
  height: 55px;
  margin-bottom: 16px;
  border-radius: 5px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  ${({ status }) => cardStatusVariants[status] || null}
`;

export const TableNumber = styled.Text`
  font-weight: bold;
  font-size: 18px;

  ${({ status }) => cardTextStatusVariants[status] || null}
`;

export const Status = styled.Text`
  font-weight: bold;
  font-size: 14px;

  ${({ status }) => cardTextStatusVariants[status] || null}
`;
