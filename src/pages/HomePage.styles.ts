import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../Theme';

export const HeroBanner = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  @media (min-width: 1024px) {
    justify-content: center;
    padding: 3rem 0;
  }
  @media (min-width: 1440px) {
    justify-content: center;
    padding: 4rem 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    max-width: 50%;
    align-items: flex-end;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    max-width: 17ch;
    color: gray;
    @media (min-width: 1024px) {
      padding-top: 4rem;
      font-size: 2.6rem;
    }
    @media (min-width: 1440px) {
      padding-top: 6rem;
      max-width: 21ch;
    }
  }
  span {
    color: white;
  }
`;

export const HeroImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
  img {
    max-width: 24rem;
    @media (min-width: 1440px) {
      max-width: 28rem;
    }
  }
`;

export const PlayLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  @media (min-width: 1024px) {
    margin-top: 3rem;
  }
`;

export const PlayLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  max-width: 8ch;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  span {
    margin-left: 0.5rem;
    transition: transform 0.3s ease-in-out;
  }

  :hover {
    transform: translateX(0.3rem) scale(105%);
    color: ${theme.secondary};
  }

  :hover span {
    transform: translateX(0.6rem) scale(105%);
    color: ${theme.secondary};
  }
`;

export const DescriptionSection = styled.section`
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  h3 {
    font-size: 2rem;
    margin-top: 4rem;
  }

  div {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;

    h3 {
      font-size: 4rem;
    }
    div {
      max-width: 90%;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
`;
