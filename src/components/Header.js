import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.leftContainer}>search</div>
      <div className={classes.centerContainer}>title</div>
      <div className={classes.rightContainer}>avatar/menue</div>
    </div>
  );
};
export default Header;
