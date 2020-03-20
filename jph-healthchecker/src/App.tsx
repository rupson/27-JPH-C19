import React from "react";
import "./App.css";

function App() {
    const [robCount, setRobCount] = React.useState<number>(0);
    const [robLogging, setRobLogging] = React.useState<boolean>(false);
    const [elCount, setElCount] = React.useState(0);
    const [elLogging, setElLogging] = React.useState(false);
    const [elapsed, setElapsed] = React.useState(0);

    const mySubmitFunc = () => {
        setRobLogging(false);
        setRobCount(robCount + 1);
        console.log("my butt");
    };

    const IncidentLogger = () => (
        <form onSubmit={() => mySubmitFunc()}>
            <input type="text" placeholder="add note" />
            <button type="submit">log incident</button>
        </form>
    );

    return (
        <div className="App">
            <header className="App-header">
                <div className="title">
                    🦠Flat 27 John Pritchard House Healthchecker 🦠
                </div>
                <hr />
                <div>
                    <h2>Since last incident: {elapsed}</h2>
                </div>
                <div className="divider">
                    <div className="dividerTitle">
                        <h1>Rob: {robCount}</h1>
                        <button
                            className="addIncidentButton"
                            onClick={() => setRobLogging(true)}
                        >
                            +
                        </button>
                    </div>
                    {robLogging && <IncidentLogger />}
                    <div className="dividerTitle">
                        <h1>Ellie</h1>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
