import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './AppMain.module.css';

const AppMain = () => {
    const [userId, setUserId] = useState("")
    const [name, setName] = useState("")
    const [time, setTime] = useState(new Date())
    const history = useHistory()

    const queryUserId = new URLSearchParams(window.location.search).get('userId')
    const queryName = new URLSearchParams(window.location.search).get('name')
    const queryTime = (new URLSearchParams(window.location.search).get('time'))
    console.log(queryUserId)
    console.log(queryName)
    console.log(queryTime)

    useEffect (() => {
      if (queryName ==null && queryUserId ==null &&  !queryTime) {
        console.log("if")
        const params = new URLSearchParams()
        params.append("userId", null)
        params.append("name", null)
        params.append("time", new Date(0))
        history.push({search: params.toString()})
      }
      else {
        console.log("else")
        setUserId(queryUserId)
        setName(queryName)
      }
    },[])

    function onChange() {
        setTime(new Date(queryTime))
    }

    let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
    let day = time.getDate()
    let month = monthNames[time.getMonth()]
    let year = time.getFullYear()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    let ampm = hour < 12 ? 'am': 'pm'

    return (
        <div className={classes.Container}>
            <div className={classes.SwapBotton}>
                <h3>Swap - {name}</h3>
                <button onClick={onChange}>Amend Swap</button>
                <button>Clone Swap</button>
                <button>Generate Email</button>
                <button className={classes.DeleteBotton}>Delete Swap</button>
            </div>
            <div className={classes.UpdatedInfo}>Last modified by User id: {userId} at {day} {month} {year}, {hour}:{minute}:{second} {ampm} </div>
        </div>
    )
}

export default AppMain