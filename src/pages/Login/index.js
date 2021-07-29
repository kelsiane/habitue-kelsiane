import Lottie from "react-lottie";
import FormLogin from "../../components/FormLogin";
import { Container } from "./styles";
import animationData from "../../assets/lotties/time.json";
import Header from "../../components/Header";

const Login = () => {
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
        <FormLogin />
        <div>
          <Lottie options={defaultOptions} />
        </div>
      </Container>
    </>
  );
};

export default Login;
