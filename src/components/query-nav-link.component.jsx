import { useLocation, NavLink } from "react-router-dom";

/**If you filter the list and then click a link, you'll notice that the list is no longer filtered 
 * and the search param is cleared from the <input> and the URL. 
 * You might want this, you might not! Maybe you want to keep the list filtered and keep the param in the URL.

   We can persist the query string when we click a link by adding it to the link's href. 
   We'll do that by composing NavLink and useLocation from React Router into our own QueryNavLink 
*/

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default QueryNavLink;
