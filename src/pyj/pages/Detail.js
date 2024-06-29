import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import { useEffect, useState } from "react";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(null); // 상품 정보를 상태로 관리합니다.
  const [newReview, setNewReview] = useState({ reviewer: "", review: "", rating: 1 }); // 새 리뷰 정보를 상태로 관리합니다.

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

  const handleInputChange = (e) => {
    // 입력 필드의 값이 변경될 때 호출되는 함수입니다.
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleAddReview = () => {
    // "리뷰 추가" 버튼이 클릭될 때 호출되는 함수입니다.
    // 기존 리뷰 배열에 새 리뷰를 추가합니다.
    setProduct((prevProduct) => ({
      ...prevProduct,
      Review: [...prevProduct.Review, newReview],
    }));
    // 새 리뷰 폼을 초기화합니다.
    setNewReview({ reviewer: "", review: "", rating: 1 });
  };

  if (!product) {
    // 상품 정보가 로드되지 않았을 경우, 아무것도 렌더링하지 않고 null을 반환합니다.
    return null;
  }

  return (
    <div>
      <h2>상세페이지</h2>
      <p>상세 정보: {product.productDetail.productDetailInfo}</p>
      
      <h3>구매평</h3>
      {/* 상품의 리뷰 정보를 매핑하여 Review 컴포넌트를 렌더링합니다. */}
      {product.Review.map((review, index) => (
        <Review key={index} review={review} />
      ))}

      <h3>리뷰 추가</h3>
      <div>
        {/* 새 리뷰를 입력할 수 있는 폼입니다. */}
        <input
          type="text"
          name="reviewer"
          value={newReview.reviewer}
          onChange={handleInputChange}
          placeholder="리뷰어 이름"
        />
        <input
          type="text"
          name="review"
          value={newReview.review}
          onChange={handleInputChange}
          placeholder="리뷰 내용"
        />
        <input
          type="number"
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
          min="1"
          max="5"
        />
        <button onClick={handleAddReview}>리뷰 추가</button>
      </div>
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
