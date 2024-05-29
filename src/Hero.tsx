
import { Cursor, useTypewriter } from 'react-simple-typewriter';
export default function Hero(){

   const [skills] = useTypewriter({
      words: ['back-end', 'front-end', 'cloud'],
      loop: true
   });
   return (
      <section id="hero">
         <div className="hero-text">
            <h1>Ruben Neven</h1>
            <p >I'm <span className="skill">{skills}</span><Cursor/>developer </p>
            <div className="hero__cta">
               <a href="#">
                  Let's connect &rarr; 
               </a>
                  
            </div>
            
         </div>   
      </section>
   );
}