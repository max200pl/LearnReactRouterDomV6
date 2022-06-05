import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation(); // returns a location that tells us information about the URL.
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices' + location.search); // to persist the query string by adding location.search
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
