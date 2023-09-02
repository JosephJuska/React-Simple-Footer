import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home').then(module => ({default: module.Home})));
const About = lazy(() => import('./pages/About').then(module => ({default: module.About})));
const Contact = lazy(() => import('./pages/Contact').then(module => ({default: module.Contact})));
const NoPage = lazy(() => import('./pages/NoPage').then(module => ({default: module.NoPage})));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Routes>
            <Route index Component={Home} />
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
            <Route path='*' Component={NoPage} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
