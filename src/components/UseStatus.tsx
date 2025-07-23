import { AuthCtrl } from "../controller/AuthCtrl";

export const AuthStatus: React.FC = () => {
  const { user, loading } = AuthCtrl();

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>{user ? `Logged in as ${user.displayName}` : "Not logged in"}</div>
  );
};
