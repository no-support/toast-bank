import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col p-3 bg-gray-300 mt-3">
      <span className="font-semibold">(주) 토스트 뱅크</span>
      <Link href={'/about'} className="text-toast-blue">
        오시는 길
      </Link>
      <span className="text-white text-xs">
        Copyright Toast Bank. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer
