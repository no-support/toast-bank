import Map from '@/components/Map'

const AboutPage = () => {
  return (
    <div className="p-3 space-y-2">
      <div className="title font-semibold flex justify-start items-center">
        기본 정보
      </div>
      <Map />
      <table className="w-full border-separate border-spacing-y-4">
        <tbody className="text-center">
          <tr className="address">
            <td className="text-gray-400 w-1/6">주소</td>
            <td className="w-5/6">
              대한민국 서울특별시 강남구 테헤란로 131, 13층
            </td>
          </tr>
          <tr className="tel">
            <td className="text-gray-400 w-1/6">전화</td>
            <td className="w-5/6">1661-7654</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AboutPage
