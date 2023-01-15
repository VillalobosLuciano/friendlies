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
      <title>{"Vectors / Eye Scope"}</title>
      <path
        d="M50.5 37.6c11.5 0 22.2 4 29.5 11 .3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-7.3 7-18 11-29.5 11s-22.2-4-29.5-11c-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1 7.3-7 18-11 29.5-11Zm0 3.3c-4.9 0-8.8 4-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-3.9-8.8-8.8-8.8Zm-8.4.5c-6.8 1.3-13.1 4.1-17.9 8.3 4.8 4.1 11 7 17.9 8.3-2.1-2.1-3.4-5.1-3.4-8.3 0-3.2 1.3-6.2 3.4-8.3Zm16.8 0c2.1 2.1 3.4 5.1 3.4 8.3 0 3.2-1.3 6.2-3.4 8.3 6.8-1.3 13-4.2 17.9-8.3-4.8-4.1-11-7-17.9-8.3Zm-8.4 2.5c3.2 0 5.8 2.6 5.8 5.7 0 3.2-2.6 5.8-5.8 5.8-3.2 0-5.8-2.6-5.8-5.8 0-1.3.4-2.4 1.1-3.4v.1c0 1.2.9 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1-.7-1.8-1.6-2 .6-.3 1.3-.4 2.1-.4Zm-35-13.5c.8 0 1.5-.7 1.5-1.5V17h11.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H15.5c-.8 0-1.5.7-1.5 1.5v13.4c0 .9.7 1.5 1.5 1.5ZM85.4 14H72c-.8 0-1.5.7-1.5 1.5S71.2 17 72 17h11.9v11.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V15.5c0-.8-.6-1.5-1.5-1.5ZM29 82.4H17.1V70.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v13.4c0 .8.7 1.5 1.5 1.5H29c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5Zm56.4-13.5c-.8 0-1.5.7-1.5 1.5v11.9H72c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.4c.8 0 1.5-.7 1.5-1.5V70.4c0-.8-.6-1.5-1.5-1.5Z"
        fill="#151313"
        fillRule="evenodd"
      />
    </svg>
  );
}
