import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import GetQuery from './GetQuery'

const AppMain = () => {
    const [query, setQuery] = useState("")
    const [name, setName] = useState("")
    const history = useHistory()

    function onChange() {
        setQuery(Math.floor(Math.random()*100))

    }
  
    useEffect(() => {
      const params = new URLSearchParams()
      if (query) {
        params.append("name", "Name from query")
        params.append("userId", query)
        params.append("time", new Date())
      } else {
        params.delete("name")
        params.delete("userId")
        params.delete("time")
      }
      history.push({search: params.toString()})
    }, [query, history])

    const saveNameHandler = (saveName) => {
      setName(saveName)
    }

    return (
        <div style={{width: "800px"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h3 style={{display: "inline-block", margin: "0px 10px 0px 0px", fontSize: "22px"}}>Swap - {name}</h3>
                <button onClick={onChange}>Amend Swap</button>
                <button>Clone Swap</button>
                <button>Generate Email</button>
                <button style={{marginLeft: "auto", order: "2"}}>Delete Swap</button>
            </div>
            <Route 
              path={ '/' }
              render={() => <GetQuery onSaveName={saveNameHandler} />}
            ></Route>
        </div>
    )
}

export default AppMain