import { useParams } from "react-router-dom";
const GamePage = () => {
  const { id } = useParams();
  return <div>GamePage {id}</div>;
};

export default GamePage;
