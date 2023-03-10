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
      <title>{"Vectors / Medicine"}</title>
      <path
        d="M84.46 27.6V16.5c0-.8-.7-1.5-1.5-1.5h-26.3c-.8 0-1.5.7-1.5 1.5v11.1c-4.8 1.1-8.4 5.5-8.4 10.6v35.2c0 6 4.9 10.9 10.9 10.9h24.2c6 0 10.9-4.9 10.9-10.9V38.2c.1-5.1-3.5-9.4-8.3-10.6Zm-3-.3h-2V18h2v9.3Zm-7.4 0V18h2.4v9.3h-2.4Zm-5.4 0V18h2.4v9.3h-2.4Zm-5.4 0V18h2.4v9.3h-2.4Zm-5-9.3h2v9.3h-2V18Zm-.5 12.3h24.2c4.4 0 7.9 3.5 7.9 7.9v3.4h-40v-3.4c0-4.3 3.6-7.9 7.9-7.9Zm32.1 39.4h-40V44.6h40v25.1Zm-7.9 11.6h-24.2c-4.4 0-7.9-3.5-7.9-7.9v-.7h40v.7c0 4.4-3.5 7.9-7.9 7.9Zm-43.9-8.5h-11l.2-.1c2.1-1.5 2.6-4.3 1.1-6.4-1.5-2.1-4.3-2.6-6.4-1.1l-12 8.4c-1 .7-1.7 1.8-1.9 3-.2 1.2.1 2.4.8 3.4.7 1 1.8 1.7 3 1.9.3 0 .5.1.8.1.9 0 1.8-.3 2.6-.8l3.8-2.6c.5 2 2.3 3.5 4.4 3.5h14.7c2.5 0 4.6-2.1 4.6-4.6 0-2.5-2.2-4.7-4.7-4.7Zm-14.4-5.1c.3-.2.6-.3.9-.3.5 0 1 .2 1.3.7.5.7.3 1.7-.4 2.2l-4.8 3.4-1.8-2.6 4.8-3.4Zm-10.2 11c-.3.2-.8.3-1.2.3-.4-.1-.8-.3-1-.6-.2-.3-.3-.8-.3-1.2.1-.4.3-.8.6-1l4.8-3.4 1.8 2.6-4.7 3.3Zm8.3-1.3c0-.9.7-1.6 1.6-1.6h5.8V79h-5.8c-.9 0-1.6-.7-1.6-1.6Zm16.3 1.6h-5.8v-3.2h5.8c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6Z"
        fill="#151313"
        fillRule="evenodd"
      />
    </svg>
  );
}
