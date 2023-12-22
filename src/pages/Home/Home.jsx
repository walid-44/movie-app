import { Container } from "react-bootstrap";
import Cards from "../../components/allCards/Cards";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <>
      <Container>
        <Banner />
        <Cards />
      </Container>
    </>
  );
};

export default Home;
