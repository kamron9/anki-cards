import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";
import { useAuth } from "@/context/AuthProvider";
import { memo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";

const Auth = () => {
  const { pathname } = useLocation();
  const { login, register } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [fullName, setFullName] = useState<string>("");
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pathname === "/signin") {
      const result = await login({ username: userName, password });
      setErrorMsg(result);
    } else {
      if (password !== confirmPassword) {
        setErrorMsg("Password and confirm password do not match");
        return;
      }
      const result = await register({ fullName, username: userName, password });
      setErrorMsg(result);
    }
  };

  return (
    <div className="container h-screen flex justify-center items-center">
      <Card className="max-w-[500px] w-full h-fit">
        <CardHeader>
          <div className="flex items-center justify-center relative">
            <div className="absolute left-0 z-10">
              <Link to={"/"} className="flex items-center gap-1">
                <LeftArrowIcon className="text-blue-500" />
                <span>Back</span>
              </Link>
            </div>
            <h2 className="font-bold text-xl">
              {pathname === "/signin" ? "Sign in" : "Sign up"}
            </h2>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleData}>
            {
              // Show full name input only on sign up
              pathname === "/signup" && (
                <FormInput
                  onChange={(e) => setFullName(e.target.value)}
                  name="fullName"
                  label="full name"
                  type="text"
                />
              )
            }
            <FormInput
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              type="text"
              label="username or email"
            />

            <FormInput
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              label="password"
            />

            {
              // Show confirm password input only on sign up
              pathname === "/signup" && (
                <FormInput
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="confirmPassword"
                  type="password"
                  label="confirm password"
                />
              )
            }
            {errorMsg && (
              <div className="text-red-500 text-sm font-semibold">
                {errorMsg}
              </div>
            )}

            {pathname === "/signin" ? (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
              >
                Sign in
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
              >
                Sign up
              </button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;

type TformInput = {
  label: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = memo(({ label, type, name, onChange }: TformInput) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        className="w-full mt-1 bg-transparent p-2 rounded-md mb-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        id={label}
        name={name}
        placeholder="..."
        required
        onChange={(e) => onChange(e)}
      />
    </>
  );
});
