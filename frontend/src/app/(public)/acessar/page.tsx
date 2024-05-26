import { LoginForm } from "./components/login-form";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Acessar conta</h1>
        <span className="block">Faça o login para gerenciar sua conta.</span>
      </div>
      <LoginForm />
    </div>
  );
}
