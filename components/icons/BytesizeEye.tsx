export default function BytesizeEye({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 19"
      width={26}
      height={19}
      className={className}
      {...props}
    >
      <title>{'BytesizeEye'}</title>
      <g
        transform="translate(1 1)"
        stroke="#000"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={12.857} cy={7.714} r={1} />
        <circle cx={12} cy={8.571} r={5.143} />
        <path d="M0 8.571S4.286 0 12 0s12 8.571 12 8.571-4.286 8.572-12 8.572S0 8.57 0 8.57Z" />
      </g>
    </svg>
  )
}
