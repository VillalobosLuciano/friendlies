export default function Laptop({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={100}
      height={100}
      className={className}
      {...props}
    >
      <title>{"Vectors / Clipboard"}</title>
      <path
        d="M55.5 6c.8 0 1.5.7 1.5 1.5v2.4h4.7c.8 0 1.5.7 1.5 1.5v1.9h13.5c2.3 0 4.1 1.8 4.1 4.1v72.1c0 2.3-1.8 4.1-4.1 4.1H24.1c-2.3 0-4.1-1.8-4.1-4.1V17.4c0-2.3 1.8-4.1 4.1-4.1h13.5v-1.9c0-.8.7-1.5 1.5-1.5h4.7V7.5c0-.8.7-1.5 1.5-1.5ZM26.7 16.3h-2.6c-.6 0-1.1.5-1.1 1.1v72.1c0 .6.5 1.1 1.1 1.1h52.6c.6 0 1.1-.5 1.1-1.1V17.4c0-.6-.5-1.1-1.1-1.1h-2.6v62.5c0 .8-.7 1.5-1.5 1.5H28.2c-.8 0-1.5-.7-1.5-1.5V16.3Zm10.9 0h-7.8v61h41.4v-61h-7.9v3.4c0 .8-.7 1.5-1.5 1.5H39.1c-.8 0-1.5-.7-1.5-1.5v-3.4Zm27.3 44.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H36c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5Zm0-7.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H36c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5Zm0-7.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H36c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5Zm0-7.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H36c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5Zm0-7.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H36c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5Zm-4.7-17.3H40.5v5.3h19.7v-5.3ZM54 9h-7.2v.9H54V9Z"
        fill="#151313"
        fillRule="evenodd"
      />
    </svg>
  );
}
