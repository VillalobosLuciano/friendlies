export default function Facebook({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      className={className}
      {...props}
    >
      <title>{'Icon / Facebook'}</title>
      <path
        d="M20 10.061C20 4.504 15.523 0 10.001 0 4.477.001 0 4.504 0 10.062 0 15.083 3.657 19.245 8.436 20v-7.03H5.9v-2.908h2.54V7.844c0-2.52 1.494-3.913 3.777-3.913 1.095 0 2.238.196 2.238.196v2.475h-1.26c-1.242 0-1.63.776-1.63 1.572v1.887h2.773l-.442 2.907h-2.331v7.03C16.343 19.245 20 15.083 20 10.062Z"
        fill="#151313"
        fillRule="nonzero"
      />
    </svg>
  )
}
