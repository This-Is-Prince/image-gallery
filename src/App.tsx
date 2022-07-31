import useImageStore from "./app/imageStore";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Modal from "./components/modal";

const App = () => {
  const { isModalOpen } = useImageStore((store) => {
    return { isModalOpen: store.isModalOpen };
  });
  return (
    <>
      <Header />
      <Content />
      {isModalOpen && <Modal />}
    </>
  );
};

export default App;
