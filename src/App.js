import { useState } from "react";

export default function App() {
  const [isYes, setYes] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [position, setPosition] = useState("inherit");
  function handleClickYes() {
    setYes(true);
    console.log(isYes);
  }

  function handleClickNo() {
    setTop(Math.floor(Math.random() * 400));
    setLeft(Math.floor(Math.random() * 300));
    setPosition("fixed");
  }
  return (
    <>
      {!isYes ? (
        <div className="container">
          <div className="text-container">
            <h1>Let's go to church this Sunday? 🙏🏻</h1>
          </div>
          <div className="btn-container">
            <button onClick={handleClickYes}>Let's Go!</button>
            <button
              className="btn-no"
              onClick={handleClickNo}
              style={{
                position: position,
                top: top,
                left: left,
              }}
            >
              Sorry, I can't.
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>See you next Sunday! God has something good for you.</h1>
        </div>
      )}
    </>
  );
}
