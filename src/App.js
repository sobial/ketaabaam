import classes from "./App.module.css";
import Header from "./components/Header";
import OutLine from "./components/Outline";
import BookDetail from "./pages/BookDetail";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <BookDetail />
    </div>
  );
}

export default App;
