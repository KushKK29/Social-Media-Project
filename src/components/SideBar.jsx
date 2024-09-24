const SideBar = ({ selectedTab, setselectedTab }) => {
  const handelClick = (itemname) => {
    setselectedTab(itemname);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">SideBar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            handelClick("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            handelClick("Create Post");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Create Post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
        <li
          className="nav-item"
          style={{ cursor: "pointer" }} // Ensures the pointer appears on hover
          onMouseEnter={(e) => {
            e.currentTarget.querySelector(".nav-link").style.backgroundColor =
              "#f00"; // Change background on hover
            e.currentTarget.querySelector(".nav-link").style.color = "#fff"; // Change text color on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector(".nav-link").style.backgroundColor =
              "transparent"; // Reset background
            e.currentTarget.querySelector(".nav-link").style.color = "white"; // Reset text color
          }}
          onClick={() => {
            handelClick("Sign Out");
          }}
        >
          <a href="#" className="nav-link text-white" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Sign Out
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Go Up</strong>
        </a>
      </div>
    </div>
  );
};
export default SideBar;
