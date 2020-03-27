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
          <Title> PR Pilot 👨‍✈️</Title>
          <Subtitle>Push with confidance and stay 🧘‍ </Subtitle>

          <CheckList />
        </Container>
      </PageWrapper>
    </div>
  );
}

export default App;
