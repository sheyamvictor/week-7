import React, { useState } from 'react'

function ListIteam(props) {

const [chnecked,setchecked]= useState(false)


const changed =()=>{

setchecked(!chnecked)

}

return(
  <>
  <div>
  <input type='checkbox' onChange={changed}/>

  <span style={{textDecoration:chnecked?"line-through":"none"}}>{props.activity}</span>
  
  </div>
  </>
)
}

export default ListIteam