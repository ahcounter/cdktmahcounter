import Speakergrid from "./components/Speakergrid";


const speakers = [
  {
    name: "AA",
    role: "R1",
    fillerwords: [
      {
        word: "Umm",
        count: 1,
      },
      {
        word: "Ahh",
        count: 1,
      },
      {
        word: "So",
        count: 1,
      },
      {
        word: "Umm",
        count: 1,
      },
      {
        word: "Ahh",
        count: 1,
      },
      {
        word: "So",
        count: 1,
      },   {
        word: "Umm",
        count: 1,
      },
      {
        word: "Ahh",
        count: 1,
      },
      {
        word: "So",
        count: 1,
      },   {
        word: "Umm",
        count: 1,
      },
      {
        word: "Ahh",
        count: 1,
      },
      {
        word: "So",
        count: 1,
      },   {
        word: "Umm",
        count: 1,
      },
      {
        word: "Ahh",
        count: 1,
      },
      {
        word: "So",
        count: 1,
      },
    ],
  },
  {
    name: "AA",
    role: "R1",
    fillerwords: [
      {
        word: "Umm",
        count: 1,
      },
      {
        word: "Ahh",
        count: 1,
      },
      {
        word: "So",
        count: 1,
      },
    ],
  },
  {
    name: "AA",
    role: "R1",
    fillerwords: [
      {
        word: "Umm",
        count: 1,
      },
      {
        word: "Ahh",
        count: 1,
      },
      {
        word: "So",
        count: 1,
      },
    ],
  },
];

function App() {
  return (
    <div>
      <h1>Title 1</h1>
      <Speakergrid speakers={speakers} />
    </div>
  );
}

export default App;
