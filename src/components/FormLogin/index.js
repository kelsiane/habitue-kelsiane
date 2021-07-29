import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { Form } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Campo obrigatório!!"),
  password: yup.string().required("Campo obrigatório!!"),
});

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  const style = {
    color: "var(--black)",
    fontWeight: "bold",
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form>
        <h2>Login</h2>
        <Input
          register={register}
          name="email"
          label="Email"
          placeholder="Digite seu email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          error={errors.password?.message}
        />
        <p>
          Ainda não possui cadastro?{" "}
          <Link style={style} to="/register">
            Clique aqui
          </Link>{" "}
          para se cadastrar.
        </p>
        <Button type="submit" id="btn" orangeSchema={true}>
          Login
        </Button>
      </Form>
    </form>
  );
};

export default FormLogin;
