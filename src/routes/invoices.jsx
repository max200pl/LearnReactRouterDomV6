import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

export default function App() {
  let invoices = getInvoices();

  return (
    <div style={{ display: 'flex' }}>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        {invoices.map((invoices) => (
          <Link
            to={`/invoices/${invoices.number}`}
            style={{ display: 'block0', margin: '1rem 0' }}
          >
            {invoices.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
