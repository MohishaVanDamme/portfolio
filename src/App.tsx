/*import Contact from './components/Contact.js';
import Hero from './components/Hero.js';
import Sidebar from './components/Navbar.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
				<Sidebar />
				<Routes>
					<Route
						path='/'
						element={
              <Hero />
            }
					/>
					<Route
						path='/skills'
						element={
							<Skills />
						}
					/>
					<Route
						path='/projects'
						element={
							<Projects />
						}
					/>
          <Route
						path='/contact'
						element={
							<Contact />
						}
					/>
				</Routes>
		</BrowserRouter>
  );
}

export default App;*/

import Contact from './components/Contact.js';
import Hero from './components/Hero.js';
import Sidebar from './components/Navbar.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(60);

  return (
    <BrowserRouter>
      <div className="flex w-full h-full">

        <Sidebar setSidebarWidth={setSidebarWidth} />

        <main
          className="flex-1 transition-all duration-300"
          style={{
            marginLeft: `${sidebarWidth}px`,
          }}
        >
		  {/* 🌌 BACKGROUND */}
          <div className="absolute inset-0 -z-10 overflow-hidden">

            {/* 🌸 LICHTE BASIS */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #faf7ff 0%, #ebdcff 50%, #d4b8ff 100%)"
              }}
            />

            {/* 🌌 NEBULA LAYER 1 */}
            <div
              className="absolute inset-0 animate-float-slow"
              style={{
                background: `
                  radial-gradient(circle at 20% 30%, rgba(179,136,235,0.45), transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(200,160,255,0.4), transparent 50%)
                `,
                filter: "blur(60px)"
              }}
            />

            {/* 🌌 NEBULA LAYER 2 (meer zichtbaar) */}
            <div
              className="absolute inset-0 animate-float-fast"
              style={{
                background: `
                  radial-gradient(circle at 60% 20%, rgba(147, 51, 234, 0.45), transparent 60%),
                  radial-gradient(circle at 30% 80%, rgba(168, 85, 247, 0.4), transparent 60%)
                `,
                filter: "blur(80px)"
              }}
            />

          </div>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;