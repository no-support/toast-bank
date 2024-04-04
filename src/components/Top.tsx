interface TopProps {
  title: string
  subTitle: string
}

const Top = ({ title, subTitle }: TopProps) => {
  return (
    <div className="flex flex-col">
      <span className="font-semibold text-lg">{title}</span>
      <span className="text-sm">{subTitle}</span>
    </div>
  )
}

export default Top
