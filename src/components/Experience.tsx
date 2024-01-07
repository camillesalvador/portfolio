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
            target="_blank"
            rel="noopener"
            class="flex items-center font-bold hover:underline underline-offset-2"
          >
            <span class="font-bold inline">
              {title}
              <ArrowUpRight />
            </span>
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
