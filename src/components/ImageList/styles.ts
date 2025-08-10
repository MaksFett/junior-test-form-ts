import { styled, IconButton, Typography, Grid, Paper } from '@astral/ui'


export const ImageListWrapper = styled(Grid)`
  margin-top: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const ImageCard = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled(Typography)`
  padding: 12px 16px;
  font-weight: bold;
  width: 75%;
`;

export const CardDate = styled(Typography)`
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

export const Description = styled(Typography)`
  padding: 8px 16px;
  font-size: 14px;
  color: #444;
`;

export const DeleteButton = styled(IconButton)`
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  position: absolute;
  right: 5px;
  top: 10px;

  &:hover {
    color: #e53935;
    background: none;
  }
`;
