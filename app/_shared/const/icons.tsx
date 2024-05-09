import { SVGProps } from 'react'

export const icons = {
    bars: (props: SVGProps<SVGSVGElement>) => (
        <svg width='32' height='27' viewBox='0 0 32 27' fill='none' {...props}>
            <path d='M0 1.5L32 1.5' stroke='white' strokeWidth='2' />
            <path d='M0 13.5L32 13.5' stroke='white' strokeWidth='2' />
            <path d='M0 25.5H32' stroke='white' strokeWidth='2' />
        </svg>
    ),
    facebook: (props: SVGProps<SVGSVGElement>) => (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
            <g clipPath='url(#clip0_134_9045)'>
                <path
                    d='M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z'
                    fill='white'
                />
            </g>
            <defs>
                <clipPath id='clip0_134_9045'>
                    <rect width='20' height='20' fill='white' />
                </clipPath>
            </defs>
        </svg>
    ),
    linkedin: (props: SVGProps<SVGSVGElement>) => (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
            <g clipPath='url(#clip0_134_9051)'>
                <path
                    d='M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z'
                    fill='white'
                />
            </g>
            <defs>
                <clipPath id='clip0_134_9051'>
                    <rect width='20' height='20' fill='white' />
                </clipPath>
            </defs>
        </svg>
    ),
    twitter: (props: SVGProps<SVGSVGElement>) => (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
            <path
                d='M6.2918 18.1256C13.8371 18.1256 17.9652 11.8729 17.9652 6.45216C17.9652 6.27638 17.9613 6.09669 17.9535 5.92091C18.7566 5.34016 19.4496 4.62082 20 3.79669C19.2521 4.12944 18.458 4.34676 17.6449 4.44122C18.5011 3.92803 19.1421 3.12184 19.4492 2.17208C18.6438 2.64941 17.763 2.98612 16.8445 3.16779C16.2257 2.51024 15.4075 2.07487 14.5164 1.92899C13.6253 1.7831 12.711 1.93482 11.9148 2.36069C11.1186 2.78656 10.4848 3.46286 10.1115 4.28504C9.73825 5.10721 9.64619 6.02946 9.84961 6.90919C8.21874 6.82735 6.62328 6.4037 5.16665 5.66569C3.71002 4.92769 2.42474 3.89181 1.39414 2.62521C0.870333 3.52831 0.710047 4.59698 0.945859 5.61402C1.18167 6.63106 1.79589 7.52015 2.66367 8.1006C2.01219 8.07991 1.37498 7.90451 0.804688 7.58888V7.63966C0.804104 8.5874 1.13175 9.5061 1.73192 10.2396C2.3321 10.9731 3.16777 11.4761 4.09687 11.6631C3.49338 11.8282 2.85999 11.8523 2.2457 11.7334C2.50788 12.5485 3.01798 13.2614 3.70481 13.7726C4.39164 14.2838 5.22093 14.5678 6.07695 14.585C4.62369 15.7265 2.82848 16.3457 0.980469 16.3428C0.652739 16.3423 0.325333 16.3222 0 16.2826C1.87738 17.4871 4.06128 18.1268 6.2918 18.1256Z'
                fill='white'
            />
        </svg>
    ),
    location: (props: SVGProps<SVGSVGElement>) => (
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' {...props}>
            <path
                d='M23.5453 22.2089L23.8988 22.5625L23.8988 22.5625L23.5453 22.2089ZM17.8879 27.8663L18.2413 28.22L18.2415 28.2198L17.8879 27.8663ZM14.1186 27.8663L13.7651 28.2199L13.7652 28.22L14.1186 27.8663ZM8.45994 22.2089L8.10638 22.5625L8.10643 22.5625L8.45994 22.2089ZM11.5026 14.6663C11.5026 15.8597 11.9767 17.0043 12.8206 17.8482L13.5277 17.1411C12.8714 16.4848 12.5026 15.5945 12.5026 14.6663H11.5026ZM12.8206 17.8482C13.6645 18.6922 14.8091 19.1663 16.0026 19.1663V18.1663C15.0743 18.1663 14.1841 17.7975 13.5277 17.1411L12.8206 17.8482ZM16.0026 19.1663C17.1961 19.1663 18.3407 18.6922 19.1846 17.8482L18.4775 17.1411C17.8211 17.7975 16.9309 18.1663 16.0026 18.1663V19.1663ZM19.1846 17.8482C20.0285 17.0043 20.5026 15.8597 20.5026 14.6663H19.5026C19.5026 15.5945 19.1339 16.4848 18.4775 17.1411L19.1846 17.8482ZM20.5026 14.6663C20.5026 13.4728 20.0285 12.3282 19.1846 11.4843L18.4775 12.1914C19.1339 12.8478 19.5026 13.738 19.5026 14.6663H20.5026ZM19.1846 11.4843C18.3407 10.6404 17.1961 10.1663 16.0026 10.1663V11.1663C16.9309 11.1663 17.8211 11.535 18.4775 12.1914L19.1846 11.4843ZM16.0026 10.1663C14.8091 10.1663 13.6645 10.6404 12.8206 11.4843L13.5277 12.1914C14.1841 11.535 15.0743 11.1663 16.0026 11.1663V10.1663ZM12.8206 11.4843C11.9767 12.3282 11.5026 13.4728 11.5026 14.6663H12.5026C12.5026 13.738 12.8714 12.8478 13.5277 12.1914L12.8206 11.4843ZM23.1917 21.8554L17.5344 27.5127L18.2415 28.2198L23.8988 22.5625L23.1917 21.8554ZM17.5346 27.5125C17.1283 27.9184 16.5775 28.1464 16.0033 28.1464V29.1464C16.8426 29.1464 17.6475 28.8132 18.2413 28.22L17.5346 27.5125ZM16.0033 28.1464C15.429 28.1464 14.8783 27.9184 14.472 27.5125L13.7652 28.22C14.359 28.8132 15.164 29.1464 16.0033 29.1464V28.1464ZM14.4721 27.5127L8.81345 21.8553L8.10643 22.5625L13.7651 28.2199L14.4721 27.5127ZM8.81351 21.8554C7.39172 20.4335 6.42349 18.622 6.03125 16.6499L5.05046 16.845C5.48129 19.0111 6.54475 21.0008 8.10638 22.5625L8.81351 21.8554ZM6.03125 16.6499C5.63901 14.6778 5.84038 12.6336 6.60988 10.7759L5.68601 10.3932C4.84081 12.4336 4.61964 14.6789 5.05046 16.845L6.03125 16.6499ZM6.60988 10.7759C7.37939 8.91825 8.68248 7.33046 10.3544 6.21336L9.7988 5.38188C7.96247 6.60887 6.5312 8.35283 5.68601 10.3932L6.60988 10.7759ZM10.3544 6.21336C12.0263 5.09625 13.9919 4.5 16.0026 4.5V3.5C13.7941 3.5 11.6351 4.1549 9.7988 5.38188L10.3544 6.21336ZM16.0026 4.5C18.0134 4.5 19.979 5.09625 21.6509 6.21336L22.2064 5.38188C20.3701 4.1549 18.2111 3.5 16.0026 3.5V4.5ZM21.6509 6.21336C23.3227 7.33046 24.6258 8.91825 25.3953 10.7759L26.3192 10.3932C25.474 8.35283 24.0428 6.60887 22.2064 5.38188L21.6509 6.21336ZM25.3953 10.7759C26.1648 12.6336 26.3662 14.6778 25.974 16.6499L26.9548 16.845C27.3856 14.6789 27.1644 12.4336 26.3192 10.3932L25.3953 10.7759ZM25.974 16.6499C25.5817 18.622 24.6135 20.4335 23.1917 21.8554L23.8988 22.5625C25.4605 21.0008 26.5239 19.0111 26.9548 16.845L25.974 16.6499Z'
                fill='white'
            />
        </svg>
    ),
    phone: (props: SVGProps<SVGSVGElement>) => (
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' {...props}>
            <path
                d='M7.84574 5.33398V4.83398V5.33398ZM12.8653 5.33398L13.3296 5.14829C13.2537 4.95846 13.0698 4.83398 12.8653 4.83398V5.33398ZM15.3752 11.6085L15.6324 12.0372C15.8428 11.911 15.9305 11.6507 15.8394 11.4228L15.3752 11.6085ZM12.2379 13.4908L11.9807 13.0621C11.7575 13.196 11.6744 13.4786 11.7895 13.712L12.2379 13.4908ZM18.5124 19.7654L18.2913 20.2138C18.5246 20.3289 18.8073 20.2457 18.9412 20.0226L18.5124 19.7654ZM20.3948 16.6281L20.5805 16.1639C20.3526 16.0727 20.0923 16.1604 19.966 16.3709L20.3948 16.6281ZM26.6693 19.1379H27.1693C27.1693 18.9335 27.0448 18.7496 26.855 18.6737L26.6693 19.1379ZM24.1595 26.6673L24.1291 27.1664C24.1392 27.167 24.1494 27.1673 24.1595 27.1673V26.6673ZM5.33594 7.84379H4.83594C4.83594 7.85391 4.83624 7.86402 4.83686 7.87412L5.33594 7.84379ZM7.84574 5.83398H12.8653V4.83398H7.84574V5.83398ZM12.4011 5.51968L14.9109 11.7942L15.8394 11.4228L13.3296 5.14829L12.4011 5.51968ZM15.1179 11.1797L11.9807 13.0621L12.4951 13.9196L15.6324 12.0372L15.1179 11.1797ZM11.7895 13.712C13.1821 16.5358 15.4675 18.8212 18.2913 20.2138L18.7336 19.3169C16.1072 18.0217 13.9816 15.896 12.6863 13.2697L11.7895 13.712ZM18.9412 20.0226L20.8235 16.8854L19.966 16.3709L18.0837 19.5081L18.9412 20.0226ZM20.2091 17.0923L26.4836 19.6021L26.855 18.6737L20.5805 16.1639L20.2091 17.0923ZM26.1693 19.1379V24.1575H27.1693V19.1379H26.1693ZM26.1693 24.1575C26.1693 24.6905 25.9575 25.2017 25.5806 25.5787L26.2877 26.2858C26.8522 25.7213 27.1693 24.9558 27.1693 24.1575H26.1693ZM25.5806 25.5787C25.2037 25.9556 24.6925 26.1673 24.1595 26.1673V27.1673C24.9577 27.1673 25.7233 26.8502 26.2877 26.2858L25.5806 25.5787ZM24.1898 26.1682C19.4167 25.8782 14.9147 23.8512 11.5334 20.4699L10.8262 21.177C14.3803 24.7311 19.1122 26.8615 24.1291 27.1664L24.1898 26.1682ZM11.5334 20.4699C8.15201 17.0886 6.12508 12.5866 5.83502 7.81346L4.83686 7.87412C5.14174 12.8911 7.27219 17.623 10.8262 21.177L11.5334 20.4699ZM5.83594 7.84379C5.83594 7.31076 6.04768 6.79955 6.4246 6.42264L5.71749 5.71554C5.15304 6.27998 4.83594 7.04554 4.83594 7.84379H5.83594ZM6.4246 6.42264C6.80151 6.04573 7.31271 5.83398 7.84574 5.83398V4.83398C7.04749 4.83398 6.28194 5.15109 5.71749 5.71554L6.4246 6.42264Z'
                fill='white'
            />
        </svg>
    ),
    arrow: (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z'
                fill='white'
            />
        </svg>
    ),
    play: (props: SVGProps<SVGSVGElement>) => (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none' {...props}>
            <path
                d='M31.668 51.9466V28.0533C31.6685 27.7544 31.7494 27.461 31.9022 27.2041C32.055 26.9472 32.2741 26.7361 32.5365 26.5929C32.799 26.4498 33.0951 26.3798 33.3939 26.3905C33.6926 26.4011 33.983 26.4919 34.2346 26.6533L52.8213 38.5966C53.0566 38.7474 53.2503 38.955 53.3844 39.2002C53.5185 39.4454 53.5888 39.7205 53.5888 40C53.5888 40.2795 53.5185 40.5545 53.3844 40.7997C53.2503 41.045 53.0566 41.2525 52.8213 41.4033L34.2346 53.35C33.983 53.5114 33.6926 53.6022 33.3939 53.6128C33.0951 53.6234 32.799 53.5535 32.5365 53.4103C32.2741 53.2672 32.055 53.0561 31.9022 52.7992C31.7494 52.5422 31.6685 52.2489 31.668 51.95V51.9466Z'
                fill='white'
            />
            <path
                d='M3.33203 39.9992C3.33203 19.7492 19.7487 3.33252 39.9987 3.33252C60.2487 3.33252 76.6654 19.7492 76.6654 39.9992C76.6654 60.2492 60.2487 76.6659 39.9987 76.6659C19.7487 76.6659 3.33203 60.2492 3.33203 39.9992ZM39.9987 8.33252C31.6002 8.33252 23.5456 11.6688 17.607 17.6075C11.6683 23.5461 8.33203 31.6007 8.33203 39.9992C8.33203 48.3977 11.6683 56.4523 17.607 62.3909C23.5456 68.3296 31.6002 71.6659 39.9987 71.6659C48.3972 71.6659 56.4518 68.3296 62.3904 62.3909C68.3291 56.4523 71.6654 48.3977 71.6654 39.9992C71.6654 31.6007 68.3291 23.5461 62.3904 17.6075C56.4518 11.6688 48.3972 8.33252 39.9987 8.33252Z'
                fill='white'
            />
        </svg>
    ),
    chek: (props: SVGProps<SVGSVGElement>) => (
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' {...props}>
            <path
                d='M7 14C10.8596 14 14 10.8599 14 7C14 6.33378 13.907 5.67725 13.7229 5.04848C13.6321 4.7393 13.3093 4.56171 12.9992 4.65242C12.6898 4.74286 12.5128 5.06685 12.6032 5.37604C12.7557 5.89842 12.8333 6.44501 12.8333 7C12.8333 10.2165 10.2165 12.8333 7 12.8333C3.78355 12.8333 1.16667 10.2165 1.16667 7C1.16667 3.78355 3.78355 1.16667 7 1.16667C8.16895 1.16667 9.2936 1.50846 10.2523 2.15489C10.5192 2.33504 10.8821 2.26426 11.062 1.99738C11.242 1.7302 11.1718 1.36761 10.9046 1.1876C9.75246 0.410726 8.40236 0 7 0C3.1404 0 0 3.14012 0 7C0 10.8599 3.1404 14 7 14Z'
                fill='#FAA055'
            />
            <path
                d='M13.0048 1.33681L7.00054 7.34075L5.07965 5.42014C4.85178 5.19242 4.48264 5.19242 4.25478 5.42014C4.02705 5.64801 4.02705 6.01715 4.25478 6.24501L6.58811 8.57834C6.70218 8.69242 6.85115 8.74924 7.00054 8.74924C7.14994 8.74924 7.2989 8.69242 7.41298 8.57834L13.8296 2.16168C14.0574 1.93381 14.0574 1.56467 13.8296 1.33681C13.6018 1.10909 13.2326 1.10909 13.0048 1.33681Z'
                fill='#FAA055'
            />
        </svg>
    ),
    next: (props: SVGProps<SVGSVGElement>) => (
        <svg width='34' height='34' viewBox='0 0 34 34' fill='none' {...props}>
            <path d='M12.75 8.5L21.25 17L12.75 25.5' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    ),
    prev: (props: SVGProps<SVGSVGElement>) => (
        <svg width='34' height='34' viewBox='0 0 34 34' fill='none' {...props}>
            <path d='M21.25 8.5L12.75 17L21.25 25.5' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    ),
    plus: (props: SVGProps<SVGSVGElement>) => (
        <svg width='17' height='16' viewBox='0 0 17 16' fill='none' {...props}>
            <path d='M0.5 8H16.5' stroke='#FAA055' strokeWidth='1.5' />
            <path d='M8.5 0L8.5 16' stroke='#FAA055' strokeWidth='1.5' />
        </svg>
    ),
    star: (props: SVGProps<SVGSVGElement>) => (
        <svg width='39' height='40' viewBox='0 0 39 40' fill='none' {...props}>
            <path d='M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z' fill='#FAA055' />
        </svg>
    ),
    'play-v2': (props: SVGProps<SVGSVGElement>) => (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none' {...props}>
            <circle cx='40' cy='40' r='40' fill='white' />
            <path d='M56.25 37.904C57.9167 38.8355 57.9167 41.1645 56.25 42.096L33.75 54.6721C32.0833 55.6037 30 54.4392 30 52.5761L30 27.4239C30 25.5608 32.0833 24.3963 33.75 25.3279L56.25 37.904Z' fill='black' />
        </svg>
    ),
    'arrow-down-v2': (props: SVGProps<SVGSVGElement>) => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
            <path d='M18 9L12 15L6 9' stroke='#CACACE' strokeWidth='2' />
        </svg>
    ),
    'x-mark': (props: SVGProps<SVGSVGElement>) => (
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' {...props}>
            <rect width='32' height='32' rx='16' fill='white' fillOpacity='0.1' />
            <path d='M24 8L16 16M8 24L16 16M16 16L8 8M16 16L24 24' stroke='white' strokeWidth='2' />
        </svg>
    ),
    'arrow-down': (props: SVGProps<SVGSVGElement>) => (
        <svg width='14' height='8' viewBox='0 0 14 8' fill='none' {...props}>
            <path d='M7 7.5L0 0.5H14L7 7.5Z' fill='white' />
        </svg>
    ),
    'mini-arrow': (props: SVGProps<SVGSVGElement>) => (
        <svg width='10' height='18' viewBox='0 0 10 18' fill='none' {...props}>
            <path d='M9 1L5 5L1 9L9 17' stroke='black' />
        </svg>
    ),
    'counter-arrow': (props: SVGProps<SVGSVGElement>) => (
        <svg width='13' height='8' viewBox='0 0 13 8' fill='none' {...props}>
            <path d='M12.5 1L6.5 7L0.500001 0.999999' stroke='#FAA055' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
} as const

export type IconsType = keyof typeof icons
