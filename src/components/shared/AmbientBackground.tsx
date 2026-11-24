/** Slow, soft color glows behind the page in light mode. Pure CSS (see `.ambient` in globals.css). */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="ambient">
      <span />
      <span />
      <span />
    </div>
  );
}
