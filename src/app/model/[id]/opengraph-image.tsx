import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation -> 네트워크탭에서 접근 불가.
export default async function Image() {
  // 비동기 통신으로 해당 모델 정보 가져다 가능.
  // params props를 통하여 query params 접근 가능.
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
          src={
            'https://ik.imagekit.io/miriya/tr:w-1200,c-at_max/mycar/hL0XAW5GmEpx7Vn5czGs.jpg'
          }
          alt=""
        />
      </div>
    ),
    {
      // ImageResponse options
      ...size,
    },
  );
}
