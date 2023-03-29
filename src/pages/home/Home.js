import { useState } from "react";
import Card from "../../components/ui/card/Card";
import CardButtons from "../../components/CardButtons";
import Modal from "../../components/ui/Modal";

const Home = () => {
  const [showModal, setshowModal] = useState(false);
  const openModalHandler = () => {
    setshowModal((value) => true);
  };
  const modalCloseHandler = (e) => {
    if (e.target.id == "wrapper") {
      setshowModal((value) => false);
    }
  };
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-5 px-12">
      <Card
        title="GitHub Copilot X: The AI-powered developer experience"
        image="https://github.blog/wp-content/uploads/2023/03/GitHub-Copilot-X-Announcement.jpg?resize=3200%2C1700"
      >
        <CardButtons modalHandler={openModalHandler} />
      </Card>
      <Card
        title="daily.dev raised an $11M seed round 🎉"
        image="https://assets.website-files.com/5e0f1144930a8bc8aace526c/641ac9cdd24b39bf981cf44b_daily.dev%20-%20Team%20image%203.jpg"
      >
        <CardButtons modalHandler={openModalHandler} />
      </Card>
      <Card
        title="Clean code practice: Must for every coder and seniors"
        image="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*UDAOfiFjLmnZsmktXwb2zw.jpeg"
      >
        <CardButtons modalHandler={openModalHandler} />
      </Card>
      <Card
        title="The biggest Next.js boilerplates of 2023"
        image="https://blog.logrocket.com/wp-content/uploads/2023/03/biggest-next-js-boilerplates-2023.png"
      >
        <CardButtons modalHandler={openModalHandler} />
      </Card>
      <Card
        title="GitHub Copilot X: The AI-powered developer experience"
        image="https://github.blog/wp-content/uploads/2023/03/GitHub-Copilot-X-Announcement.jpg?resize=3200%2C1700"
      >
        <CardButtons modalHandler={openModalHandler} />
      </Card>
      <Card
        title="daily.dev raised an $11M seed round 🎉"
        image="https://assets.website-files.com/5e0f1144930a8bc8aace526c/641ac9cdd24b39bf981cf44b_daily.dev%20-%20Team%20image%203.jpg"
      >
        <CardButtons modalHandler={openModalHandler} />
      </Card>
      <Card
        title="Clean code practice: Must for every coder and seniors"
        image="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*UDAOfiFjLmnZsmktXwb2zw.jpeg"
      >
        <CardButtons modalHandler={openModalHandler} />
      </Card>
      <Card
        title="The biggest Next.js boilerplates of 2023"
        image="https://blog.logrocket.com/wp-content/uploads/2023/03/biggest-next-js-boilerplates-2023.png"
      >
        <CardButtons modalHandler={openModalHandler} />
      </Card>
      <Modal isVisible={showModal} onClose={modalCloseHandler} />
    </div>
  );
};

export default Home;
