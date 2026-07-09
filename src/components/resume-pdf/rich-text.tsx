import { Text } from '@react-pdf/renderer'

type RichTextProps = {
  text: string
  style: Record<string, unknown>
  boldStyle: Record<string, unknown>
}

export function RichText({ text, style, boldStyle }: RichTextProps) {
  const parts = text.split(/(\*\*.+?\*\*)/g).filter((part) => part.length > 0)

  return (
    <Text style={style}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <Text key={index} style={boldStyle}>
              {part.slice(2, -2)}
            </Text>
          )
        }

        return (
          <Text key={index} style={style}>
            {part}
          </Text>
        )
      })}
    </Text>
  )
}
