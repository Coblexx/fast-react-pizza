import { Link } from "react-router-dom";
import SearchOrder from "../features/Order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Jonas</p>
    </header>
  );
}

export default Header;
