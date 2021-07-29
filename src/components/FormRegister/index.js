import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { Form } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  username: yup.string().required("Campo obrigatório!!"),
  email: yup.string().required("Campo obrigatório!!"),
  password: yup.string().required("Campo obrigatório!!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Confirme senha"),
});

const FormRegister = () => {
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
        <h2>Registro</h2>
        <Input
          register={register}
          name="username"
          label="Username"
          placeholder="Digite o nome de usuário"
          error={errors.username?.message}
        />
        <Input
          register={register}
          type="email"
          name="email"
          label="Email"
          placeholder="Digite seu email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          name="password"
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          error={errors.password?.message}
        />
        <Input
          register={register}
          type="password"
          name="passwordConfirm"
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          error={errors.passwordConfirm?.message}
        />
        <p>
          Já possui conta?{" "}
          <Link style={style} to="/login">
            Clique aqui
          </Link>{" "}
          para entrar.
        </p>
        <Button type="submit" id="btn" orangeSchema={true}>
          Registrar
        </Button>
      </Form>
    </form>
  );
};

export default FormRegister;
