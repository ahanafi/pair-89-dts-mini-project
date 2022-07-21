import { useEffect, useState } from "react";
import SingleData from "../../Components/SingleData/SingleData";
import "./Home.css";
import '../PagesStyles.css';
import { Link } from "react-router-dom";
import Carousel from '../../Components/Carousel/Carousel'
import Myloader from "react-spinners/PuffLoader";
import { getNowPlayingMovies } from "../../Config/TmdbApi";

const Home = () => {
  const [allContent, setAllContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  let [color, setColor] = useState("grey");

  const fetchMovieTmdbApi = async () => {
    try {
      const movies = await getNowPlayingMovies();
      setAllContent(movies);
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);

    fetchMovieTmdbApi();
    
    return () => {
      setAllContent();
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div style={{ marginTop: "-10px" }} className="bg__home">
            <Carousel />
          </div>
          <div className="TreadingHome3 pt-4">
            <div className="title__home">
              <div className="btn__home">
                <h6>
                  Movies On Air &#160;
                  <span style={{ paddingTop: "10px" }}>&#11166;</span>
                </h6>
              </div>
              <div className="view__more">
                <Link to="/all-movies" style={{ textDecoration: "none" }}>
                  <p>View more &#187;</p>
                </Link>
              </div>
            </div>

            <div className="ListContent2">
              {allContent &&
                allContent.map((n) => (
                  <SingleData key={n.id} {...n} mediaType="movie" />
                ))}
            </div>
          </div>
        </>
      ) : (
        <div className="major" style={{ height: "600px" }}>
          <Myloader color={color} size={60} />
        </div>
      )}
    </>
  );
};

export default Home;