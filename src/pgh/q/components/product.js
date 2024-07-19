import styled from "styled-components";

function ProductCard({ onNavigate, product }) {
  // 여기서 꼭 onClick시 onNavigate로 현재 제품의 productNumber를 보내주어야한다
  return (
    <S.Item onClick={() => onNavigate(product.productNumber)}>
      <h4>{product.productName}</h4>
      <p>상품번호: {product.productNumber}</p>
      <p>가격: {product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p>사이즈:{product.productSize}</p>
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