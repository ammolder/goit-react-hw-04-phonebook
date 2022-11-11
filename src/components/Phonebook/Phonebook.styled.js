import styled from 'styled-components';

export const Form = styled.form`
  display: inline-block;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  color: #f441a5;
  display: grid;
  place-items: center;
`;

export const Input = styled.input`
  color: ${p => p.theme.colors.title};
  margin-bottom: 5px;
  border: 1px solid ${p => p.theme.colors.blue};
  border-radius: 4px;
  width: 22ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  @keyframes typing {
    from {
      width: 0;
    }
  }
`;

export const Button = styled.button`
  text-decoration: none;
  position: absolute;
  border: none;
  font-size: 14px;
  font-family: inherit;
  color: #fff;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
`;
