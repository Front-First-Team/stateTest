import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "./components/product";
import productList from "../__mock__/products.json";

function State3() {

  /*
    문제 3.
    심화문제 입니다
    
    아래는 가상의 커머스 사이트 mock data입니다

    요구 사항

    1. 구매후기 및 상제를 제외한 데이터의 모든 정보는 화면에 노출되어야 합니다.  -->  완료
        단, 가격표는 3자리마다 ,를 작성해야합니다.

    2. 해당 상품을 클릭하면 상세 페이지로 이동합니다.  -->  완료
    
    3.
      상세페이지 주소에는 클릭한 상품의 상품번호가 노출되어야 합니다  -->  완료
      해당 router (주소설정) 은 제가 모두 app.js에 해두었습니다

      ex) /state/detail/301389

      해당 상품번호를 주소에서 부터 받아와야합니다.  -->  완료

      받아온 데이터를 토대로
      useEffect를 활용하여 products 데이터에서
      올바른 데이터를 찾아내어  "해당 데이터만 따로 state로 관리"  합니다  -->  완료

      * 주의
        본래 로직이라한다면 주소의 상품번호를 백엔드에게 전송하여 데이터를 받아오는 로직이었을겁니다
        그러나 백엔드가 없기에 최대한 유사하게 페이지를 구사해보았습니다

      상세페이지는 pages/Detail.js이며

      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은 미리 콘솔에 찍어두었습니다.   -->  완료
      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요

    4.  상세 페이지에서는 페이지의 상세 내용을 확인할 수 있으며
        구매평을 추가할 수 있습니다 (수정 및 삭제는 state2에서 풀이하였으므로 구현하지 않아도 괜찮습니다)
  */

  // console.log(productList);

  const navigate = useNavigate();

  const onNavigateDetailPage = (productNum) => {
    navigate(`/detail/${productNum}`);
  };

  return (
    <>
      <h1>문제3</h1>
      <h2>상품 목록</h2>
      <ul>

        {productList.products.map((product) => <ProductCard
          onNavigate={onNavigateDetailPage} key={product.productNumber} product={product}
        />)}

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
