import Card from "../../Common/Card";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LoginForm() {
  return (
    <Card className="login-form">
      <SignIn />
      <SignUp />
    </Card>
  );
}

export default LoginForm;
