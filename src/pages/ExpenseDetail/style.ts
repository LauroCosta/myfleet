import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  height: 100vh;
  header {
    height: 4rem;
    background-color: #234B89;
    padding: 1rem;
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      
    
      img {
        width: 2rem;
      }
    }
  }

  .info {

    background-color: #fff;
    padding: 1rem;
    margin: 1.5rem;
    border-radius: 1rem;
    span {
      font-size: 1rem;
      color: #555555;
      
    }

    h1 {

      font-size: 1.5rem;
      color: #555555;
      margin-bottom: 0.5rem;
    }
  }

  footer {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    bottom: 2rem;

    > button {
      background-color: red;
      margin: 0 auto;
      font-weight: bold;
    }
  }

`;