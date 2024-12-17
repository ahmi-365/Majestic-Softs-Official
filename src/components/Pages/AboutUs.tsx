import { Hero } from '../HeroAbout';
import { Mission } from '../Mission';
import { Journey } from '../Journey';
import { Values } from '../Values';
import { Stats } from '../Stats';
import { Process } from '../Process';
import { Expertise } from '../Expertise';
import { TestimonialsAbout } from '../TestimonialsAbout';
import { AnimatedBeamDemo } from '../AnimatedBeam';
import TeamAbout from '../TeamAbout';

export default function AboutUsAi() {
  return (
<>  
<span className='contact'></span>
  <div className="min-h-screen ">
      <Hero />
      <Mission />
      <div className="flex items-center justify-center h-full">
  <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
  Seamlessly Bridging Technologies
  </h2>
</div>

<p className="mx-auto mt-4 max-w-2xl text-lg text-center text-purple-700 dark:text-purple-400 text-gray-600">
  We bridge the gaps between technology and people, fostering seamless connections across the globe.
</p>


      <AnimatedBeamDemo/>
      <Journey />
      <Values />
      
      {/* Stats Section */}
      <section className=" py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </section>

      <Process />
      <Expertise />
      <TestimonialsAbout />
      
     <TeamAbout/>

    </div>
    </>
  );
}

