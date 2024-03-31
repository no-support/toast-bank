import Image from 'next/image'

const About = () => {
  return (
    <div className="p-3 w-full">
      <div className="header font-semibold h-10 flex justify-start items-center">
        기본 정보
      </div>
      <div className="map  ">
        {/* <img
          src="http://via.placeholder.com/320x240"
          alt="tempImage"
          className="  rounded-lg"
        /> */}
        <div className="h-96 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="h-4  "></div>
      <table className="w-full">
        <tbody className="text-center">
          <tr className="address h-10 ">
            <td className="text-gray-400 w-1/6">주소</td>
            <td className="w-5/6">
              대한민국 서울특별시 강남구 테헤란로 131, 13층
            </td>
          </tr>
          <tr className="tel h-10">
            <td className="text-gray-400 w-1/6">전화</td>
            <td className="w-5/6">1661-7654</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default About
