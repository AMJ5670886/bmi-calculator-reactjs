
function BmiScore({ bmiNo, bmiCategory, changeWeight }) {
  let changeObj;
  if (changeWeight.type === "positive") {
    changeObj = {
      badgeColor: "badge bg-red m-2 p-4 fs-4",
      type: 'lose'
    }
  } else if (changeWeight.type === "negative") {
    changeObj = {
      badgeColor: "badge bg-yellow m-2 p-4 fs-4",
      type: 'gain'
    }
  } else {
    changeObj = {
      badgeColor: "badge bg-primary m-2 p-4 fs-4",
      type: 'normal'
    }
  }
  return (
    <div className="text-center shadow rounded p-2">
      <div className="fs-4">Your BMI Score</div>
      <h3 className={changeObj.badgeColor}>{bmiNo}</h3>
      <div className="fw-bold fs-3">{bmiCategory}</div>
      {
        changeObj.type === 'normal' ? 
        (<div className="fw-normal">You have to a normal weight </div>) : 
        (<div className="fw-normal">You have to {changeObj.type} <span className="fw-bold">{changeWeight.weight}</span>kg</div>)
      }
    </div>
  )
}

export default BmiScore
