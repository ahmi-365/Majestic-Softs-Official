import { Hero } from '../HeroAbout';
import { Mission } from '../Mission';
import { Journey } from '../Journey';
import { Values } from '../Values';
import { Stats } from '../Stats';
import { Process } from '../Process';
import { Expertise } from '../Expertise';
import { Testimonials } from '../TestimonialsAbout';
import { TeamMember } from '../TeamMember';
import { Contact } from '../Contact';
import { AnimatedBeamDemo } from '../AnimatedBeam';

export default function AboutUsAi() {
  return (
<>  
<span className='contact'></span>
  <div className="min-h-screen ">
      <Hero />
      <Mission />
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
      <Testimonials />
      
      {/* Team Section */}
      <section className=" py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Experienced professionals driving innovation and excellence
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <TeamMember
              name="Sarah Johnson"
              role="CEO & Founder"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=988"
              github="https://github.com"
              linkedin="https://linkedin.com"
              email="sarah@example.com"
            />
            <TeamMember
              name="Michael Chen"
              role="CTO"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070"
              github="https://github.com"
              linkedin="https://linkedin.com"
              email="michael@example.com"
            />
            <TeamMember
              name="Emily Rodriguez"
              role="Head of Design"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961"
              github="https://github.com"
              linkedin="https://linkedin.com"
              email="emily@example.com"
            />
          </div>
        </div>
      </section>

      <Contact />
    </div>
    </>
  );
}

