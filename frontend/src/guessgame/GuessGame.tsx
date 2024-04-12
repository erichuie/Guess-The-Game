import { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";

function GuessGame() {
  const [gameImage, setGameImage] = useState(
    {
      "images": [""],
    }
  );

  const [currImgIdx, setCurrImgIdx] = useState(0);

  let total = gameImage["images"].length;
  console.log("total", total);
  const hideLeftArrow = currImgIdx === 0 ? "hidden" : "";
  const hideRightArrow = currImgIdx === total - 1 ? "hidden" : "";

  async function getGame() {
    const response = await fetch("http://localhost:5000/new-game");
    const gameResults = await response.json();
    console.log("test output of api request", gameResults);
    setGameImage(gameResults);
    // setGameImage({
    //   "images": ["/assets/images/testImg.jpg"]
    // });
  }


  useEffect(function fetchAndSetGameImage() {
    console.log("get image of a game to guess on first render");
    getGame();
  }, []);

  //Increments currImgIdx state by 1
  function goForward() {
    if(currImgIdx < gameImage["images"].length - 1) setCurrImgIdx(currImgIdx + 1);
  }

  //Decrements currImgIdx state by 1
  function goBackward(){
    if(currImgIdx > 0) setCurrImgIdx(currImgIdx - 1);
  }

  if (gameImage["images"].length === 0) return <LoadingSpinner />;


  return (
    <div>
      <i
        className={`bi bi-arrow-left-circle ${hideLeftArrow}`}
        onClick={goBackward}
      />

      {/* {gameImage["images"].map((image, index) =>
        <img key={index} src={image} alt="no image" width="500" height="600" />
      )} */}
      <img src={gameImage["images"][currImgIdx]} alt="no image" width="600" height="600" />

      <i
        className={`bi bi-arrow-right-circle ${hideRightArrow}`}
        onClick={goForward}
      />
    </div>
  );
}

export default GuessGame;