// import { createSignal } from 'solid-js';
import avatar from './assets/avatar.png';
import Experience from './components/Experience';

function App() {
  // const [count, setCount] = createSignal(0);

  return (
    <div class="w-[500px] mx-4 my-16 text-sm flex flex-col space-y-10">
      <div class="profile flex flex-row items-center">
        <img
          src={avatar}
          alt="Camille Salvador Avatar"
          class="object-cover h-[100px] w-[100px] rounded-full"
        />
        <div class="flex">
          <div class="ml-4">
            <h1 class="font-bold text-xl">Camille Salvador</h1>
            <p>Product-focused Fullstack Developer</p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="font-bold">About</h2>
        <p>
          A senior software developer with a passion for translating design
          concepts into fully functional UI components and pages. Specializes in
          the implementation, documentation, and maintenance of design systems
          to create exceptional user experiences.
        </p>
      </div>
      <div class="flex flex-col space-y-8">
        <h2 class="font-bold">Work Experience</h2>
        <Experience
          side="2022 - present"
          href="https://atbventures.com"
          title="Senior Software Developer (Web) - ATB Ventures"
          description="Currently inventing the future."
          stack="React ⬩ Next ⬩ Nest ⬩ TS ⬩ Tailwind ⬩ GH Actions ⬩ Figma ⬩ Apigee"
        />
        <Experience
          side="2021 - 2022"
          href="https://helcim.com"
          title="Lead Frontend Developer - Helcim"
          description="Led a team of front-end developers, overseeing their work, 
            and ensuring alignment with project goals. Developed, maintained, and 
            documented an in-house design system to enhance consistency and streamline 
            development. Managed team recruitment and conducted training sessions to 
            foster skill growth. Initiated library code reviews to ensure code quality 
            and adherence to best practices."
          stack="Vue ⬩ JS ⬩ SCSS ⬩ Gitlab ⬩ Figma ⬩ Storybook ⬩ Jest"
        />
        <Experience
          side="2019 - 2021"
          href="https://helcim.com"
          title="Frontend Developer - Helcim"
          description="Engineered an in-house design system using Vue.js for a major 
          platform overhaul, enhancing visual coherence and user experience. 
          Successfully implemented the new design system across multiple systems, 
          ensuring a consistent look and feel at launch. Took ownership of front-end 
          bug resolutions across all platforms, ensuring a smooth user experience. 
          Crafted all screens for a mobile web application, optimizing for 
          responsiveness and usability."
          stack="Vue ⬩ JS ⬩ SCSS ⬩ Gitlab ⬩ Figma ⬩ Adobe XD ⬩ PHP ⬩ MySQL"
        />
        <Experience
          side="2018 - 2019"
          href="https://helcim.com"
          title="Fullstack Developer - Helcim"
          description="Developed and maintained a referral Customer Relationship 
          Management (CRM) system within a legacy environment. Created and managed 
          a blog CRM using Vue.js, enhancing content delivery and internal team 
          usage. Undertook website maintenance responsibilities to ensure seamless 
          functionality. Curated and centralized style assets into a library for 
          streamlined global usage."
          stack="Vue ⬩ JS ⬩ SCSS ⬩ Bitbucket ⬩ Adobe XD ⬩ PHP ⬩ MySQL"
        />
      </div>
    </div>
  );
}

export default App;
