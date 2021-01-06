import AppLink from "../AppLink";

import { useSelector, useDispatch } from "react-redux";

import { accountActions } from "../../state";

const selector = ({ account }) => Boolean(account.user);

function LoginMenu() {
  const loggedIn = useSelector(selector);

  const dispatch = useDispatch();

  const signOut = (event) => {
    event.preventDefault();
    dispatch(accountActions.signOut());
  };
  if (loggedIn) {
    return (
      <>
        <AppLink onClick={signOut}>Cerrar sesión</AppLink>
      </>
    );
  }
  return (
    <>
      <AppLink href="/account/sign-in">Iniciar sesión</AppLink>
      <AppLink href="/account/sign-up">Registrarse</AppLink>
    </>
  );
}

export default LoginMenu;
