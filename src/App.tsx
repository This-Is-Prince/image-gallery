import useImageStore from "./app/imageStore";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Modal from "./components/modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { isModalOpen } = useImageStore((store) => {
    return { isModalOpen: store.isModalOpen };
  });
  return (
    <>
      <Header />
      <Content />
      {isModalOpen && <Modal />}
      <ToastContainer />
    </>
  );
};

export default App;
