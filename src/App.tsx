import { createSignal, Index } from 'solid-js';
import avatar from './assets/avatar.png';
import ListItem from './components/ListItem';
import Experience from './components/Experience';
import FadeIn from './components/FadeIn';
import Link from './components/Link';
import data from './data.json';

function App() {
  const [experiences] = createSignal(data.experiences);

  return (
    <div class="max-w-[500px] px-4 py-16 text-sm flex flex-col space-y-10">
      <FadeIn>
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
      </FadeIn>
      <FadeIn>
        <div>
          <h2 class="font-bold mb-1">About</h2>
          <p>
            A senior software developer with a passion for translating design
            concepts into fully functional UI components and pages. Specializes
            in the implementation, documentation, and maintenance of design
            systems to create exceptional user experiences.
          </p>
        </div>
      </FadeIn>
      <div class="flex flex-col space-y-8">
        <Index each={experiences()}>
          {(experience) => (
            <FadeIn>
              <Experience experience={experience()} />
            </FadeIn>
          )}
        </Index>
      </div>
      <FadeIn>
        <div class="flex flex-col space-y-8">
          <h2 class="font-bold">Side Projects</h2>
          <p>
            <span class="mr-1">
              TBA - Working on adding fun side projects in this section. But if
              interested in older work, check out my playground at
            </span>
            <Link href="https://codepen.io/camillesalvador" text="Codepen" />
            <span class="mx-1">or at</span>
            <Link href="https://github.com/camillesalvador" text="Github" />
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div class="flex flex-col space-y-8">
          <h2 class="font-bold">Find me elsewhere</h2>
          <div class="flex flex-col space-y-4">
            <ListItem
              side="Github"
              title="@camillesalvador"
              href="https://github.com/camillesalvador"
            />
            <ListItem
              side="Codepen"
              title="@camillesalvador"
              href="https://codepen.io/camillesalvador"
            />
            <ListItem
              side="LinkedIn"
              title="camillesalvador"
              href="https://www.linkedin.com/in/camillesalvador"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default App;
