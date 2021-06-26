import React from "react"
import { withRouter } from "react-router-dom"

const GetQuery = (props) => {

    const name = new URLSearchParams(props.location.search).get('name')
    const userId = new URLSearchParams(props.location.search).get('userId')
    const time = new Date(new URLSearchParams(props.location.search).get('time'))
    console.log(name)
    console.log(userId)
    console.log(time)
    props.onSaveName(name)
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
      <div style={{display: "block", float: "left"}}>Last modified by User id: {userId} at {day} {month} {year}, {hour}:{minute}:{second} {ampm} </div>
  )
}

export default withRouter(GetQuery)