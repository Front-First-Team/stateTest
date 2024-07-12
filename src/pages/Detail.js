import { useParams, useLocation } from "react-router-dom";
function DetailPage() {
  // const params = useParams();
  // console.log("파람스 : ", params);

  const {
    state: {
      product: {
        productPrice,
        productName,
        productSize,
        productRating,
        productReview,
      },
    },
  } = useLocation();

  return (
    <div>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
     */}
      <div style={{ border: "1px solid black" }}>
        <p>상품이름: {productName}</p>
        <p>가격: {productPrice}원</p>
        {/*1000단위로 , 붙이기 */}
        <p>사이즈: {productSize}</p>
        <p>평점: {productRating}</p>
        <p>리뷰: {productReview}</p>
      </div>
      <div>
        {/*구매평 */}
        {/* 구매평 추가 */}
      </div>
    </div>
  );
}
export default DetailPage;
