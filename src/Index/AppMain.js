import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
// import GetQuery from './GetQuery'
import classes from './AppMain.module.css';

const AppMain = () => {
    const [userId, setUserId] = useState("")
    const [name, setName] = useState("")
    const [time, setTime] = useState(new Date())
    const history = useHistory()

    function onChange() {
      const queryUserId = new URLSearchParams(window.location.search).get('userId')
      const queryName = new URLSearchParams(window.location.search).get('name')
      const queryTime = (new URLSearchParams(window.location.search).get('time'))

      if (queryName ==null && queryUserId ==null &&  !queryTime) {
        const params = new URLSearchParams()
        params.append("userId", null)
        params.append("name", null)
        params.append("time", new Date(0))
        history.push({search: params.toString()})
      }
      else {
        setUserId(queryUserId)
        setName(queryName)
        setTime(new Date(queryTime))
      }
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
      
    // useEffect(() => {
    //   const params = new URLSearchParams()
    //   if (userId) {
    //     params.append("name", "Name from query")
    //     params.append("userId", userId)
    //     params.append("time", new Date())
    //   } else {
    //     params.delete("name")
    //     params.delete("userId")
    //     params.delete("time")
    //   }
    //   history.push({search: params.toString()})
    // }, [userId, history])

    // const saveNameHandler = (saveName) => {
    //   setName(saveName)
    // }

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