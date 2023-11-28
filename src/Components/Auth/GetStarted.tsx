import { useState } from "react";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const GetStarted: React.FC = () => {
  const [isReturning, setIsReturning] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API call here
    console.log("Form submitted");
  };

  return (
    <div className="flex w-full max-w-[22rem] flex-col items-center justify-center gap-4 rounded-lg bg-slate-900 px-4 py-6 shadow-2xl">
      <form
        className="flex w-full flex-col items-center justify-center gap-3 px-2"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-[2rem] text-slate-200">Get Started</h1>
        {!isReturning && (
          <input
            value={name}
            onChange={(e: InputChangeEvent) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
            className="w-full rounded-md bg-slate-800 px-4 py-2 text-slate-200 shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
        )}
        <input
          value={email}
          onChange={(e: InputChangeEvent) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email"
          className="w-full rounded-md bg-slate-800 px-4 py-2 text-slate-200 shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
        <input
          value={password}
          onChange={(e: InputChangeEvent) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          className="w-full rounded-md bg-slate-800 px-4 py-2 text-slate-200 shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
        <button className="rounded-lg bg-slate-700 px-4 py-2 text-slate-200 shadow-lg transition duration-150 hover:bg-slate-950">
          {isReturning ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <p className="text-slate-400">or</p>
      <div className="flex w-full items-center justify-around px-4">
        <div className="flex aspect-square h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-600 text-slate-100 shadow-lg transition duration-200 hover:bg-slate-950">
          G
        </div>
        <div className="flex aspect-square h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-600 text-slate-100 shadow-lg transition duration-200 hover:bg-slate-950">
          F
        </div>
        <div className="flex aspect-square h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-600 text-slate-100 shadow-lg transition duration-200 hover:bg-slate-950">
          GH
        </div>
        <div className="flex aspect-square h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-600 text-slate-100 shadow-lg transition duration-200 hover:bg-slate-950">
          A
        </div>
        <div className="flex aspect-square h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-600 text-slate-100 shadow-lg transition duration-200 hover:bg-slate-950">
          G
        </div>
      </div>
      {isReturning ? (
        <h1 className="group text-center text-[0.9rem] text-slate-400">
          No account?{" "}
          <span
            className="cursor-pointer font-semibold transition duration-200 group-hover:text-slate-100"
            onClick={() => {
              setIsReturning(false);
            }}
          >
            Sign up with your email.
          </span>
        </h1>
      ) : (
        <h1 className="group text-center text-[0.9rem] text-slate-400">
          Have an account?{" "}
          <span
            className="cursor-pointer font-semibold transition duration-200 group-hover:text-slate-100"
            onClick={() => {
              setIsReturning(true);
            }}
          >
            Sign in here.
          </span>
        </h1>
      )}
    </div>
  );
};

export default GetStarted;
