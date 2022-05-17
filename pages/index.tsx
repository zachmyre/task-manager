import type { NextPage } from 'next';
import Navbar from '../components/navbar/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <main>
        <h1>Hello Next.js</h1>
      </main>
    </div>
  )
}

export default Home
