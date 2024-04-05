const Badge = ({ text }: { text: string }) => {
  return (
    <span className="bg-red text-white px-2 py-1 text-center rounded-full block bg-primary-color">
      {text}
    </span>
  )
}

export default Badge
