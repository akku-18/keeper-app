import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Note from "./components/note/Note";
import notes from "./notes";


function App() {
  return (
    <div className="App">
      <Header />

      {notes.map(cards => (
        <Note
          key = {cards.key}
          title = {cards.title}
          content = {cards.content}
        />
      ))}

      {/* <Note
        title="Delegation"
        content="Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
       /> */}
      <Footer />
    </div>
  );
}
  
export default App;
