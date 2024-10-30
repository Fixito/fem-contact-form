export function ErrorList({
  id,
  errors,
}: {
  id?: string;
  errors?: string[] | null;
}) {
  return errors?.length ? (
    <ul id={id} aria-live="polite" className="text-body-sm text-danger">
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  ) : null;
}
