import React from "react";
import "./App.css";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import { PageWrapper, Container } from "./components/containers";
import CheckList from "./components/CheckList";

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Container>
          <Title> 👆Look mum no bugs 🐛</Title>
          <Subtitle>PR like Pro and stay 🧘‍ </Subtitle>

          <CheckList />
        </Container>
      </PageWrapper>
    </div>
  );
}

export default App;
