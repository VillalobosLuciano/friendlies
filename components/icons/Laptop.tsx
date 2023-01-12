export default function Laptop({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 18"
      width={24}
      height={18}
      className={className}
      {...props}
    >
      <title>{'Icon / Laptop'}</title>
      <path
        d="M20.25 1.5a.75.75 0 0 1 .75.75V13.5H3V2.25a.75.75 0 0 1 .75-.75h16.5ZM3.75 0A2.25 2.25 0 0 0 1.5 2.25V15h21V2.25A2.25 2.25 0 0 0 20.25 0H3.75ZM0 15.75h24A2.25 2.25 0 0 1 21.75 18H2.25A2.25 2.25 0 0 1 0 15.75Z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  )
}
