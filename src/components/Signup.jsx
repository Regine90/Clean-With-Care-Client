function Signup() {
  return (
    <main>
      <div className="signup">
        <h1>Sign Up</h1>
        <form action="/signup.html" method="POST">
          <div>
            <label htmlFor="first">First Name:</label>
            <input
              type="first"
              id="first"
              name="first"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label htmlFor="last">Last Name:</label>
            <input
              type="last"
              id="last"
              name="last"
              placeholder="Last Name"
              required
            />
          </div>
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
    </main>
  );
}

export default Signup;
