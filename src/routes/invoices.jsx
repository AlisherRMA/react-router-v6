import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/* looping throug the items. Take special note of the <Link> elements to.
                Vue analogue: Router-link
          */}
        {invoices.map((invoice) => (
          <Link style={{ display: "block", margin: "1rem 0" }} to={`/invoices/${invoice.number}`} key={invoice.number}>
            {invoice.name}
          </Link>
        ))}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
