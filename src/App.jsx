import "./App.css";

// import Watched from "./pages/Watched";
import { Route, Routes } from "react-router-dom";
// import Detail from "./pages/details/Detail";
// import MovieList from "./pages/MovieList";
// import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Home from "./pages/Home/Home";
import { Suspense, lazy } from "react";
import Spiner from "./components/spinner/Spiner";
const Home = lazy(() => import("./pages/Home/Home"));
const Watched = lazy(() => import("./pages/watched/Watched"));
const Detail = lazy(() => import("./pages/details/Detail"));
const MovieList = lazy(() => import("./pages/moveList/MovieList"));
const Search = lazy(() => import("./components/search/Search"));

function App() {
  return (
    <>
      <Header />

      <div className="bg-dark">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spiner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/movie"
            element={
              <Suspense fallback={<Spiner />}>
                <Watched />
              </Suspense>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <Suspense fallback={<Spiner />}>
                <Detail />
              </Suspense>
            }
          />
          <Route
            path="/movielist"
            element={
              <Suspense fallback={<Spiner />}>
                <MovieList />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<Spiner />}>
                <Search />
              </Suspense>
            }
          />
          <Route path="/*" element={<h1 style={{ color: "white" }}>Error</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
