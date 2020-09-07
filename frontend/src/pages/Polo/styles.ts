import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const PoloInfo = styled.section`
    margin-top: 80px;

    header {
      display: flex;
      align-items: center;

      div {
        strong {
          font-size: 26px;
          color: #3d3d4d;
        }

        p {
          font-size: 14px;
          color: #737380;
          margin-top: 4px;
        }
      }
    }

    ul {
      display: flex;
      list-style: none;
      margin-top: 40px;
      li {

        display: flex;
        flex-direction: column;
        align-items: center;

        & + li {
          margin-left: 20px;
        }

        strong {
          font-size: 26px;
          color: #3d3d4d;
        }

        span {
          font-size: 14px;
          display: block;
          margin-top: 4px;
          color: #6c6c80;
        }
      }
    }
`;

export const OrdensDeServico = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translatex(10px);
    }

    div {
      flex-grow: 1;

      strong {
        font-size: 20px;
      }
    }

    strong {
      font-size: 18px;
      color: #3d3d4d;
      margin-right: 20px;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }

    svg {
      color: #cbcbd6;
    }
  }
`;