import styled from "styled-components"
import { flexCenter } from "../_common"


const FormInput = ({...rest}) => {
    return <S.InputBox>
        <S.Input {...rest}/>
    </S.InputBox>
}
export default FormInput

const InputBox = styled.div`
    ${flexCenter}
    width: 100%;
    height: 48px;
    position: relative;
    margin-bottom: 16px;
`
const Input = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    padding-left: 16px;
    border: none;
`


const S = {
    InputBox,
    Input
}