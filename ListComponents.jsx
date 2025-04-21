import React from 'react';

function ListComponent({ items, renderItem }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>No items to display.</div>;
  }

  return (
    <ul>
      {items.map((item) => renderItem(item))}
    </ul>
  );
}

export default ListComponent;
