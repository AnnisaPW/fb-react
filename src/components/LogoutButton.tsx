import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const LogoutForm: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully:");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };
  return (
    <>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
