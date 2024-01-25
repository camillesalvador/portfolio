import Link from './Link';
import { Index } from 'solid-js';

interface ListItemProps {
  side: string;
  title: string;
  description?: Array<string>;
  stack?: Array<string>;
  href?: string;
  logo?: string;
}

function ListItem(props: ListItemProps) {
  return (
    <div class="grid grid-cols-4 space-x-8">
      <div class="col-span-1">
        <p>{props.side}</p>
      </div>
      <div class="col-span-3">
        {props.logo && props.logo !== '' && (
          <img
            src={props.logo}
            alt={props.title}
            class="w-8 h-8 block mr-2 rounded-full mb-2"
          />
        )}
        {props.href ? (
          <Link href={props.href} text={props.title} />
        ) : (
          <p>{props.title}</p>
        )}
        {props.description && (
          <p class="my-2">
            <Index each={props.description}>
              {(item) => <span class="block mb-1">{item()}</span>}
            </Index>
          </p>
        )}
        {props.stack && (
          <p>
            <Index each={props.stack}>
              {(item, i) => (
                <span>
                  {item()}
                  {i < props.stack.length - 1 ? ' ⬩ ' : ''}
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
