// Tutorial.jsx
export default function TutorialBox() {
  return (
    <div className="outside_wrapper">
      <div className="minorWrapper">
        <div className="tutorialBox" style={{ background: "#4caf50" }}>
          <p>Correct</p>
        </div>

        <div className="tutorialBox" style={{ background: "#ffc107" }}>
          <p>Partial</p>
        </div>

        <div className="tutorialBox" style={{ background: "#f44336" }}>
          <p>Wrong</p>
        </div>

        <div className="tutorialBox" style={{ background: "#ffc107", position: "relative" }}>
          <p style={{ zIndex: 2 }}>More</p>
          <span
            className="material-symbols-outlined"
            style={{ zIndex: 1, position: "absolute", color: "rgba(0,0,0,0.1)", fontSize: "70px" }}
          >
            arrow_upward
          </span>
        </div>

        <div className="tutorialBox" style={{ background: "#ffc107", position: "relative" }}>
          <p style={{ zIndex: 2 }}>Less</p>
          <span
            className="material-symbols-outlined"
            style={{ zIndex: 1, position: "absolute", color: "rgba(0,0,0,0.1)", fontSize: "70px" }}
          >
            arrow_downward
          </span>
        </div>
      </div>

      <p style={{ maxWidth: "500px", textAlign: "left" }}>
        Each box will tell you how close you are to find the trait:<br />
        🟩 Correct → matches exactly.<br />
        🟨 Partial → some traits overlap (like same publisher or gender).<br />
        🟥 Wrong → doesn’t match.<br />
        ⬆️ More → the hidden hero’s value is higher (e.g. year, height).<br />
        ⬇️ Less → the hidden hero’s value is lower.<br />
        Keep guessing until you find the Hero of the Day!
      </p>
    </div>
  );
}
