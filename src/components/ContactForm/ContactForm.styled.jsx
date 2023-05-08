import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  gap: 8px;
  align-items: baseline;
  justify-content: space-between;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
`;

export const Button = styled.button`
  border-radius: 8px;
  cursor: pointer;
  width: 100px;
  padding: 5px;
  margin-bottom: 20px;
`;