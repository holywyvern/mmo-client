import AppLink from "../AppLink";

function LoginMenu() {
  const loggedIn = false;
  if (loggedIn) {
    // TODO: Return user menu
  }
  return (
    <>
      <AppLink href="/sign-in">Iniciar sesión</AppLink>
      <AppLink href="/sign-up">Registrarse</AppLink>
    </>
  );
}

export default LoginMenu;
