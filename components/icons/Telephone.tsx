export default function Instagram({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      className={className}
      {...props}
    >
      <title>{'Icon / Telephone'}</title>
      <path
        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.66 1.169-.45 1.77a17.566 17.566 0 0 0 4.168 6.607 17.569 17.569 0 0 0 6.608 4.168c.601.21 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.061a1.745 1.745 0 0 1-.46-1.656l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328ZM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.33.423.445.974.315 1.494l-.547 2.19c-.057.23.01.474.178.643l2.457 2.456a.678.678 0 0 0 .644.178l2.19-.547c.519-.13 1.07-.014 1.493.315l2.306 1.794c.829.645.905 1.87.163 2.61l-1.034 1.035c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.632 18.632 0 0 1-4.42-7.008c-.362-1.03-.037-2.137.703-2.877L1.885.511Z"
        fill="#151313 | currentColor"
        fillRule="nonzero"
      />
    </svg>
  )
}
