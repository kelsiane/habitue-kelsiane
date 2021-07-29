import Lottie from "react-lottie";
import FormRegister from "../../components/FormRegister";
import animationData from "../../assets/lotties/time.json";
import { Container } from "./styles";
import Header from "../../components/Header";
const UserRegister = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Header />
      <Container>
        <FormRegister />
        <div>
          <Lottie options={defaultOptions} />
        </div>
      </Container>
    </>
  );
};

export default UserRegister;
