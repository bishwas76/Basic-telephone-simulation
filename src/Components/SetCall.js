import React from 'react';
import './style.css'

const SetCall = ({setCallFrom, setCallTo, setDuration, setCTime, from, to, duration, ctime }) => {

    const inputHandlerFrom = (e) => {
        setCallFrom(e.target.value);
    }

    const inputHandlerTo = (e) => {
        setCallTo(e.target.value);
    }

    const submitHanderler = (e) => {
        e.preventDefault();
        setDuration(
            duration=randomTimeDuration()
        );
        setCallFrom("");
        setCallTo("");
    }

    //Generates random time duration for the call
    let randomTimeDuration = (minTime=5, maxTime=50) =>  Math.floor((Math.random() * maxTime) + minTime);

    //ticking clock
    setInterval(() => {
        setCTime(ctime+1); 
    }, 1000)

    return ( 
        <React.Fragment>
            <div className='set-call'>
                <form className = "form-class">
                    <input
                        value={from}
                        type="text"
                        className="from-to-class"
                        onChange = {inputHandlerFrom}
                        placeholder = "from"
                    />
                    <input
                        value={to}
                        type="text"
                        className="from-to-class"
                        onChange = {inputHandlerTo}
                        placeholder = "to"
                    />
                    <button 
                        onClick = {submitHanderler} 
                        className = "start-button btn-success" 
                        type = "submit">
                            Call
                    </button>
                </form>
            </div>
            <br />
            <div className='clock-container'>
                <div className="clock">
                    <span className='clock-span'>Time in Sec: {0}</span>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SetCall;