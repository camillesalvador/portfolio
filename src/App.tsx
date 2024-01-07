import { createSignal, Index } from 'solid-js';
import avatar from './assets/avatar.png';
import Experience from './components/Experience';
import data from './data.json';

function App() {
  const [experiences, setExperiences] = createSignal(data.experiences);

  return (
    <div class="max-w-[500px] px-4 py-16 text-sm flex flex-col space-y-10">
      <div class="profile grid grid-cols-4 space-x-8">
        <img
          src={avatar}
          alt="Camille Salvador Avatar"
          class="object-cover w-80 px-2 rounded-full col-span-1"
        />
        <div class="col-span-3 flex flex-col justify-center">
          <h1 class="font-bold text-xl">Camille Salvador</h1>
          <p class="opacity-65">Product-focused Fullstack Developer</p>
        </div>
      </div>
      <div>
        <h2 class="font-bold mb-1">About</h2>
        <p>
          A senior software developer with a passion for translating design
          concepts into fully functional UI components and pages. Specializes in
          the implementation, documentation, and maintenance of design systems
          to create exceptional user experiences.
        </p>
      </div>
      <div class="flex flex-col space-y-8">
        <h2 class="font-bold">Work Experience</h2>

        <Index each={experiences()}>
          {(experience) => (
            <Experience
              side={experience().year}
              href={experience().link}
              title={experience().title}
              description={experience().description}
              stack={experience().stack}
            />
          )}
        </Index>
      </div>
    </div>
  );
}

export default App;
