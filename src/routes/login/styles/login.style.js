import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.5rem;
`;

export const FormWrapper = styled.div`
  width: 80%;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 1.25rem;
  padding: 0 2rem;
  background-color: rgba(235, 235, 235, 0.5);
  border: none;
  border-radius: 0.5rem;
  &:focus {
    outline-color: var(--primary-color);
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
  background-color: var(--primary-color);
  border-radius: 0.375rem;
  color: white;
  font-size: 1.125rem;
  letter-spacing: 0.05em;
  &:focus {
    outline-color: var(--primary-color);
  }
  &:disabled {
    background-color: rgba(77, 134, 156, 0.8);
  }
`;

export const SignupHeader = styled.div`
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
`;

export const SignupButton = styled.button`
  width: 100%;
  height: 3.5rem;
  letter-spacing: 0.05em;
`;
