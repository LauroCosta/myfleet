import styled from 'styled-components';

export const Container = styled.div`

  height: 5rem;
  background-color:  #ffffff;
  border-radius: 0.75rem;
  padding: 0.75rem ;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  .price {

    font-size: 1.5rem;
    color: #555555;
  }

  .info {
    
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1{
      font-size: 1.25rem;
      color: #555555;
    }

    h2, strong {
      font-size: 1rem;
      font-weight: 400;
      color:#555555;
    }

  }

`;