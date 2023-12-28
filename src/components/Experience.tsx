import ArrowUpRight from '../icons/ArrowUpRight';
interface ExperienceProps {
  side: string;
  title: string;
  description: string;
  stack: string;
  href?: string;
}

function Experience({
  side,
  title,
  description,
  stack,
  href,
}: ExperienceProps) {
  return (
    <div class="grid grid-cols-4 space-x-8">
      <div class="col-span-1">
        <p>{side}</p>
      </div>
      <div class="col-span-3">
        {href ? (
          <a
            href={href}
            class="flex items-center font-bold hover:underline underline-offset-2"
          >
            <span class="font-bold">{title}</span>
            <ArrowUpRight />
          </a>
        ) : (
          <p>{title}</p>
        )}
        <p class="my-2">{description}</p>
        <p>{stack}</p>
      </div>
    </div>
  );
}

export default Experience;
