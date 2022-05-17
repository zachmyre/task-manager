import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Greeting from "../components/homepage/Greeting";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

const Home: NextPage = () => {
  const [value, onChange] = useState(new Date());
  const [user, setUser] = useState<User>({
    name: "Zachary",
    email: "myrezach@live.com",
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQH_3jQ11ETXEA/profile-displayphoto-shrink_400_400/0/1629559824415?e=1658361600&v=beta&t=0I9U-uY1oJRXHv4QsErlr6MfhslATIQqtklOuOmVJV8",
  });

  return (
      <main className="flex flex-col items-center justify-center z-0">
        {/* Greeting */}
        <div className="mt-2 w-full drop-shadow-xl">
          <Greeting {...user} />
        </div>
        {/* Calendar */}
        <div className="mt-2 w-full flex items-center justify-center drop-shadow-xl">
          <Calendar className="calendar" onChange={onChange} value={value} />
        </div>
      </main>
  );
};

export default Home;
