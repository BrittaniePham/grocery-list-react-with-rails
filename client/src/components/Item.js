import React from 'react';

const styles = {
  purchase: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Item = ({ id, purchase, name, updateItem, deleteItem }) => (
  <div className="col s12">

    {/* item */}
    <div className="col s8">
      <div style={ purchase ? styles.purchase : {} } className="center">
        {name}
      </div>
    </div>

    {/* checkbox */}
    <div className="col s2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={purchase}
        onClick={() => updateItem(id)}
      />
      <label htmlFor={`item-${id}`}>Purchased</label>
    </div>

    {/* delete button */}
    <div style= { styles.pointer } className="col s2" onClick={() => deleteItem(id)}>
      x
    </div>

  </div>
)

export default Item;