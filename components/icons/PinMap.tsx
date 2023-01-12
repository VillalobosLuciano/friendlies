export default function PinMap({
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
      <title>{'Icon / PinMap'}</title>
      <path
        d="M6 11a.5.5 0 1 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 1 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4a.5.5 0 0 1 .4-.2H6Zm5.986-7.334A4 4 0 0 1 8.5 7.97v5.53a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4.005 4.2L4 4a4 4 0 0 1 7.986-.333ZM8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        fill="#151313 | currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}
