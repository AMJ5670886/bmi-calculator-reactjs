import { useState } from 'react';

function Form({ getData }) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [alert, setAlert] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if (isNaN(weight) || isNaN(height)) {
            setAlert(true);
        } else {
            getData(weight, height);
            setAlert(false);
            setWeight("");
            setHeight("");
        }
    }
    return (
        <div className="col-sm-4 shadow rounded mx-auto mt-5 px-3">
            <h1 className="text-center fs-4 pb-3 pt-3">BMI CALCULATOR</h1>
            <form className="py-2" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-sm-4 offset-sm-2">
                        <label className="form-label">Weight(kg)</label>
                        <input type="text" className="form-control"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required />
                    </div>
                    <div className="col-sm-4 offset-sm-1">
                        <label className="form-label">Height(m)</label>
                        <input type="text" className="form-control"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required />
                    </div>
                </div><br />
                <div className="row ">
                    <div className="col-sm-10  offset-sm-2">
                        <button type="submit" className="btn btn-teal" >Get BMI</button>
                    </div>
                </div>
            </form>
            {
                (alert && (
                    <div className="alert alert-danger">
                        <strong>Enter valid datas.</strong>
                    </div>
                ))
            }
        </div>
    )
}



export default Form
