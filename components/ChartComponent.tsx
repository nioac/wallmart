'use client'

interface ChartComponentProps {
  type: 'bar' | 'line' | 'pie' | 'doughnut'
  data: any
  options?: any
  title?: string
  height?: number
}

export default function ChartComponent({ type, data, options = {}, title, height = 400 }: ChartComponentProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div style={{ height: `${height}px` }} className="flex items-center justify-center bg-gray-100 rounded">
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-600 mb-2">
            {title || `Gráfico ${type.toUpperCase()}`}
          </div>
          <div className="text-sm text-gray-500">
            Gráfico interativo seria renderizado aqui
          </div>
          <div className="mt-4 text-xs text-gray-400">
            Dados: {JSON.stringify(data).substring(0, 100)}...
          </div>
        </div>
      </div>
    </div>
  )
}