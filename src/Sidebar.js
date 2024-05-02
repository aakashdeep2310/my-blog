import React from 'react';

function Sidebar() {
  return (
    <aside className="Sidebar">
      <p className="Sidebar-title" style={{ fontWeight: 'bold' }}>Categories</p>
      <ul className="Sidebar-list">
        <li><a href="#">World Tour</a></li>
        <li><a href="#">Fastest Car</a></li>
        <li><a href="#">Milkey Way Galaxy</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
