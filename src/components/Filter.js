import React from 'react'

const Filter = (props) => {
  return (
    <div>
      <h3>Filter Bots By Type:</h3>
      <form onSubmit={props.changeFilter}>
        <select id="botType">
          <option value="No Filter">No Filter</option>
          <option value="Support">Support</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
        </select>
        <input type="submit" name="Filter"/>
      </form>
    </div>
  )
}

export default Filter
