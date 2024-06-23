import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import { useEffect, useState } from "react";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(null); // 상품 정보를 상태로 관리합니다.

  useEffect(() => {
    // 페이지가 로드될 때 실행되는 부수 효과 함수입니다.
    // params.productNumber를 기반으로 해당 상품을 productList에서 찾습니다.
    const foundProduct = productList.products.find(
      (p) => p.productNumber === params.productNumber
    );

    if (!foundProduct) {
      // 만약 해당 상품 번호의 상품이 없다면, "/state" 경로로 이동합니다.
      navigate("/state");
    } else {
      // 상품을 찾았다면, 해당 상품 정보를 상태에 설정합니다.
      setProduct(foundProduct);
    }
  }, [params.productNumber, navigate]); 
  // params.productNumber 또는 navigate가 변경될 때마다 실행됩니다.

  if (!product) {
    // 상품 정보가 로드되지 않았을 경우, 아무것도 렌더링하지 않고 null을 반환합니다.
    return null;
  }

  return (
    <div>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
     */}
      <h2>상세페이지</h2>
      <p>상세 정보: {product.productDetail.productDetailInfo}</p>
      
      <h3>구매평</h3>
      {/* 상품의 리뷰 정보를 매핑하여 Review 컴포넌트를 렌더링합니다. */}
      {product.Review.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
}

// Review 컴포넌트 정의
function Review({ review }) {
  return (
    <div>
      <p>리뷰어: {review.reviewer}</p>
      <p>리뷰 내용: {review.review}</p>
      <p>평점: {review.rating}</p>
    </div>
  );
}

export default DetailPage;
