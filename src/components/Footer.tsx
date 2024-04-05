import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col p-3 bg-gray-300 mt-3">
      <span className="font-semibold">(주) 토스트 뱅크</span>
      <ul
        className="flex items-center [&>li:not(:first-child)]:before:content-['|']
      [&>li:not(:first-child)]:before:px-2.5
      [&>li:not(:first-child)]:my-0
      "
      >
        <li>
          <Link href={'/faq'} className="text-primary-color">
            FAQ
          </Link>
        </li>
        <li>
          <Link href={'/about'} className="text-primary-color">
            오시는 길
          </Link>
        </li>
      </ul>
      <span className="text-white text-xs">
        Copyright Toast Bank. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer
