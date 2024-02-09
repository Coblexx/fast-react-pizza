import Header from "./Header";
import CartOverview from "../features/Cart/CartOverview";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        {/* Tool used to render a nested route */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
