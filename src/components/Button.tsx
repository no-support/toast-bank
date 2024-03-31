interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`p-2 bg-toast-blue rounded-md text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
