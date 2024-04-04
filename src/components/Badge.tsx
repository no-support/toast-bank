const Badge = ({ text }: { text: string }) => {
  return (
    <span className="bg-red text-white px-2 py-1 text-center rounded-full block bg-toast-blue">
      {text}
    </span>
  )
}

export default Badge
