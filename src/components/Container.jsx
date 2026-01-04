export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full
      px-4 sm:px-6 lg:px-8 xl:px-10
      max-w-7xl xl:max-w-[1680px] 2xl:max-w-[1840px]
      ${className}`}
    >
      {children}
    </div>
  )
}