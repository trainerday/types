import { MAIN, NA, WORKOUT_TRAINING_TYPES } from './defaults'

export type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'
export type WorkoutType =
  | 'z2'
  | 'z2_plus'
  | 'z2_plus2'
  | 'z2_micro_sprints'
  | 'long'
  | 'long_climbs'
  | 'hiitA'
  | 'hiitB'
  | 'threshold'
  | 'thresholdBlock'
  | 'sfr'
  | 'sweetSpotA'
  | 'sweetSpotB'
  | 'sweetSpotBlock'
  | 'recovery'
  | 'aerobic'
  | 'tempoBlock'
  | 'vo2max'
  | 'vo2max_crunched'
  | 'vo2max_favorite'
  | 'vo2max_long'
  | 'sprints'
  | 'dynamicForce'
  | 'taper' // adding here also add here  search for this   const workoutTypeToDominantZone

export type WorkoutLevel = number | typeof MAIN | typeof NA
export type WorkoutTrainingType =
  (typeof WORKOUT_TRAINING_TYPES)[keyof typeof WORKOUT_TRAINING_TYPES]
type StructureIndexesItem = {
  startIndex: number
  endIndex: number
}
export type StructureIndexes = {
  warmup: StructureIndexesItem | null
  intervalWork: StructureIndexesItem | null
  secondaryWork: StructureIndexesItem | null
  coolDown: StructureIndexesItem | null
}
export type Segments = [number, number, number, number?, number?, string?, any[]?][]
export type Workout = {
  daysBeforeEvent: number
  workoutSick: boolean
  description?: string
  minutes: number
  autoMinutes: number
  tss: number
  name: string
  dayOfWeek: Day
  workoutType: string | WorkoutType
  level?: WorkoutLevel
  workoutTrainingType?: WorkoutTrainingType
  structureIndexes: StructureIndexes
  segments: Segments
  eventDate?: string
  eventType?: string
  eventDuration?: string
}
export type TDWorkout = {
  hasStructure: boolean
  title: string
  durationMinutes: number
  tss: number
  bikeStress?: number
  intensity?: number
  timeInZones?: any
  dominantZone?: string
  segments?: string
  isEventDate?: boolean
  eventDate?: string
  workoutSick?: boolean
  workoutType?: string
  type?: string
}
