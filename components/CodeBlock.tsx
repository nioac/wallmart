'use client'

interface CodeBlockProps {
  code: string
  language: 'python' | 'sql' | 'javascript'
  title?: string
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  return (
    <div className="my-6">
      {title && (
        <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg text-sm font-medium">
          {title}
        </div>
      )}
      <pre className={`${title ? 'rounded-t-none' : ''} rounded-lg overflow-x-auto bg-gray-900 text-gray-100 p-4`}>
        <code className={`language-${language} text-sm`}>
          {code}
        </code>
      </pre>
    </div>
  )
}