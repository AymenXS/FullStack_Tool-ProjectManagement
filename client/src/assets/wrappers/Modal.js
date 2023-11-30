import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    position: relative;
    padding: 1rem 3rem;
    background: rgb(255 255 255 / 80%);
    min-width: 400px;
    padding-top: 2rem;
    border-radius: 20px;
    border: 0;
    box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
    z-index: 2;

    .x {
      filter: grayscale(1);
      border: none;
      background: none;
      position: absolute;
      top: 15px;
      right: 10px;
      transition: ease filter, transform 0.3s;
      cursor: pointer;
      transform-origin: center;
      &:hover {
        filter: grayscale(0);
        transform: scale(1.1);
      }
    }
    h2 {
      font-weight: 600;
      font-size: 2rem;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.3rem;
      padding: 0.5rem 0;
      a {
        &:visited {
          color: rgb(var(--vs-primary));
        }
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    #modalHeader {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 0.5rem;
      margin-bottom: 0.2rem;
    }

    #modalHeader h5 {
      margin: 0;
      padding: 0;
      line-height: 0rem;
      font-size: 1.5rem;
      font-weight: bold;
    }

    #small-info {
      font-size: 0.9rem;
      padding: unset;
      margin: unset;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      column-gap: 0.5rem;

      #cancel {
        background-color: white;
        color: black;
      }

      #cancel,
      #submit {
        padding: 0.5rem 1rem;
      }
    }
  }
`;

export default Container;
