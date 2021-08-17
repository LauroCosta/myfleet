import styled from 'styled-components';

export const Container = styled.div`
    
    
    
  header{
    position: relative;
    height: 12rem;
    background-color: #234b89;
    border-radius: 0 0 2rem 2rem;

    padding: 1.5rem;

    h1 {
      color: #f6f6f6;
      font-weight: 400;
      font-size: 1.5rem;
    }

    .profile {
      width: 100%;
      display: flex;
      justify-content: center;
      
      img {
        width: 9rem;
        position: absolute;
        border-radius: 50%;
        bottom: -4.5rem;
        border: 0.5rem solid #f6f6f6;
      }
    }
  }

  .info {
    width: 100%;
    margin-top: 2rem;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;

    span {
      margin-top: 1rem;
      color: #6D6D6D;
      font-size: 1rem;
    }

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      color: #555555;
    }

    .logout{
      margin-top: 2rem;
      width: 100%;
      display: flex;
      
      button {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 1rem;
        }
        
        &:hover {
          background-color: red;
        }
      }
    }
  }
`;