/*
 * The bag prints its product line as small caps between two hairlines:
 *
 *     ---- R3 STRUCTURAL ----
 *
 * That mark is reused as the heading marker for every section, so the page is
 * signposted in the product's own typography rather than a generic label.
 */
type Props = {
  children: string;
  /** Set on the green band, where the rule and text have to be white. */
  onGreen?: boolean;
};

const Eyebrow = ({ children, onGreen = false }: Props) => (
  <p className={`eyebrow${onGreen ? ' eyebrow--onGreen' : ''}`}>{children}</p>
);

export default Eyebrow;
