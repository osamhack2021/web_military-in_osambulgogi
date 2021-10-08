module.exports = {
  purge: [
    // TODO: production 빌드 때 제외할 파일 지정하기
  ],
  theme: {
    fontFamily: {
      sans: [
        'Pretendard',
        '-apple-system',
        'BlinkMacSystemFont',
        'system-ui',
        'Roboto',
        'Helvetica Neue',
        'Segoe UI',
        'Apple SD Gothic Neo',
        'Noto Sans KR',
        'Malgun Gothic',
        'sans-serif'
      ]
    },
    extend: {
      colors: {
        military: '#4E784D',
        'about-gradient-from': '#3CA55C',
        'about-gradient-to': '#B5AC49',
        'about-description': '#678E73'
      },
      width: {
        160: '40rem',
        180: '45rem',
        204: '51rem',
        216: '54rem',
        240: '60rem'
      },
      height: {
        160: '40rem',
        180: '45rem',
        204: '51rem',
        216: '54rem',
        240: '60rem'
      }
    }
  },
  variants: {
    extend: {
      ringColor: ['focus'],
      ringWidth: ['focus']
    }
  }
}
