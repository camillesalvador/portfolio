import { createSignal, onMount, onCleanup } from 'solid-js';

function FadeIn(props: any) {
  const [isVisible, setVisible] = createSignal(false);
  let domRef: HTMLDivElement | undefined;

  const checkPosition = () => {
    if (domRef) {
      const elementPosition = domRef.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      setVisible(scrollY >= elementPosition - windowHeight);
    }
  };

  onMount(() => {
    window.addEventListener('scroll', checkPosition);
    checkPosition();
  });

  onCleanup(() => {
    window.removeEventListener('scroll', checkPosition);
  });

  return (
    <div class={`fade-in ${isVisible() ? 'is-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
}

export default FadeIn;
