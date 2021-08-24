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
    height: 70%;
    max-height: 30rem;
    width: 90%;
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 2rem;


    form {

      display: flex;
      flex-direction: column;
      margin-top: 2rem;

      label {
        font-size: 1.5rem;
        color: #6d6d6d;
      }

      input {
        background-color: #f6f6f6;
        font-size: 1.5rem;
        padding: 0.5rem 1rem ;
        border: 1px solid #d9d9d9;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
      }

      .buttons {
        margin-top: 1.5rem;
        bottom: 2rem;

        display: flex;
        gap: 1rem;
        
        width: 100%;

        button {
          height: 3rem;
          width: 100%;
          border-radius: 8px;
          font-weight: 500;
          color: #fff;
          padding: 0 2rem;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
          border: 0;
          transition: filter 0.3s;

          img {
            margin-right: 8px;
          }

          &:not(:disabled):hover {
            filter: brightness(0.9);
          }

          &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
          }
                }

          .cancel {
            background-color: red;
          }

          .save {
            background-color:  #234b89;


          }
      }

    
    }
 
    .close {
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