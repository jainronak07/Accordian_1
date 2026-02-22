import "./styles.css";
import ACCORDION_DATA from "./data.json";
import AccordianItem from "./accordianItem";
import { useState } from "react";
export default function App() {
  const [isOpen, setIsopen] = useState(1);
  return (
    <div className="App">
      <h1>Accordian</h1>
      <div>
        {ACCORDION_DATA.map((item) => (
          <AccordianItem
            key={item.id}
            title={item.title}
            id={item.id}
            body={item.content}
            isOpen={isOpen}
            setIsopen={setIsopen}
          />
        ))}
      </div>
    </div>
  );
}
