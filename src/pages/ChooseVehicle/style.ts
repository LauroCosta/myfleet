import styled from 'styled-components';

export const Content= styled.div`
  padding: 2rem;


  input {
    width: 100%;
    font-size: 1.25rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    height: 2.5rem;
    font-weight: bold;
    padding: 0.5rem;

  }

  > h1 {
    font-size: 1.75rem;
    text-align: center;
    font-weight: 400;
    color: #555555;
    margin: 5rem 0;
  }

  footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2rem;
  
    display: flex;
    justify-content: center;

  }
`;