import Spline from '@splinetool/react-spline';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <section>
      <Spline className='spline' scene="https://prod.spline.design/UFVZ7qPzAsfF0w0L/scene.splinecode" />
      <Header />

      <Main />
      <Footer />
    </section>
  );
}
