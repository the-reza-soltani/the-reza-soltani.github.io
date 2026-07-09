import { Font } from '@react-pdf/renderer'

let registered = false

export function registerResumeFonts() {
  if (registered || typeof window === 'undefined') return

  const base = `${window.location.origin}/fonts`

  Font.register({
    family: 'Oswald',
    fonts: [{ src: `${base}/Oswald-Regular.woff`, fontWeight: 400 }],
  })

  Font.register({
    family: 'SourceCodePro',
    fonts: [
      { src: `${base}/SourceCodePro-Regular.woff`, fontWeight: 400 },
      { src: `${base}/SourceCodePro-Bold.woff`, fontWeight: 700 },
    ],
  })

  Font.register({
    family: 'RobotoCondensed',
    fonts: [{ src: `${base}/RobotoCondensed-Regular.woff`, fontWeight: 400 }],
  })

  Font.registerHyphenationCallback((word) => [word])
  registered = true
}
