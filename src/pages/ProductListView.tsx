import { Link } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { LogoutForm } from "../components/LogoutButton";

export function ProductListView() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-4">
          <Link className="navbar-brand" to="/">
            FB React App
          </Link>
          <div>
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
            <LogoutForm></LogoutForm>
          </div>
        </nav>

        <div className="container mt-4">
          <h1>Product List</h1>

          <ProductList />
        </div>
      </div>
    </>
  );
}
