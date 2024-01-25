import ArrowUpRight from '../icons/ArrowUpRight';

function Link(props: { href: string; text: string }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener"
      class="inline-flex items-center font-bold hover:underline underline-offset-2"
    >
      <span class="font-bold inline">
        {props.text}
        <ArrowUpRight />
      </span>
    </a>
  );
}

export default Link;
