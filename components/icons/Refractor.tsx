export default function Refractor({
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
      <title>{'Vectors / Refractor'}</title>
      <path
        d="M93.6 73.7c1.9-3.3 3-7.2 3-11.3 0-4.1-1.1-7.9-3-11.3V51s0-.1-.1-.1c-2-3.4-4.8-6.2-8.2-8.2 0 0-.1 0-.1-.1h-.1c-3.3-1.9-7.2-3-11.3-3-1.8 0-3.5.2-5.1.6v-6.1h11.2c.8 0 1.5-.7 1.5-1.5v-5.8c0-.8-.7-1.5-1.5-1.5H56.6v-9.8c0-.8-.7-1.5-1.5-1.5H44.5c-.8 0-1.5.7-1.5 1.5v9.8H19.7c-.8 0-1.5.7-1.5 1.5v5.8c0 .8.7 1.5 1.5 1.5h11.2v6.1c-1.6-.4-3.4-.6-5.1-.6-4.1 0-7.9 1.1-11.3 3h-.1s-.1 0-.1.1c-3.4 2-6.2 4.8-8.2 8.2 0 0 0 .1-.1.1v.1c-1.9 3.3-3 7.2-3 11.3 0 4.1 1.1 7.9 3 11.3v.1l.1.1c2 3.4 4.8 6.2 8.2 8.2 0 0 .1 0 .1.1h.1c3.3 1.9 7.2 3 11.3 3 4.1 0 8-1.1 11.3-3h.1s.1 0 .1-.1c3.4-2 6.2-4.8 8.2-8.2l.1-.1v-.1c1.9-3.3 3-7.2 3-11.3 0-3-.6-5.8-1.6-8.4h6c-1 2.6-1.6 5.4-1.6 8.4 0 4.1 1.1 7.9 3 11.3v.1l.1.1c2 3.4 4.8 6.2 8.2 8.2 0 0 .1 0 .1.1h.1c3.3 1.9 7.2 3 11.3 3 4.1 0 8-1.1 11.3-3h.1s.1 0 .1-.1c3.4-2 6.2-4.8 8.2-8.2l.1-.1c-.5 0-.5 0-.4-.1Zm-21.3 4.7v3.7c-2.5-.2-4.9-.8-7-1.9l1.9-3.2c1.5.8 3.3 1.3 5.1 1.4Zm3 0c1.8-.2 3.6-.7 5.2-1.4l1.9 3.2c-2.2 1-4.5 1.7-7 1.9v-3.7h-.1Zm-1.5-2.9c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13ZM54.1 64h3.7c.2 1.8.7 3.6 1.4 5.2L56 71.1c-1-2.2-1.7-4.6-1.9-7.1Zm-10.8 7-3.2-1.9c.7-1.6 1.2-3.3 1.4-5.2h3.7c-.2 2.6-.8 5-1.9 7.1Zm-19.2 7.4v3.7c-2.5-.2-4.9-.8-7-1.9L19 77c1.5.8 3.2 1.3 5.1 1.4Zm3 0c1.8-.2 3.6-.7 5.2-1.4l1.9 3.2c-2.2 1-4.5 1.7-7 1.9v-3.7h-.1Zm-1.5-2.9c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.9 13-13 13ZM5.9 64h3.7c.2 1.8.7 3.6 1.4 5.2l-3.2 1.9c-1.1-2.2-1.7-4.6-1.9-7.1Zm1.9-10.1 3.2 1.9c-.7 1.6-1.2 3.3-1.4 5.2H5.9c.2-2.5.8-4.9 1.9-7.1ZM32.4 44c.3.1.7.2 1 .4.2.1.5.2.7.3l-1.9 3.2c-1.6-.7-3.3-1.2-5.2-1.4v-3.7c1.9.2 3.7.6 5.4 1.2Zm2.4 5.4 1.9-3.2h.1c.1.1.2.2.3.2l1.2.9.3.3c.4.3.7.7 1.1 1l.4.4c.3.3.6.6.9 1 .2.2.3.5.5.7.1.2.3.4.4.6l-3.2 1.9c-1.1-1.4-2.4-2.7-3.9-3.8Zm-10.7-2.9c-1.8.2-3.6.7-5.2 1.4L17 44.7c2.2-1 4.5-1.7 7-1.9v3.7h.1ZM41.5 61c-.2-1.8-.7-3.6-1.4-5.2l3.2-1.9c1 2.2 1.7 4.5 1.9 7h-3.7v.1Zm4.4-32.4c.7 1.5 2.1 2.5 3.8 2.5 1.7 0 3.2-1 3.8-2.5v22.5h-7.6V28.6Zm2.6-1.7c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2ZM66 44.4c.3-.1.7-.3 1-.4 1.7-.6 3.5-1 5.3-1.2v3.7c-1.8.2-3.6.7-5.2 1.4l-1.9-3.2c.3-.1.6-.2.8-.3Zm9.3 2.1v-3.7c2.5.2 4.9.8 7 1.9l-1.9 3.2c-1.5-.7-3.3-1.2-5.1-1.4Zm-14.5 6.7-3.2-1.9c.1-.2.3-.4.4-.6.2-.2.3-.5.5-.7.3-.3.6-.7.9-1l.4-.4c.3-.4.7-.7 1.1-1l.3-.3 1.2-.9c.1-.1.2-.2.3-.2h.1l1.9 3.2c-1.6 1.1-2.9 2.4-3.9 3.8Zm-1.5 2.6c-.7 1.6-1.2 3.3-1.4 5.2h-3.7c.2-2.5.8-4.9 1.9-7l3.2 1.8ZM93.5 61h-3.7c-.2-1.8-.7-3.6-1.4-5.2l3.2-1.9c1 2.2 1.7 4.6 1.9 7.1Zm-3.7 3h3.7c-.2 2.5-.8 4.9-1.9 7l-3.2-1.9c.7-1.6 1.2-3.3 1.4-5.1Zm.3-12.7-3.2 1.9c-1-1.5-2.3-2.7-3.8-3.8l1.9-3.2c2 1.4 3.7 3.1 5.1 5.1ZM78.3 28.4v2.8H67.1c-.8 0-1.5.7-1.5 1.5v8.6c-.1 0-.2.1-.3.1-.3.1-.5.2-.7.3l-.6.3c-.1.1-.3.1-.4.2l-1.2.6h-.1c-2.2 1.3-4.2 2.9-5.9 4.9V28.4h21.9ZM53.5 17.1v8.1c-.7-1.5-2.1-2.5-3.8-2.5-1.7 0-3.2 1-3.8 2.5v-8.1h7.6ZM33.7 41.2v-8.6c0-.8-.7-1.5-1.5-1.5H21v-2.8h21.8v19.3c-1.7-2-3.7-3.6-5.9-4.9h-.1l-1.2-.6c-.1-.1-.3-.1-.4-.2l-.6-.3c-.2-.1-.5-.2-.7-.3 0 0-.1 0-.2-.1Zm-19.3 5 1.9 3.2c-1.5 1-2.7 2.3-3.8 3.8l-3.2-1.9c1.4-2 3.1-3.7 5.1-5.1ZM9.3 73.6l3.2-1.9c1 1.5 2.3 2.7 3.8 3.8l-1.9 3.2c-2-1.3-3.7-3.1-5.1-5.1Zm27.4 5.2-1.9-3.2c1.5-1 2.7-2.3 3.8-3.8l3.2 1.9c-1.3 1.9-3.1 3.7-5.1 5.1Zm20.8-5.2 3.2-1.9c1 1.5 2.3 2.7 3.8 3.8l-1.9 3.2c-1.9-1.3-3.7-3.1-5.1-5.1ZM85 78.8l-1.9-3.2c1.5-1 2.7-2.3 3.8-3.8l3.2 1.9c-1.4 1.9-3.1 3.7-5.1 5.1Z"
        fill="#151313"
        fillRule="evenodd"
      />
    </svg>
  )
}