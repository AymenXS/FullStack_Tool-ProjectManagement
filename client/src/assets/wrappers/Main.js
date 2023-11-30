import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  nav {
    display: grid;
    grid-template-columns: 8% 8% auto;
    column-gap: 1%;
  }
  .table {
    .table-headers {
      display: grid;
      grid-template-columns: 20% 40% 15% 15% 10%;
      color: #909090;
      margin-top: 20px;
      li {
        text-align: center;
      }

      li:nth-child(2) {
        margin-left: 5px;
        text-align: start;
      }
    }
  }
`;
export default Container;
