import styled from 'styled-components';

export const FooterStyle = styled.footer`

  position: absolute;
  background-color: #f6f6f6;
  width: 100%;
  bottom: 0;
  height: 3.5rem;
  border-radius: 2rem 2rem 0 0;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: filter 0.3s;

  .active {
    filter: brightness(0.4);
  }

  a {
    &:hover{
      filter: brightness(0.8);
    }
  }
  .circleButton {
    background-color: #fe5679;
    margin-top: -2.5rem;
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 100%;
    color: #fff;
    font-size: 2rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  
}
`;
