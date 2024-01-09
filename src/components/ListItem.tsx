import Link from './Link';
import { Index } from 'solid-js';

interface ListItemProps {
  side: string;
  title: string;
  description?: Array<string>;
  stack?: Array<string>;
  href?: string;
}

function ListItem({ side, title, description, stack, href }: ListItemProps) {
  return (
    <div class="grid grid-cols-4 space-x-8">
      <div class="col-span-1">
        <p>{side}</p>
      </div>
      <div class="col-span-3">
        {href ? <Link href={href} text={title} /> : <p>{title}</p>}
        {description && (
          <p class="my-2">
            <Index each={description}>
              {(item) => <span class="block mb-1">{item()}</span>}
            </Index>
          </p>
        )}
        {stack && (
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
        )}
      </div>
    </div>
  );
}

export default ListItem;
