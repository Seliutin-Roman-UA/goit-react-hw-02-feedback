import { Caption } from './Section.styled';

export function Section({ title, children }) {
  return (
    <section>
      <Caption>{title}</Caption>
      {children}
    </section>
  );
}
