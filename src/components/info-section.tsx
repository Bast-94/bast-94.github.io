import type { InfoSectionData } from "../types/cv"

interface InfoSectionProps {
  data: InfoSectionData
}

export default function InfoSection({ data }: InfoSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{data.title}</h3>
      <ul className="space-y-2">
        {data.items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
