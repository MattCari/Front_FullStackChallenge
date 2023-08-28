import { StyledForm } from "../styledForm";

export const LoginForm = () => {
  return (
    <StyledForm>
      <h3>
        Login<p>and get started</p>
      </h3>
      <div className="ContentWrapper">
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button>Login</button>
      <div>
        <small>Doesn't have an account?</small>
        <small>forgot your password?</small>
      </div>
      </div>
    </StyledForm>
  );
};
