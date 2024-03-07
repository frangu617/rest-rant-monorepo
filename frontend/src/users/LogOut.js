// logout.js
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

function Logout() {
  const history = useHistory();
  const { setCurrentUser } = useContext(CurrentUser);

  // Function to handle logout
  function handleLogout() {
    // Clear the JWT token from localStorage
    localStorage.removeItem("token");

    // Clear the current user from context
    setCurrentUser(null);

    // Redirect the user to the logout page or homepage
    history.push("/"); // Change "/logout" to the actual logout page or homepage URL
  }

  // Call handleLogout when the component mounts
  handleLogout();

  // Return null since this component doesn't render anything
  return null;
}

export default Logout;
