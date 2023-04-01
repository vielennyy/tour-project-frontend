
import {Box, Typography, Container} from '@mui/material';

import bagIcon from '../../assets/icons/Group 633.svg';
export const TextBanner = ():JSX.Element => {
  return(
    <Container sx={{
      width: '1440'
    }}>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: '80px'}}>
        <Typography sx={{
          fontSize: 46,
          fontWeight: 700,
          color: '#000000',
          textAlign: 'center'
        }}>Плануй подорож разом з нами</Typography>
        <Typography sx={{
          fontSize: 22,
          fontWeight: 400,
          color: '#000000',
          textAlign: 'center'
        }}>Ми надаємо бузліч можливостей для планування мандрівки:</Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginTop: '50px'
        }}>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <svg width="118" height="117" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_652_586)">
                <path d="M101.5 53.5C101.5 76.9721 82.4721 96 59 96C35.5279 96 16.5 76.9721 16.5 53.5C16.5 30.0279 35.5279 11 59 11C82.4721 11 101.5 30.0279 101.5 53.5Z" fill="#FAFAFA"/>
              </g>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2401 35.0278C60.9249 35.5955 60.9249 36.5158 60.2401 37.0834L40.2197 53.6791C39.5349 54.2468 38.4247 54.2468 37.7399 53.6791C37.0551 53.1115 37.0551 52.1912 37.7399 51.6235L57.7602 35.0278C58.445 34.4602 59.5553 34.4602 60.2401 35.0278Z" fill="#F17ACF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7601 35.0278C57.0753 35.5955 57.0753 36.5158 57.7601 37.0834L77.7804 53.6791C78.4652 54.2468 79.5754 54.2468 80.2602 53.6791C80.945 53.1115 80.945 52.1911 80.2602 51.6235L60.2399 35.0278C59.5551 34.4602 58.4448 34.4602 57.7601 35.0278Z" fill="#F17ACF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6396 73.375H57.3643C51.2279 73.375 48.1598 73.375 46.009 71.871C45.3144 71.3853 44.7036 70.7973 44.199 70.1288C42.6364 68.0587 42.6364 65.1058 42.6364 59.2V56.4969C42.6364 53.555 42.6364 52.084 43.1476 50.7581C43.3164 50.3205 43.5252 49.8982 43.7717 49.4962C44.5184 48.2782 45.7045 47.3506 48.0768 45.4955L59.0001 36.9531L69.9235 45.4955C72.2957 47.3506 73.4818 48.2782 74.2286 49.4962C74.475 49.8982 74.6838 50.3205 74.8526 50.7581C75.3639 52.084 75.3639 53.555 75.3639 56.4969V59.2C75.3639 65.1058 75.3639 68.0587 73.8013 70.1288C73.2966 70.7973 72.6858 71.3853 71.9912 71.871C69.8404 73.375 66.7735 73.375 60.6396 73.375ZM54.2955 64.4017C53.5048 64.4017 52.8637 65.0187 52.8637 65.7798C52.8637 66.541 53.5048 67.158 54.2955 67.158H63.6117C64.4025 67.158 65.0435 66.541 65.0435 65.7798C65.0435 65.0187 64.4025 64.4017 63.6117 64.4017H54.2955Z" fill="#F17ACF"/>
              <defs>
                <filter id="filter0_d_652_586" x="0.5" y="0" width="117" height="117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="5"/>
                  <feGaussianBlur stdDeviation="8"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.579167 0 0 0 0 0.579167 0 0 0 0 0.579167 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_652_586"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_652_586" result="shape"/>
                </filter>
              </defs>
            </svg>
            <Typography sx={{
              fontSize: 28,
              fontWeight: 600,
              color: '#000000',
              textAlign: 'center'
            }}>Шукай житло</Typography>
            <Typography sx={{
              fontSize: 18,
              fontWeight: 400,
              color: '#000000',
              textAlign: 'center'
            }}>На нашому порталі можна знайти комфортні варіанти житла на будь-який бюджет</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <svg width="118" height="117" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_652_595)">
                <circle cx="59" cy="53.5" r="42.5" fill="#FAFAFA"/>
              </g>
              <path d="M71.9761 62.5063C72.6819 64.1899 73.0452 67.8982 74.8009 69.4491H43.1991C44.9548 67.8982 45.318 64.1899 46.0239 62.5063C46.7297 60.8227 47.7643 59.293 49.0685 58.0044C50.3727 56.7159 51.9211 55.6938 53.6251 54.9964C55.3291 54.2991 57.1555 53.9401 59 53.9401C60.8444 53.9401 62.6708 54.299 64.3749 54.9964C66.0789 55.6938 67.6272 56.7159 68.9315 58.0044C70.2357 59.293 71.2702 60.8227 71.9761 62.5063Z" fill="#FFAA2B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M53.1908 53.9739C55.0323 53.2203 57.0063 52.8323 59 52.8323C60.9937 52.8323 62.9677 53.2203 64.8092 53.9739C66.6507 54.7276 68.3235 55.8319 69.7321 57.2237C71.1408 58.6154 72.2578 60.2673 73.0198 62.0847C73.2297 62.5855 73.4018 63.2031 73.5609 63.8053C73.6003 63.9545 73.6392 64.1041 73.6783 64.2542C73.804 64.7372 73.9308 65.2247 74.0777 65.7152C74.4757 67.045 74.937 68.079 75.5559 68.6257L77.742 70.5569H40.2579L42.4441 68.6257C43.0629 68.079 43.5243 67.045 43.9223 65.7152C44.0691 65.2247 44.196 64.7372 44.3217 64.2542C44.3608 64.1041 44.3997 63.9545 44.4391 63.8053C44.5982 63.2031 44.7702 62.5855 44.9802 62.0847C45.7421 60.2673 46.8592 58.6154 48.2678 57.2237C49.6765 55.8319 51.3493 54.7276 53.1908 53.9739ZM59 55.0479C57.3048 55.0479 55.626 55.3778 54.0594 56.0189C52.4929 56.66 51.0689 57.5999 49.8692 58.7852C48.6694 59.9706 47.7173 61.3782 47.0676 62.9279C46.9246 63.2689 46.7866 63.7462 46.6242 64.3613C46.5889 64.4946 46.5527 64.6338 46.5154 64.7774C46.388 65.267 46.2474 65.8074 46.088 66.3397C45.897 66.978 45.6603 67.6764 45.3407 68.3413H72.6593C72.3397 67.6764 72.103 66.978 71.9119 66.3397C71.7526 65.8074 71.612 65.267 71.4846 64.7773C71.4472 64.6338 71.411 64.4946 71.3758 64.3613C71.2134 63.7462 71.0754 63.2689 70.9324 62.9279C70.2827 61.3782 69.3306 59.9706 68.1308 58.7852C66.931 57.5999 65.5071 56.66 63.9405 56.0189C62.374 55.3778 60.6952 55.0479 59 55.0479Z" fill="#FFAA2B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.8472 69.4491C34.8472 68.5926 35.5546 67.8982 36.4273 67.8982H81.5726C82.4453 67.8982 83.1527 68.5926 83.1527 69.4491C83.1527 70.3056 82.4453 71 81.5726 71H36.4273C35.5546 71 34.8472 70.3056 34.8472 69.4491Z" fill="#FFAA2B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M58.9999 45.7425C59.8725 45.7425 60.58 46.4369 60.58 47.2934V52.8323C60.58 53.6889 59.8725 54.3832 58.9999 54.3832C58.1272 54.3832 57.4198 53.6889 57.4198 52.8323V47.2934C57.4198 46.4369 58.1272 45.7425 58.9999 45.7425Z" fill="#FFAA2B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1627 47.2934C55.1627 46.4369 55.8701 45.7425 56.7428 45.7425H61.2573C62.13 45.7425 62.8374 46.4369 62.8374 47.2934C62.8374 48.15 62.13 48.8443 61.2573 48.8443H56.7428C55.8701 48.8443 55.1627 48.15 55.1627 47.2934Z" fill="#FFAA2B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1602 38.4311L59.0811 38.4313C57.8345 38.436 56.82 37.448 56.8151 36.2243C56.8103 35.0007 57.8169 34.0049 59.0636 34.0002L59.1602 34L59.2568 34.0002C60.5035 34.0049 61.5102 35.0007 61.5053 36.2243C61.5005 37.448 60.4859 38.436 59.2393 38.4313L59.1602 38.4311ZM44.8635 41.0834C45.7416 41.952 45.736 43.3548 44.8511 44.2167L44.795 44.2715C43.9135 45.1367 42.4843 45.1367 41.6028 44.2715C40.7213 43.4062 40.7213 42.0034 41.6028 41.1382L41.6713 41.0712C42.5562 40.2094 43.9854 40.2148 44.8635 41.0834ZM73.4569 41.0834C74.335 40.2148 75.7642 40.2094 76.6492 41.0712L76.7176 41.1382C77.5992 42.0034 77.5992 43.4062 76.7176 44.2715C75.8361 45.1367 74.4069 45.1367 73.5254 44.2715L73.4694 44.2167C72.5844 43.3548 72.5789 41.952 73.4569 41.0834Z" fill="#FFAA2B"/>
              <defs>
                <filter id="filter0_d_652_595" x="0.5" y="0" width="117" height="117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="5"/>
                  <feGaussianBlur stdDeviation="8"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.579167 0 0 0 0 0.579167 0 0 0 0 0.579167 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_652_595"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_652_595" result="shape"/>
                </filter>
              </defs>
            </svg>
            <Typography sx={{
              fontSize: 28,
              fontWeight: 600,
              color: '#000000',
              textAlign: 'center'
            }}>Плануй вечерю</Typography>
            <Typography sx={{
              fontSize: 18,
              fontWeight: 400,
              color: '#000000',
              textAlign: 'center'
            }}>Ресторани, кафе та інші місця, де ти можеш скуштувати кулінарні шедеври від кращіх шефів</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <svg width="118" height="117" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_652_596)">
                <circle cx="59" cy="53.5" r="42.5" fill="#FAFAFA"/>
              </g>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M59 76C63.1111 76 77.5 64.75 77.5 51.25C77.5 37.75 69.2173 31 59 31C48.7827 31 40.5 37.75 40.5 51.25C40.5 64.75 54.8889 76 59 76ZM59.0001 40.2144C54.5159 40.2144 50.8807 44.004 50.8807 48.6787C50.8807 53.3534 54.5159 57.143 59.0001 57.143C63.4843 57.143 67.1195 53.3534 67.1195 48.6787C67.1195 44.004 63.4843 40.2144 59.0001 40.2144Z" fill="#7CDC50"/>
              <defs>
                <filter id="filter0_d_652_596" x="0.5" y="0" width="117" height="117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="5"/>
                  <feGaussianBlur stdDeviation="8"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.579167 0 0 0 0 0.579167 0 0 0 0 0.579167 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_652_596"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_652_596" result="shape"/>
                </filter>
              </defs>
            </svg>
            <Typography sx={{
              fontSize: 28,
              fontWeight: 600,
              color: '#000000',
              textAlign: 'center'
            }}>Бронюй тури</Typography>
            <Typography sx={{
              fontSize: 18,
              fontWeight: 400,
              color: '#000000',
              textAlign: 'center'
            }}>Безліч напрямків по всій області. Знайди місце, яке ти захочеш відвідати наступним</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={bagIcon}/>
            <Typography sx={{
              fontSize: 28,
              fontWeight: 600,
              color: '#000000',
              textAlign: 'center'
            }}>Подорожуй</Typography>
            <Typography sx={{
              fontSize: 18,
              fontWeight: 400,
              color: '#000000',
              textAlign: 'center'
            }}>Відкривай нові горизонти та досліджуй різнобарв'я і красу нашої країни із нами!</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}