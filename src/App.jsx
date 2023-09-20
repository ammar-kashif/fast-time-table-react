import "@picocss/pico/css/pico.css";
import { useState } from "react";
import timetable from "./assets/timetable.json";
// import { gapi } from "gapi-script";

function App() {
//     const calendarID = process.env.REACT_APP_CALENDAR_ID;
//     const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
//     const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

    const options = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    const [dep, setDep] = useState("CS");
    const [batch, setBatch] = useState("2022");
    const [section, setSection] = useState("A");
    const [rows, setRows] = useState([]);

    const handleClick = () => {
        setRows([]);
        //just console logging the data
        timetable.forEach((course) => {
            if (
                course.Department === dep &&
                course.Batch === batch &&
                course.Section.includes(section)
            ) {
                let currRow = {
                    Day: course.Day,
                    Room: course.Room,
                    Subject: course.Subject,
                    Timings: course.Timings,
                };

                setRows((rows) => [...rows, currRow]);
            }
        });
    };

    return (
        <main className="container">
            {/* Heading */}
            <div className="headings">
                <h1>Fast Time Table 📆</h1>
                <h2>Easily generate your semester schedule!</h2>
            </div>

            {/* Input Section */}
            <div className="grid">
                {/* Select Department */}
                <label htmlFor="dep">
                    Select Department
                    <select
                        id="dep"
                        value={dep}
                        onChange={(e) => {
                            setDep(e.target.value);
                        }}
                    >
                        <option value="CS">Computer Science</option>
                        <option value="DS">Data Science</option>
                        <option value="AI">Artificial Intelligence</option>
                        <option value="SE">Software Engineering</option>
                        <option value="CY">Cyber Security</option>
                    </select>
                </label>

                {/* Select Batch */}
                <label htmlFor="batch">
                    Select Batch
                    <select
                        id="batch"
                        value={batch}
                        onChange={(e) => {
                            setBatch(e.target.value);
                        }}
                    >
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </label>

                {/* Select Section */}
                <label htmlFor="section">
                    Select Section
                    <select
                        id="section"
                        value={section}
                        onChange={(e) => {
                            setSection(e.target.value);
                        }}
                    >
                        {options.map((option, index) => {
                            return (
                                <option value={option} key={index}>
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                </label>
                {/* Submit Button */}
            </div>

            <button
                id="button"
                onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                }}
            >
                Submit
            </button>

            <br></br>

            {/* Table */}
            <table id="table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Room</th>
                        <th>Subject</th>
                        <th>Timings</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row.Day}</td>
                                <td>{row.Room}</td>
                                <td>{row.Subject}</td>
                                <td>{row.Timings}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </main>
    );
}

export default App;
