export const styles = {
  container: `
    padding: 2rem;
    padding-bottom: 5rem;
    gap: 4rem;
    font-family: var(--font-geist-sans);
    @media (min-width: 640px) {
      padding: 5rem;
    }
  `,
  flexRow: `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  flexColumn: `
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    gap: 1.25rem;
  `,
  heading: `
    font-size: 3.75rem;
    font-weight: 700;
    width: 66.666667%;
    line-height: 1.2;
  `,
  subheading: `
    font-size: 1.5rem;
  `,
  button: `
    padding: 0.5rem 1.25rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: fit-content;
    background-color: #e6ab09;
    border-radius: 0.375rem;
    text-transform: 'none;
    &:hover {
      background-color: #d19c08;
    }
  `,
  imageContainer: `
    flex-basis: 50%;
  `,
}
