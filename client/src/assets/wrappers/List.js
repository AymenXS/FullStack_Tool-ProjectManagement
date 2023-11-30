import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 15% 15% 10%;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(29 92 255 / 0.7) 0px 0px 4px 2px;
    transition: 0.2s ease-in-out;
  }

  span {
    text-align: center;
    word-wrap: break-word;
    line-height: 1;
    padding: 10px 0;
  }

  #starting-date i,
  #ending-date i {
    padding-right: 6px;
  }

  #actions {
    i {
      cursor: pointer;
      padding: 0 5px;
    }
    i:hover {
      color: blue;
    }
  }

  #description {
    text-align: start;
    text-justify: inter-word;
  }
`;
export default Container;
