import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import emojis from "../data";

function createCard(emoji) {
  return (
    <Card
      key={emoji.id}
      emote={emoji.emoji}
      name={emoji.name}
      define={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <dl className="dictionary">{emojis.map(createCard)}</dl>
      <Footer />
    </div>
  );
}

export default App;
