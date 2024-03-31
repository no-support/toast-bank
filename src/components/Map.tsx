/*global kakao*/
import Script from 'next/script'

declare global {
  interface Window {
    kakao: any
  }
}

const Map = () => {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map')
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.50006, 127.03294),
        level: 3,
      }
      const map = new window.kakao.maps.Map(mapContainer, mapOption)
      const markerPosition = new window.kakao.maps.LatLng(37.50006, 127.03294)
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      })
      marker.setMap(map)
    })
  }
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        strategy="afterInteractive"
        onReady={loadKakaoMap}
      />
      <div id="map" className="h-96 bg-gray-300 rounded-lg"></div>
    </>
  )
}

export default Map
