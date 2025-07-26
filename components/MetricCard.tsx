'use client'

import { motion } from 'framer-motion'

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: React.ReactNode
  color?: 'blue' | 'yellow' | 'green' | 'red'
}

export default function MetricCard({ title, value, subtitle, icon, color = 'blue' }: MetricCardProps) {
  const colorClasses = {
    blue: 'bg-walmart-blue text-white',
    yellow: 'bg-walmart-yellow text-walmart-blue',
    green: 'bg-green-500 text-white',
    red: 'bg-red-500 text-white'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-lg shadow-lg ${colorClasses[color]}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium opacity-90">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {subtitle && <p className="text-sm opacity-75 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-4xl opacity-80">{icon}</div>}
      </div>
    </motion.div>
  )
}