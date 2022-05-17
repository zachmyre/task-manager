// components/layout.js

import Navbar from '../navbar/Navbar';
// import Footer from './footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}