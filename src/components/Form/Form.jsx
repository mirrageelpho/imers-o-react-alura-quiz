import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

Form.Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    border-radius: ${({ theme})=>theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 16px;
    border: 1px solid ${({ theme})=>theme.colors.secondary};

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color:${({ theme }) => theme.colors.contrastText};
        opacity: 1; /* Firefox */
    }
`;

Form.Button = styled.button`
    margin: 10px 0;
    padding: 10px;
    border-radius: ${({ theme})=>theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 16px;
    border: 1px solid ${({ theme})=>theme.colors.secondary};
`;
export default Form