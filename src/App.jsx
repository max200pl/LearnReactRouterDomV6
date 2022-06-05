import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderRight: 'solid 1px',
          paddingBottom: '1rem',
          color: 'black',
        }}
      >
        <Link to="/invoices"> Invoices </Link> | {'  '}
        <Link to="/expenses"> Expenses </Link>
      </nav>
      <Outlet />
      {/* save display show in page this link */}
    </div>
  );
}
