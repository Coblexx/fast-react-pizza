import { Link } from "react-router-dom";
import SearchOrder from "../features/Order/SearchOrder";
import Username from "../features/User/Username";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/" className="uppercase tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
