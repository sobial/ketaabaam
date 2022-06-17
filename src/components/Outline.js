import classes from "./Outline.module.css";
import pic from "../download.jpeg";
import ReactStars from "react-rating-stars-component";

const Outline = () => {
  return (
    <div className={classes.outlineContainer}>
      <div className={classes.outlineText}>
        <div className={classes.titleText}>بازی تاج و تخت</div>
        <div className={classes.writerText}>جرج ار ار مارتین</div>
        <div className={classes.pubText}>نشر چشمه</div>
        <div className={classes.pubText}>مترجم اصغر اصغریان</div>
        <div className={classes.score}>
          <ReactStars
            color={"white"}
            count={5}
            size={18}
            activeColor="#ffd700"
            value={3.7}
            isHalf={true}
            key="rate"
          />
          <div className={classes.rate}>3.7/21414</div>
        </div>
        <button className={classes.readButton}>خوانده ام</button>
      </div>
      <div className={classes.outlinePic}>
        <img className={classes.bookImg} src={pic} />
      </div>
    </div>
  );
};

export default Outline;
