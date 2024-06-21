// components/Login.tsx or Login.js
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";
export default function Login() {
  return (
    <div className="login_Button">
      <Button color="primary" onClick={() => signIn("google")}>
        Login
      </Button>
    </div>
  );
}
