function login() {
  return (
    <div className="login">
      <h1>LOGIN</h1>
      <form action="/login" method="POST">
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <br />
        <br />
      </form>
      <button>Submit</button>
    </div>
  );
}

export default login;
