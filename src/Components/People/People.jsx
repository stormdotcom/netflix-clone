
import "./People.css";
import EachPerson from "./EachPerson";

// import axios from "axios" 
let position = []
for (let i=0; i<=3; i++) {
    let x = Math.floor(Math.random() * 32);
    console.log(x)
    position.push(x)
}

let id = [976, 934, 6968, 2963, 74568, 500, 71580, 16483, 13240, 64, 117642, 192, 16828, 17647, 90633, 1245, 6384, 18918, 1100, 3896, 1813, 2524, 10859, 85, 6193, 109513, 3223, 287, 3894, 15217, 1136406,]
let person1 = id[position[1]]
let person2 = id[position[2]]
let person3 = id[position[3]]
function People(props) {
  return (
    <div className="news-row">
      <h3 className="news-title fw-bolder pb-1">
        {" "}{props.title}{" "}
      </h3>
      <h4 className="fw-bolder "> Persons of the week</h4>
      <div className="row d-flex align-items-center justify-content-center">
                    <EachPerson id={person1} /> 
                    <EachPerson id={person2} /> 
                    <EachPerson id={person3} /> 
      </div>
    </div>
  );
}

export default People;
