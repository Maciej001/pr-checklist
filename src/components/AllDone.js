import React from "react";
import { AllDoneContainer } from "./containers";

const gifs = [
  "https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif",
  "https://media.giphy.com/media/ve3jGIxEfDkE8/giphy.gif",
  "https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif",
  "https://media.giphy.com/media/37nRXpCEP9H1f1WVrb/giphy.gif",
  "https://media.giphy.com/media/l4HodBpDmoMA5p9bG/giphy.gif",
  "https://media.giphy.com/media/YRuFixSNWFVcXaxpmX/giphy.gif",
  "https://media.giphy.com/media/P0RWkdsRpK7ss/giphy.gif",
  "https://media.giphy.com/media/yyZRSvISN1vvW/giphy.gif",
  "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif",
  "https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif",
  "https://media.giphy.com/media/9PH9saRidMXIs/giphy.gif",
  "https://media.giphy.com/media/bvcXhfz2e9y7K/giphy.gif",
  "https://media.giphy.com/media/L7SFRs4f2hIzu/giphy.gif",
  "https://media.giphy.com/media/XE1cLqA94WFTOWqfn1/giphy.gif"
];

const AllDone = () => {
  const imageUrl = gifs[Math.floor(Math.random() * gifs.length)];
  return (
    <AllDoneContainer>
      <img src={imageUrl} />
    </AllDoneContainer>
  );
};

export default AllDone;
