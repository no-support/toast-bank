interface ButtonProps {
  css?: string
  children: React.ReactNode
}

const Button = ({ css, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`p-2 bg-toast-blue rounded-md text-white font-bold ${css}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
