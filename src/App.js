import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import BmiScore from './components/BmiScore';
import BmiList from './components/BmiList';

function App() {
  const [bmi, setBmi] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");
  const [changeWeight, setChangeWeight] = useState({ weight: "", type: "" });
  const [show, setShow] = useState(false);
  const [bmiRange, setBmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" }
  });

  const onSubmit = (w, h) => {
    const b = calBmi(w, h);
    setBmi(b);
    setBmiCategory(checkCategory(b));
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(24.9, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(29.9, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(34.9, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(39.9, h) }
    }
    setBmiRange(range);
    setChangeWeight(weightChange(b, w, range));
    setShow(true);
  };

  const calBmi = (w, h) => (w / (h * h)).toFixed(2);

  const calWeight = (bmi, h) => (bmi * h * h).toFixed(2);

  const weightChange = (bmi, w, range) => {
    let changeObj;
    if (bmi > 24.9) {
      changeObj = {
        weight: (w - range.normal.high).toFixed(2),
        type: "positive"
      }
    } else if (bmi < 18.5) {
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
        type: "negative"
      }
    } else {
      changeObj = {
        weight: 0,
        type: "normal"
      }
    }
    return changeObj;
  }

  const checkCategory = (bmi) => {
    if (bmi < 18.5) {
      return "UnderWeight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal";
    }
    else if (bmi >= 24.9 && bmi < 29.9) {
      return "OverWeight";
    }
    else if (bmi >= 29.9 && bmi < 34.9) {
      return "Obesity class I";
    }
    else if (bmi >= 34.9 && bmi < 39.9) {
      return "Obesity Class II";
    } else {
      return "Obesity Class III";
    }
  }
  return (
    <>
      <Form getData={onSubmit} />
      {
        show && (
          <div className="row justify-content-md-center mt-5 mx-2">
            <div className='col col-md-3 mx-5 mb-5'>
              <BmiScore bmiNo={bmi} bmiCategory={bmiCategory} changeWeight={changeWeight} />
            </div>
            <div className='col col-md-5'>
              <BmiList bmiRange={bmiRange} bmi={bmi} />
            </div>
          </div>
        )
      }
    </>
  );
}

export default App;
