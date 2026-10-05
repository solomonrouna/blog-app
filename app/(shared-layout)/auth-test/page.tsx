"use client";

import { useState } from "react";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";

export default function AuthTest() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signUp() {
    const { error } = await authClient.signUp.email({
      email,
      password,
      name: "Test User",
    });
    setMessage(error ? (error.message ?? "Sign up failed") : "Signed up!");
  }

  async function signIn() {
    const { error } = await authClient.signIn.email({ email, password });
    setMessage(error ? (error.message ?? "Sign in failed") : "Signed in!");
  }

  return (
    <main className="flex flex-col gap-3 p-10 max-w-sm">
      <p>
        {isLoading ? "Loading..." : isAuthenticated ? "Logged in" : "Logged out"}
      </p>
      <input
        className="border p-2"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2"
        placeholder="password (8+ characters)"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="border p-2" onClick={signUp}>Sign up</button>
      <button className="border p-2" onClick={signIn}>Sign in</button>
      <button className="border p-2" onClick={() => authClient.signOut()}>
        Sign out
      </button>
      <p>{message}</p>
    </main>
  );
}