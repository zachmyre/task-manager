import type { NextPage } from 'next';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Greeting from '../components/homepage/Greeting';

interface User{
  name: string;
  email: string;
  avatarUrl: string;
}

const Home: NextPage = () => {
  const [user, setUser] = useState<User>({
    name: 'Zachary',
    email: 'myrezach@live.com',
    avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQH_3jQ11ETXEA/profile-displayphoto-shrink_400_400/0/1629559824415?e=1658361600&v=beta&t=0I9U-uY1oJRXHv4QsErlr6MfhslATIQqtklOuOmVJV8'
  });
  
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <main>
        {/* Greeting */}
        <div className="mt-2 w-full">
          <Greeting {...user} />
        </div>
      </main>
    </div>
  )
}

export default Home
