import { 
  container,
  controller,
  label,
  controller_review,
  review,
  input
} from "./write_review.css" 

const WriteReview = () => {
  return <div className={container}>
    <div className={controller}>
      <label className={label} htmlFor="store_name">가게</label>
      <input className={input} id="store_name" type="text" />
    </div>
    <div className={controller}>
      <label className={label} htmlFor="food_menu">메뉴</label>
      <input className={input} id="food_menu" type="text" />
    </div>
    <div className={controller}>
      <label className={label} htmlFor="rate">평점</label>
      <input className={input} id="rate" min="1" max="5" type="number"></input>
    </div>
    <div className={controller_review}>
      <label className={label} htmlFor="review">리뷰</label>
      <textarea className={review} id="review" />
    </div>
  </div>
}

export default WriteReview;