import ArrowUpRight from '../icons/ArrowUpRight';
import { Index } from 'solid-js';

interface ExperienceProps {
  side: string;
  title: string;
  description: Array<string>;
  stack: Array<string>;
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
        <p class="my-2">
          <Index each={description}>
            {(item) => <span class="block mb-1">{item()}</span>}
          </Index>
        </p>
        <p>
          <Index each={stack}>
            {(item, i) => (
              <span>
                {item()}
                {i < stack.length - 1 ? ' ⬩ ' : ''}
              </span>
            )}
          </Index>
        </p>
      </div>
    </div>
  );
}

export default Experience;
