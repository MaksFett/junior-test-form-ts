import styled from '@emotion/styled';


export const ImageListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;
`;

export const ImageCard = styled.li`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  padding: 12px 16px;
  font-weight: bold;
  width: 75%;
`;

export const CardDate = styled.div`
  padding: 0 16px;
  font-size: 14px;
  color: #666;
`;

export const CardImage = styled.img`
  width: stretch;
  justify-content: center;
  border-radius: 6px;
  margin: 10px;
  object-fit: contain;
`;

export const Description = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: #444;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  position: absolute;
  right: 5px;
  top: 10px;

  &:hover {
    color: #e53935;
  }
`;
