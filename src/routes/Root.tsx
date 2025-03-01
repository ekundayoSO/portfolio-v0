import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const Root:React.FC = () => {
  return (
    <div className="d-flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}
export default Root;