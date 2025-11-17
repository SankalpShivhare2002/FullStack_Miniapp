const Hamburger = ({ onClick }) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1.5em"
        height="1.5em"
      >
        <path d="M4 6h16v2H4z M4 11h16v2H4z M4 16h16v2H4z" />
      </svg>
    </div>
  );
};

export default Hamburger;
