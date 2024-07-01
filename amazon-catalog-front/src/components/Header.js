import { Link } from "react-router-dom";

const Header = ({ withSearch }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            Catálogo Amazônico
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        {!!withSearch && (
          <>
            <Link to={`/new`}><button type="button" className="btn btn-success">Novo</button></Link>
            <div className="collapse navbar-collapse p-1" id="navbarCollapse">
              <input
                type="search"
                className="form-control me-4"
                placeholder="Search"
                aria-label="Search"
                onKeyUp={withSearch}
              />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
