import Header from "./Header";
import CartOverview from "../features/Cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

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
