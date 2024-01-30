import { container } from "./write_review.css" 

const WriteReview = () => {
  return <div>
    <div className={container}>
      <label htmlFor="name">메뉴명</label>
      <input id="name" type="text" />
    </div>
    <div className={container}>
      <label htmlFor="review">리뷰</label>
      <textarea id="review" />
    </div>
    <div className={container}>
      <label htmlFor="rate">평점</label>
      <input id="rate" min="1" max="5" type="number"></input>
    </div>
  </div>
}

export default WriteReview;