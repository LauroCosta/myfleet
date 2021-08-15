import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  .content{
    position: relative;
    height: 80%;
    width: 100%;
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 2rem;

 
    button{
      position: absolute;
      right: 1rem;
      top: 1.2rem;
      border: 0;
      background-color: transparent;
      transition: filter 0.3s;


      img {
        width: 1.5rem;
      }

      &:hover{  

        filter: brightness(0.5);
      }
    }
  }

`;