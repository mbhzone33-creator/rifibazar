import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Root = () => {
  const { pathname } = useLocation();

  // পেজ বদলালে একদম উপরে নিয়ে যাবে
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
