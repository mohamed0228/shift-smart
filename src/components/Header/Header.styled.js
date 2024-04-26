import styled from "styled-components";
export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;
export const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
`;
export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      margin-left: 1rem;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
