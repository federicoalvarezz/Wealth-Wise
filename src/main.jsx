import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./components/loginbtn.jsx";
import LogoutButton from "./components/logoutbtn.jsx";
import Profile from "./components/profile.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-fede-alvarez.us.auth0.com"
    clientId="09PzbOwnXqk9nP4nqukgwaQ163PzsuiZ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* <App /> */}
    <LoginButton />
    <LogoutButton />
    <Profile />
  </Auth0Provider>
);
