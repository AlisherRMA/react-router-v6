import { /*Link,*/ NavLink, Outlet, useSearchParams } from "react-router-dom";
import QueryNavLink from "../components/query-nav-link.component";
//  Link and NavLinks are almost the same except that we can control over activeLinks via NavLink's isActive value
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              // setSearchParams() is putting the ?filter=... search params in the URL and rerendering the router.
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {/* looping throug the items. Take special note of the <Link>/<NavLink> elements to.
                Vue analogue: Router-link
          */}
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
