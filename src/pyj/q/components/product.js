import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ProductCard({ product, onNavigate }) {

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

  const onNavigateDetailPage = () => {
    navigate(`/detail/${product.productNumber}`); // 상세 페이지로 이동하는 navigate 함수를 호출합니다.
  };


  const formattedPrice = Number(product.productPrice).toLocaleString(); 
  // 가격을 3자리마다 쉼표(,)로 구분하여 포맷팅합니다.
  return (
    <S.Item onClick={onNavigateDetailPage}>
      <h4>{product.productName}</h4>
      <p>상품번호: {product.productNumber}</p>
      <p>가격: {formattedPrice}원</p>
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