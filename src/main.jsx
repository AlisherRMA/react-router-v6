import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          {/* index element. Shows by default when no routes selected.
            helpful when you have some dynamic routes. It doesnt have a path. 
            Index routes render in the parent routes outlet at the parent route's path.
            Index routes match when a parent route matches but none of the other children match.
            Index routes are the default child route for a parent route.
            Index routes render when the user hasn't clicked one of the items in a navigation list yet.
          */}
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":id" element={<Invoice />}></Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
