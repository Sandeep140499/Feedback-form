import React from 'react'

function DetailsList(props) {
  return (
    <div >
        {
            props.users.map(item => {
                return <p className='listCont'>{`Name: ${item.name}  |  Department: ${item.dept}  |  Rating: ${item.rate}`}</p>
                
            })
            
        }
    </div>
  )
}

export default DetailsList;