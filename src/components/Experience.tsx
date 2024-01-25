import { createResource } from 'solid-js';
import ListItem from './ListItem';

interface ExperienceProps {
  experience: {
    year: string;
    link: string;
    title: string;
    description: string[];
    stack: string[];
    github_handle: string;
  };
}

function Experience({ experience }: ExperienceProps) {
  const [logo] = createResource(async () => {
    const res = await fetch(
      `https://api.github.com/users/${experience.github_handle}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    if (!res.ok) throw new Error('Failed to fetch github profile image.');
    const data = await res.json();
    return data.avatar_url;
  });

  return (
    <ListItem
      logo={logo()}
      side={experience.year}
      href={experience.link}
      title={experience.title}
      description={experience.description}
      stack={experience.stack}
    />
  );
}

export default Experience;
