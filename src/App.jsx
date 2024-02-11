import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StoryBanner from "./components/StoryBanner";
import HistoryBanner from "./components/HistoryBanner";
import CharactersBanner from "./components/CharactersBanner";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <StoryBanner />
      <HistoryBanner />
      <CharactersBanner />
    </>
  );
}

export default App;
