import { Hero, HomeTitle, Description } from './Home.styled.js';

const Home = () => {
  return (
    <Hero>
      <HomeTitle>Phonebook</HomeTitle>
      <Description>
        App for you
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Description>
    </Hero>
  );
};

export default Home;
