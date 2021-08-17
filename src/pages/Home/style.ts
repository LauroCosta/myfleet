import styled from 'styled-components';

export const Content = styled.div`



  display: flex;
  flex-direction: column;




  .logo {
    width: 8rem;
  }

  .banner{
    position: relative;

    height: 60vh;
    width: 80%;
    margin: 0 auto;
    background-color: #234B89;
    border-radius: 0 0 15rem 15rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 15rem;
      margin-bottom: 3rem;
    }

    h2 {
      
      max-width: 60%;
      color: #f6f6f6;
      text-align: center;
    }

    span {
      margin-top: 1rem;
      color: #c4c4c4;
      font-size: 1.25rem;
      max-width: 70%;
      text-align: center;
    }

    .animation {
      position: absolute;
      bottom: -9rem;

    }

  }

  footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2rem;

    display: flex;
    justify-content: center;

    .loginGoogle {
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #FE5679;
      color: #fff;
      padding: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;
      transition: filter 0.3s;

      img {
        margin-right: 8px;
      }

      &:hover {
        filter: brightness(0.9);
      }
      
    }
  }

`