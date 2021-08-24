import styled from 'styled-components';

export const Content = styled.div`

  header {
    width: 100%;
    height: 12rem;
    background-color: #234b89;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
    padding: 1.5rem 2.5rem;

    .profile {

      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h1 {
        color: #fff;
        font-size: 1.5rem;
      }

      img {
        height: 3rem;
        border-radius: 100%;
      }
    }
  }

  > h1 {

    color: #6D6D6D;
    font-size: 1.5rem;
    margin: 1rem;
    margin-bottom: 0.5rem;
  }
  section {

    height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    overflow-y: scroll;
    &::-webkit-scrollbar {
    width: 0;            
    }
    padding: 1rem;


  }
`;