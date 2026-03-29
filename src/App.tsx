import Contact from './components/Contact';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Background from './components/Background';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(60);

  return (
    <HashRouter>
      <div className="flex w-full h-full relative">

        <Sidebar setSidebarWidth={setSidebarWidth} />

        <main
          className="flex-1 relative z-10 transition-all duration-300"
          style={{
            marginLeft: `${sidebarWidth}px`,
          }}
        >
		  <Background />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

      </div>
    </HashRouter>
  );
}

export default App;