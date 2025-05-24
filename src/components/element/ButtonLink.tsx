import Link from 'next/link'

export function ButtonLink({
  href,
  text,
}: {href:string, text:string} ) {
  return (
    <Link
      href={href}
      className="rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white "
    >
      {text}
    </Link>
  );
}