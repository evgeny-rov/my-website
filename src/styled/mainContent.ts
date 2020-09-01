import styled from 'styled-components/macro';

export const StyledMainSection = styled.section`
  box-sizing: border-box;
  position: absolute;
  top: 15%;
  width: 50rem;
  height: 22rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'desc desc secondary'
    'projects projects secondary';
  background-color: rgba(0, 0, 0, 0.1);

  span, h1, h2 {
    text-transform: uppercase;
    font-weight: 200;
    color: #fff;
    font-size: 1.25rem;
    letter-spacing: 1px;
  }
`;

export const StyledDescription = styled.span`
  justify-self: center;
  text-align: left;
  grid-area: desc;
`;

export const StyledSkills = styled.div`
  justify-self: end;
  display: grid;
  place-items: end;
  text-align: right;
  grid-area: secondary;

  h2 {
    font-size: 0.9rem;
    margin-block-start: 0;
  }

  span {
    display: block;
    font-size: 0.87rem;
  }
`;