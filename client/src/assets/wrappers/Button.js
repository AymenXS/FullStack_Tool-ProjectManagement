import styled from 'styled-components';

const CreateButton = styled.button`
  font-size: 0.8rem;
  color: #fff !important;
  background: rgb(29 92 255 / 100%);
  padding: 13px 25px;
  border-radius: 17px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  transition: all 0.25s ease;
  border: 0;
  cursor: pointer;
  box-shadow: 0 10px 20px -10px rgb(29 92 255 / 50%);
  &:hover {
    box-shadow: 0 20px 20px -10px rgb(29 92 255 / 50%);
    transform: translateY(-5px);
  }

  &:last-child {
    justify-self: flex-end;
  }
`;

export default CreateButton;
