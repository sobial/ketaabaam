import classes from "./Comment.module.css";
import avatar from "../avatar.jpeg";
import ReactStars from "react-rating-stars-component";

const Comment = () => {
  return (
    <div className={classes.comment}>
      <div className={classes.commentHead}>
        <div className={classes.avatar}>
          <img className={classes.avatar} src={avatar}></img>
        </div>
        <div className={classes.nameBox}>
          <div className={classes.name}>جاناتان جانی زاده</div>
          <div className={classes.date}>22/4/2</div>
        </div>
        <div className={classes.rate}>
          <ReactStars
            count={5}
            size={18}
            activeColor="#ffd700"
            value={3.7}
            isHalf={true}
            key="rate"
          />
        </div>
      </div>
      <div className={classes.commentBody}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان{" "}
      </div>
    </div>
  );
};
export default Comment;
