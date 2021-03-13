import styled from "styled-components/macro";
import NavList from "../components/NavList";

const Content = styled.div `
  img {
    max-width: 100%;
  }
  h2 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.1rem;
    margin: 10px 0px 5px 0px;
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
  p {
    margin: 5px 0px 20px 0px;
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
  a {
    text-decoration: none;
    color: #d76b65;
      &:hover {
        text-decoration: underline;
      }
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const Links = styled.div `
  display: flex;
  flex-direction: column;
   a {
     margin-bottom: 5px;
     @media screen and (min-width: 768px) {
      margin-bottom: 0px;
     }
   }
`;


function Portfolio() {
  return (
    <Content>
      <h2>Portfolio Content, yo</h2>
      <NavList />
    </Content>
  );
}

export default Portfolio;
