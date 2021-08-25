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

  .content {
    position: relative;
    background-color: #ffff;
    width: 90%;
    height: 50%;
    border-radius: 1rem;
    padding: 1rem;
    margin: 2rem;

    display: flex;
    justify-content: center;
    flex-direction: column;

    .vehicle {
      display: flex;
      flex-direction: column;

      gap: 0.25rem;

      span {
        font-size: 1.25rem;
        color: #555555;
      }
      
    }

    h1 {
      position: absolute;
      top: 1.5rem;
      font-size: 1.25rem;
      font-weight: bold;
      color: #555555;
    }


    .buttons {
      position: absolute;
      bottom: 1rem;
      left: 0;
      padding: 0 1rem;
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 1rem;



      button {
        font-weight: bold;
        width: 100%;
        background: red;
      }

      button:first-child{

        background: #234B89;
      }
    }
  }
  

`;