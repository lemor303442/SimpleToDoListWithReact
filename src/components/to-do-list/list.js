import React from 'react'

const List =  (
  toDoList,
  removeToDo
) => {
  return(
    <div>
      {toDoList.map((item, i) => {
        return (
          <div key={i}>
            <button onClick={() => removeToDo(i)}></button>
            <span>{item.content}</span>
          </div>
        )
      })}
    </div>
  )
}

export default List;