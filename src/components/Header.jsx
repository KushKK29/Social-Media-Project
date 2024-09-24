function Header({ selectedTab, setselectedTab }) {
  const handlesignup = (itemname) => {
    setselectedTab(itemname);
  };
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#"
                className={`${
                  selectedTab === "Home"
                    ? "nav-link px-2 text-secondary"
                    : "nav-link px-2 text-white"
                }`}
                onClick={() => handlesignup("Home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  selectedTab === "Features"
                    ? "nav-link px-2 text-secondary"
                    : "nav-link px-2 text-white"
                }`}
                onClick={() => handlesignup("Features")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  selectedTab === "FAQ"
                    ? "nav-link px-2 text-secondary"
                    : "nav-link px-2 text-white"
                }`}
                onClick={() => handlesignup("FAQ")}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  selectedTab === "Pricing"
                    ? "nav-link px-2 text-secondary"
                    : "nav-link px-2 text-white"
                }`}
                onClick={() => handlesignup("Pricing")}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  selectedTab === "About"
                    ? "nav-link px-2 text-secondary"
                    : "nav-link px-2 text-white"
                }`}
                onClick={() => handlesignup("About")}
              >
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button
              type="button"
              className={`btn btn-outline-light me-2 ${
                selectedTab == "Login" && "close"
              }`}
              onClick={() => handlesignup("Login")}
            >
              Login
            </button>
            <button
              type="button"
              className={`btn btn-warning ${selectedTab == "Login" && "close"}`}
              onClick={() => handlesignup("Login")}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
