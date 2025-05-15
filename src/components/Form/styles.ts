import styled from '@emotion/styled';


export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 16px;
  align-items: self-start;
  margin-bottom: 24px;
  font-family: Arial;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  margin: 16px 0;
  padding: 0;
  border: none;
  width: 49%;
`;

export const Label = styled.label`
  margin: 2px;
  color: #3385ee;
  font-weight: bold;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

export const CheckBoxField = styled.div`
  display: flex;
  align-items: flex-center;
  justify-content: flex-start;
  margin: 8px;
  border: none;
`;

export const ErrorText = styled.span`
  color: #ee3939;
  font-size: 12px;
  font-weight: bold;
  margin: 1px 2px;
  display: block;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  padding: 4px 11px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #145fbe;
  }
`;
