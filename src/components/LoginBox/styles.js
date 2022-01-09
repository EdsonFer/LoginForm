import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  min-height: 95vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .createAccount {
    margin-top: -1.5rem;
    color: #8330ac;
    cursor: pointer;
  }
`;

export const Header = styled.header`
  margin-top: 5rem;
  text-align: center;

  h1 {
    font-size: 4.5rem;

    @media (max-width: 720px) {
      margin-bottom: -15px;
      font-size: 2.25rem;
      line-height: 0rem;
    }
  }

  strong {
    font-size: 9rem;
    line-height: 6.5rem;

    @media (max-width: 720px) {
      font-size: 4.5rem;
      line-height: 8rem;
    }
  }
`;

export const LoginCard = styled.div`
  margin: 0 auto;
  margin-top: -50px;
  width: 264px;
  background-image: linear-gradient(
    -180deg,
    rgba(243, 242, 249, 1) 0%,
    rgba(243, 242, 249, 0.7) 100%
  );
  box-shadow: 2px 2px 4px 4px rgba(206, 173, 246, 0.4);
  border-radius: 15px;
  margin-bottom: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: -20px;
    letter-spacing: 0.2rem;

    img {
      width: 150px;
      height: 150px;
    }

    h2 {
      margin-top: -20px;
      font-size: 4rem;
      line-height: 2rem;

      @media (max-width: 720px) {
        font-size: 4rem;
        font-weight: 700;
        line-height: 6rem;
        background: -webkit-linear-gradient(
          450deg,
          rgba(183, 151, 226, 0.3) 0%,
          rgba(195, 161, 243, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    button {
      color: white;
      cursor: pointer;
      position: relative;
      width: 220px;
      padding: 1rem;
      border-radius: 3.75rem;
      font-size: 1.5rem;
      border: none;
      background-image: linear-gradient(
        -180deg,
        rgba(161, 132, 198, 0.4) 0%,
        rgba(161, 132, 198, 1) 100%
      );
      margin-bottom: 1rem;

      &:hover {
        opacity: 0.8;
      }

      &::before {
        content: "";
        display: block;
        height: 0.5rem;
        position: absolute;
        top: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        opacity: 0.2;
        background-image: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.4) 40%,
          rgba(255, 255, 255, 0.5) 100%
        );
        border-radius: 30px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      label {
        @media (max-width: 720px) {
          color: #8330ac;
        }
      }

      input {
        width: 220px;
        padding: 1rem;
        border-radius: 30px;
        outline: none;
        border: none;
        background: linear-gradient(
          2deg,
          rgba(249, 249, 249, 1) 30%,
          rgba(217, 213, 228, 1) 100%
        );
      }

      p {
        color: red;

        @media (max-width: 720px) {
          visibility: hidden;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  opacity: 0.4;
  margin-left: 2rem;

  @media (max-width: 720px) {
    margin: 0;
    text-align: center;
  }
`;
