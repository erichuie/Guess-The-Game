import { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";

function GuessGame() {
  const [gameImage, setGameImage] = useState(
    {
      "images": [],
    }
  );

  async function getGame() {
    const response = await fetch("http://localhost:5000/new-game");
    const gameResults = await response.json();
    console.log("test output of api request", gameResults);
    setGameImage(gameResults);
  }


  useEffect(function fetchAndSetGameImage() {
    console.log("get image of a game to guess on first render");
    getGame();
  }, []);

  if (gameImage["images"].length === 0) return <LoadingSpinner />;

  return (
    <div>
      {gameImage["images"].map((image, index) =>
        <img key={index} src={image} alt="no image" width="500" height="600" />
      )}
    </div>
  );
}

export default GuessGame;