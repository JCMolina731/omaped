import './App.css'
import { Footerwithmap } from './components/Footerwithmap';

import Header from './components/Header'
import Sections from './components/Sections'
import  { useState, useEffect } from 'react';


function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://scontent.flim3-3.fna.fbcdn.net/v/t39.30808-6/426351927_368670032774133_1553394635025393166_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHu8CrEHqPmr7rCvrIpaFpNCpor9nVuvawKmiv2dW69rKLMdUDPzmJY5RJbuZ6w1T1Bj3vVFGJF7Cc4yqqDJ0AO&_nc_ohc=ckLwCg1ZxmcAX-UQZ6R&_nc_ht=scontent.flim3-3.fna&cb_e2o_trans=t&oh=00_AfC9hiNkLOFDzi0UJSbdh2P-qED89q4_To-m2OaVxYROFA&oe=65ED4937",
    "https://scontent.flim3-2.fna.fbcdn.net/v/t39.30808-6/381155658_278935378414266_2253424847744908719_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeElSOBC98eT3Es_dFJZk_FTKnwPQvrXNrgqfA9C-tc2uHWNhGSuEtuxx_lrqPwHgUZdCA4dHxaAQUL_-zJcWdLz&_nc_ohc=450KrdENcJcAX-3oAdd&_nc_ht=scontent.flim3-2.fna&cb_e2o_trans=t&oh=00_AfDV8y_k_GsgeZw7g5nLg0zYnBea9gFXG7R0l-9bk2Iubg&oe=65ECAA1A",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

   return (
    <div className="flex justify-center items-center relative">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform ${index === currentImageIndex ? '' : '-translate-x-full'}`}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative z-10 w-full">
        <Header />
        <Sections />
        <Footerwithmap />
      </div>
    </div>
  )
}

export default App
