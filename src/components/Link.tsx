import ArrowUpRight from '../icons/ArrowUpRight';

function Link({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      class="inline-flex items-center font-bold hover:underline underline-offset-2"
    >
      <span class="font-bold inline">
        {text}
        <ArrowUpRight />
      </span>
    </a>
  );
}

export default Link;
