import styled from "styled-components"
import { flexAlignCenter, flexCenter } from "../_common"


const OneReview = ({data}) => {

    return <S.ReviewBox>
        <S.UserImage src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
        <S.ReviewText>
            <div>
                <div>{data.reviewer}</div>
                <small>{data.review}</small>
            </div>
            <div>{data.rating}</div>
        </S.ReviewText>
    </S.ReviewBox>
}
export default OneReview


const ReviewBox = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 8px;
    background-color: #e0e0e0;
    margin-bottom: 14px;
    ${flexAlignCenter}
    justify-content: space-between;
`
const UserImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 16px;
`
const ReviewText = styled.div`
    margin: 16px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const S = {
    ReviewBox,
    UserImage,
    ReviewText
}