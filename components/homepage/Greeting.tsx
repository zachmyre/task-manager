interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

const Greeting = ({ name, email, avatarUrl }: User) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex flex-col items-center justify-center p-2 m-3">
      <div className="rounded-full border-2 border-gray-200 bg-white hover:cursor-pointer hover:transition hover:duration-600 hover:ease-in-out hover:scale-110">
        <img
          src={avatarUrl}
          alt={name}
          className="rounded-full p-1 w-24 h-24"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-normal text-white my-3">
          Greetings {name}
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-6 my-1 w-1/3">
      <div className="hover:cursor-pointer hover:transition hover:duration-600 hover:ease-in-out hover:scale-125">
          <a href="/tasks">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </a>
        </div>
        <div className="hover:cursor-pointer hover:transition hover:duration-600 hover:ease-in-out hover:scale-125">
          <a href="/goals">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
