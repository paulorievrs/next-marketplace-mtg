import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import H1 from "../../components/H1/H1";
import Input from "../../components/Input/Input";
import MyHead from "../../components/MyHead/MyHead";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z
  .object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),

    email: z.string().min(1, { message: "E-mail é obrigatório" }).email({
      message: "Você deve usar um e-mail válido."
    }),
    password: z.string().min(6, { message: "Senha deve ser 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirmar senha é obrigatório" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Senhas não conferem"
  });

type ValidationSchema = z.infer<typeof validationSchema>;

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    reValidateMode: "onChange"
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <>
      <MyHead title="Calabouço do Android - Cadastro" />
      <Container>
        <H1>Faça seu cadastro</H1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-8"
        >
          <Input
            name="name"
            placeholder="Nome Completo"
            register={register}
            error={errors.name?.message}
          />
          <Input
            name="email"
            placeholder="E-mail"
            register={register}
            error={errors.email?.message}
          />
          <Input
            name="password"
            placeholder="Senha"
            type={"password"}
            register={register}
            error={errors.password?.message}
          />
          <Input
            name="confirmPassword"
            placeholder="Confirmar Senha"
            type={"password"}
            register={register}
            error={errors.confirmPassword?.message}
          />
          <Button type="submit" variant="primary">
            Cadastrar
          </Button>
        </form>
      </Container>
    </>
  );
}
