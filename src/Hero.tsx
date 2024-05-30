
import { Cursor, useTypewriter } from 'react-simple-typewriter';
export default function Hero(){

   const [skills] = useTypewriter({
      words: ['Back-end', 'Front-end', 'Cloud'],
      loop: true
   });
   return (
      <section id="hero">
         <div className="hero-text">
            <h1>Ruben Neven</h1>
            <p ><span className="skill">{skills}</span><Cursor/>developer </p>
            <div className="hero__cta">
               <a href="#">
                  Let's connect &rarr;
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </a>
            </div>
            
         </div>   
      </section>
   );
}
