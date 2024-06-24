import styled from "styled-components";

function ProductCard({ onNavigate, product }) {

  return (
    <S.Item onClick={() => onNavigate(product.productNumber)}>

      {/* 예시 데이터 */}
      {/* <h4>구멍난 양말</h4>
      <p>상품번호: 302012</p>
      <p>가격: 3000원</p>
      <p>사이즈: X, M, L</p>
      <p>평점: 4.5</p>
      <p>리뷰: 14</p> */}

      {/*------------------------------------------------------*/}

      <h4>{product.productName}</h4>
      <p>상품번호: {product.productNumber}</p>
      <p>가격: {product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
      <p>사이즈: {product.productSize}</p>
      <p>평점: {product.productRating}</p>
      <p>리뷰: {product.productReview}</p>

    </S.Item>
  );
}
export default ProductCard;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};
