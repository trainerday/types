export type ZoneItemType = {
  label: string
  min: number
  max: number
  minHR: number
  maxHR: number
}

export type ZonesType = ZoneItemType[]
export const defaultHeartRateZones: ZonesType = [
  { label: 'Active Recovery', min: 0, max: 55, minHR: 0, maxHR: 68 },
  { label: 'Endurance', min: 56, max: 75, minHR: 69, maxHR: 83 },
  { label: 'Tempo', min: 76, max: 90, minHR: 84, maxHR: 94 },
  { label: 'Lactate Threshold', min: 91, max: 105, minHR: 95, maxHR: 105 },
  { label: 'VO2 Max', min: 106, max: 120, minHR: 106, maxHR: 255 }
]
