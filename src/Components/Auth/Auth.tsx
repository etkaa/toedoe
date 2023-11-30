import GetStarted from "./GetStarted";

const Auth: React.FC = () => {
  return (
    <div className="flex h-[100dvh] w-screen max-lg:flex-col">
      <div className="max-lg:z-0 max-lg:h-[45%] lg:w-[70%]">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover opacity-90"
          loading="lazy"
        />
      </div>
      <div className="flex w-[30%] items-center justify-center px-4 max-lg:absolute max-lg:top-1/2 max-lg:z-10 max-lg:h-[70%] max-lg:w-full max-lg:-translate-y-1/2 max-md:mx-auto lg:min-w-[30rem]">
        <GetStarted />
      </div>
    </div>
  );
};

export default Auth;
