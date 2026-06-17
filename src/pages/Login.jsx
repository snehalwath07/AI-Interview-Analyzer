const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        style={{
          padding: "12px",
          width: "300px",
        }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        style={{
          padding: "12px",
          width: "300px",
        }}
      />

      <button
        onClick={() => {
          window.location.href = "/dashboard";
        }}
        style={{
          padding: "12px 25px",
          background: "#6d4aff",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;