import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import styled from "styled-components";
import { flexCenter } from "./_common";
import FormInput from "./_components/FormInput";
import FormButton from "./_components/FormButton";
import OneReview from "./_components/oneReview";


function DetailPage() {

  const navigation = useNavigate()
  const params = useParams();
  // console.log(params.productNumber); //--> 주소 (productNumber) 가 찍힌다

  //---------------------------------------------------------------------------------------------------------------------
  // 상태 생성 :
  //-->  초기값이 비어있어 처음에는 undefined 가 찍히기 때문에, return 에 조건을 넣어줬다
  const [productDetail, setProductDetail] = useState()

  //---------------------------------------------------------------------------------------------------------------------
  // 주소 (상품 번호) 에 따라 productDetail 에 들어오는 데이터가 달라지는 요직 :
  useEffect(() => {
    if(!params.productNumber) return navigation("/") //--> 없는 주소를 입력하면 메인페이지로 돌아간다
    const productTarget = productList.products.find((product) => params.productNumber === product.productNumber)
    setProductDetail(productTarget)
  }, [params.productNumber]) //--> 주소가 바뀔 때마다 재실행한다

  //---------------------------------------------------------------------------------------------------------------------
  // 리뷰 작성 :
  const onPressNewReview = (event) => {
    event.preventDefault()
    const tempDetail = {...productDetail}
    const {reviewer, review, rating} = event.target

    if(!reviewer.value.trim() || !review.value.trim() || !rating.value.trim()) return alert('입력창 모두 작성해주세요')
    if(rating.value < 0 || rating.value > 5) return alert('평점은 0~5 점으로 입력해주세요'), rating.value = ""

    const newReview = {
      reviewer: reviewer.value,
      review: review.value,
      rating: rating.value
    }
    tempDetail.Review = [
      ...tempDetail.Review,
      newReview
    ]

    setProductDetail(tempDetail)
    reviewer.value = ""
    review.value = ""
    rating.value = ""
  }

  //---------------------------------------------------------------------------------------------------------------------

  // 처음 페이지가 이동 됐을 때, productDetail 의 기본 값은 undefined 이기에 조건문으로 undefined 가 아니면 반환하게끔 만들어준 것이다
  if(productDetail !== undefined) return (
      <S.Container>

        {/*-------------------------------- 상품 --------------------------------*/}

        <S.ProductContainer>
          <S.ProductImage><h1>상품 이미지</h1></S.ProductImage>
          <S.ProductTextBox>
            <h3>{productDetail.productName}</h3>
            <p>상품번호: {productDetail.productNumber}</p>
            <p>가격: {productDetail.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <p>사이즈: {productDetail.productSize}</p>
            <p>평점: {productDetail.productRating}</p>
            <p>리뷰: {productDetail.Review.length}</p>
          </S.ProductTextBox>
        </S.ProductContainer>

        {/*-------------------------------- 리뷰 --------------------------------*/}

        <S.ReviewContainer>
          
          <S.ReviewInputBox onSubmit={onPressNewReview}>
            <S.ReviewText><h1>Review</h1></S.ReviewText>
            <FormInput name={'reviewer'} placeholder={'이름을 입력해주세요'}/>
            <FormInput name={'rating'} type={'number'} placeholder={'평점을 입력해주세요 (0~5)'}/>
            <textarea name="review" placeholder="후기를 작성해주세요"></textarea>
            <FormButton>리뷰 작성</FormButton>
          </S.ReviewInputBox>

          <S.ReviewCommentBox>

            {productDetail.Review.map((data, i) => <OneReview
              key={i} data={data}
            />)}

          </S.ReviewCommentBox>

        </S.ReviewContainer>

      </S.Container>
  );
}
export default DetailPage;


//---------------------------------------------------------------------------------------------------------------------
// 스타일 컴포넌트 :
const Container = styled.div`
  margin: 60px auto;
  width: 1000px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
`
//----------------------------------------------------
// 상품 :
const ProductContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 47%;
  height: 600px;
  padding: 16px;
  background-color: #e0e0e0;
  border-radius: 6px;
`
const ProductImage = styled.div`
  ${flexCenter}
  width: 100%;
  height: 300px;
  background-color: #999;
  border-radius: 6px;
  color: white;
  margin-bottom: 16px;
`
const ProductTextBox = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 6px;
`

//----------------------------------------------------
// 리뷰 :
const ReviewContainer = styled.div`
  /* ${flexCenter} */
  /* flex-direction: column; */
  width: 47%;
`
const ReviewText = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100px;
  background-color: #999;
  border-radius: 6px;
  color: white;
  margin-bottom: 16px;
`
const ReviewInputBox = styled.form`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  padding: 16px;
  background-color: #e0e0e0;
  border-radius: 6px;
  margin-bottom: 16px;
  &>textarea{
    width: 92%;
    height: 100px;
    margin-bottom: 16px;
    border-radius: 6px;
    border: none;
    padding: 16px;
  }
`
const ReviewCommentBox = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 107%;
  border-radius: 6px;
`

//----------------------------------------------------
// 스타일 모음집 :
const S = {
  Container,

  // 상품 컴포넌트 :
  ProductContainer,
  ProductImage,
  ProductTextBox,

  // 리뷰 컴포넌트 :
  ReviewContainer,
  ReviewText,
  ReviewInputBox,
  ReviewCommentBox
}
