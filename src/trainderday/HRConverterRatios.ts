export type HRConverterRatiosZoneItemType = {
  label: string
  min: number
  max: number | null
  ratio: number
}

export type HRConverterRatiosZonesType = HRConverterRatiosZoneItemType[]
export const HRConverterRatiosZonesDefault: HRConverterRatiosZonesType = [
  { label: 'Zone 1 up to 55%', min: 0, max: 55, ratio: 1.2 },
  { label: 'Zone 2 up to 56-75%', min: 56, max: 75, ratio: 1.15 },
  { label: 'Zone 3 up to 76-90%', min: 76, max: 90, ratio: 1.1 },
  { label: 'Zone 4 up to 91-105%', min: 91, max: 105, ratio: 1 },
  { label: 'Zone 5+ 106%+', min: 106, max: null, ratio: 1 }
]
