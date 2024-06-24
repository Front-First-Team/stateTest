import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "./components/product";
import productList from "../__mock__/products.json";

function State3() {
  console.log(productList);

  const navigate = useNavigate();

  const onNavigateDetailPage = () => {
    navigate(`/detail/1`);
  };

  return (
    <>
      <h1>문제3</h1>
      <h2>상품 목록</h2>
      <ul>
        {/* list */}
        {/* 예시 데이터 */}
        <ProductCard onNavigate={onNavigateDetailPage} />
      </ul>
    </>
  );
}
export default State3;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};
