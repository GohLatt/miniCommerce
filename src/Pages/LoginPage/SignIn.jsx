import Card from "../../Common/Card";
import Button from "../../Common/Button";
function SignIn() {
  return (
    <Card className="sign-in">
      <h2>Login to Your Account</h2>
      <p className="social-text">Login with social network</p>
      <div className="social">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button className="btn btn-sign-in">Sign In</Button>
      </form>
    </Card>
  );
}

export default SignIn;
