import React from 'react'

function Data() {
    const [boardData,setBoardData]=useState(
        [
        
            {id:"column1",
            title:"todo",
            cards:[
                {id:"card1",title:"card1",description:"card1 description"},
                {id:"card2",title:"card2",description:"card2 description"},
                {id:"card3",title:"card3",description:"card3 description"},
            ]
            },
            {id:"column2",
            title:"In-Progress",
            cards:[
                {id:"card4",title:"card4",description:"card1 description"},
                {id:"card5",title:"card5",description:"card2 description"},
                {id:"card6",title:"card6",description:"card3 description"},
            ]
            },
            {id:"column1",
            title:"done",
            cards:[
                {id:"card7",title:"card7",description:"card1 description"},
                {id:"card8",title:"card8",description:"card2 description"},
                {id:"card9",title:"card9",description:"card3 description"},
            ]
            }
        ])
  return (
    boardData
  )
}

export default Data