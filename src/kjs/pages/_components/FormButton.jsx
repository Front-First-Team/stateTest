import styled from "styled-components"


const FormButton = ({children}) => {
    return <Button><h3>{children}</h3></Button>
}
export default FormButton

const Button = styled.button`
    width: 100%;
    aspect-ratio: 8/1;
    border-radius: 6px;
    background-color: #e0e0e0;
    &:hover{
        background-color: #999;
        color: white;
    }
`