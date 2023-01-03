import Link from "next/link";
import Body from "../../components/Body/Body";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import H1 from "../../components/H1/H1";
import Input from "../../components/Input/Input";
import MyHead from "../../components/MyHead/MyHead";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().min(1, { message: "E-mail é obrigatório" }).email({
    message: "Você deve usar um e-mail válido."
  }),
  password: z.string().min(1, { message: "Senha é obrigatória" })
});
type ValidationSchema = z.infer<typeof validationSchema>;

export default function Login() {
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
      <MyHead title="Calabouço do Android - Login" />
      <Container>
        <H1>Faça seu login</H1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-8"
        >
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
          <Button type="submit" variant="primary">
            Logar
          </Button>
          <Link href="/cadastro">
            <Body color="text-light-info">Não tem uma conta? Cadastre-se</Body>
          </Link>
        </form>
      </Container>
    </>
  );
}
