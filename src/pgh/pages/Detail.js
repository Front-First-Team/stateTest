import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";


function DetailPage() {
  const params = useParams();
  console.log(params.productNumber);
  // useParams를 통해 가져온 현재 제품 번호
  const navigate = useNavigate();
  const [product, setproduct] = useState();

  useEffect(() => {
    const foundProduct = productList.products.find(
      (product) => params.productNumber === product.productNumber
    );
    //product.productNumber 각 객체의 고유 번호와 Url로 추출된 현재 상품 번호를 비교하여 같은 것이있다면foundProduct  에 저장할것이다.
    if (foundProduct) {
      setproduct(foundProduct);
    } else {
      navigate("/");
    }
    // 만약 조건에 맞는 foundProduct 가 있다면 setproduct상태에 foundProduct로 업데이트 할것이다 
    // -> 그게 아니라면 다시 /페이지로 돌아간다
  }, [params.productNumber]);
  //(useEffect로 의존성 배열에 값이 변경될때마다 재실행된다.




  if (!product) {
    return;
  }
  // 이걸 해주는 이유는 product위에 상태를 설정할때 초기값이 없기때문에 undefiend 가발생한다 그러므로 
  // find 메서드를 사용하여 일치하는 제품을 찾고, setProduct를 호출하여 product 상태를 업데이트하기 전까지 화면을 보일수있게 해준다.
  // 즉 product 상태가 업데이트되기 전까지 화면에 오류가 발생하지 않도록 해준다.

  const onPressNewReview = (event) => {
    //useref를 통해 인풋값을 참조하는 방식에서 event.target을 사용하여 폼의 입력값을 가져오는 방식을 택했다.
    event.preventDefault();
    const Detaildata = { ...product };
    // 전개연산자를 통해 product기존 객체 데이터를 복사하여 Detaildata에 담는다.
    // 이렇게 하면 기존 상태를 직접 수정하지 않고, 새로운 상태를 생성할 수 있다.
    const { reviewer, review, rating } = event.target;
    //event.target에서 폼의 입력 요소들을 구조분해할당을 통해 가져온다. event.target= 폼 요소
    // event.target 내의 각 입력 필드를 변수에 할당한것이기떄문에 이 변수들{ reviewer, review, rating }은 input을 담고있다고 생각한다 .

    const newReview = {
      //새로운 리뷰
      // 위에서 구조분해 할당을 통해 event.target 입력필드의 요소에 접근했으므로 value에만 접근한다
      reviewer: reviewer.value,
      review: review.value,
      rating: rating.value,
    };
    Detaildata.Review = [...Detaildata.Review, newReview];
    // tempDetail.Review 배열에 새로운 리뷰를 추가한다. 전개연산자로 기존 리뷰 배열뒤에 새로운 리뷰를 추가한다.

    // 입력필드 초기화
    setproduct(Detaildata);
    reviewer.value = "";
    review.value = "";
    rating.value = "";
  };

  //---

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>상품번호: {product.productNumber}</p>
      <p>가격: {product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
      <p>사이즈: {product.productSize}</p>
      <p>평점: {product.productRating}</p>
      <p>리뷰: {product.productReview}</p>
      <h2>상세 정보</h2>
      <p>{product.productDetail.productDetailInfo}</p>
      <h2>구매 후기</h2>

      {product.Review.map((review, index) => (
        <div key={index}>
          <div>작성자: {review.reviewer}</div>
          <div>리뷰: {review.review}</div>
          <div>평점: {review.rating}</div>
        </div>
      ))}
      <form onSubmit={onPressNewReview}>
        <input name='reviewer' placeholder="작성자"></input>
        <input name='review' placeholder="리뷰"></input>
        <input type='number' name='rating' placeholder="평점" min='1' max='5'></input>
        <button>추가</button>
      </form>
    </div >
  );
}
export default DetailPage;