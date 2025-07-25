import { Day, WorkoutType } from './Workout'

export const MAIN = 'main'
export const NA = 'n/a'
export const WORKOUT_TRAINING_TYPES = {
  INDOOR: 'indoor',
  OUTDOOR: 'outdoor',
  HR: 'heart_rate'
} as const
export const WORKOUT_TYPES = {
  Z2: 'z2' as WorkoutType,
  Z2_PLUS: 'z2_plus' as WorkoutType,
  Z2_PLUS2: 'z2_plus2' as WorkoutType,
  Z2_MICRO_SPRINTS: 'z2_micro_sprints' as WorkoutType,
  LONG: 'long' as WorkoutType,
  LONG_CLIMBS: 'long_climbs' as WorkoutType,
  RECOVERY: 'recovery' as WorkoutType,
  SFR: 'sfr' as WorkoutType,
  HIIT_A: 'hiitA' as WorkoutType,
  HIIT_B: 'hiitB' as WorkoutType,
  VO2MAX: 'vo2max' as WorkoutType,
  VO2MAX_CRUNCHED: 'vo2max_crunched' as WorkoutType,
  VO2MAX_FAVORITE: 'vo2max_favorite' as WorkoutType,
  VO2MAX_LONG: 'vo2max_long' as WorkoutType,
  THRESHOLD: 'threshold' as WorkoutType,
  THRESHOLD_BLOCK: 'thresholdBlock' as WorkoutType,
  SWEETSPOT_A: 'sweetSpotA' as WorkoutType,
  SWEETSPOT_B: 'sweetSpotB' as WorkoutType,
  SWEETSPOT_BLOCK: 'sweetSpotBlock' as WorkoutType,
  TEMPO_BLOCK: 'tempoBlock' as WorkoutType,
  AEROBIC: 'aerobic' as WorkoutType,
  SPRINTS: 'sprints' as WorkoutType,
  DYNAMIC_FORCE: 'dynamicForce' as WorkoutType,
  TAPER: 'taper' as WorkoutType,
  EVENT: 'EVENT' as WorkoutType
}
export const HARD_WORKOUT_TYPES = [
  WORKOUT_TYPES.THRESHOLD,
  WORKOUT_TYPES.THRESHOLD_BLOCK,
  WORKOUT_TYPES.SWEETSPOT_A,
  WORKOUT_TYPES.SWEETSPOT_B,
  WORKOUT_TYPES.SWEETSPOT_BLOCK,
  WORKOUT_TYPES.VO2MAX,
  WORKOUT_TYPES.VO2MAX_CRUNCHED,
  WORKOUT_TYPES.VO2MAX_FAVORITE,
  WORKOUT_TYPES.VO2MAX_LONG,
  WORKOUT_TYPES.HIIT_A,
  WORKOUT_TYPES.HIIT_B,
  WORKOUT_TYPES.DYNAMIC_FORCE,
  WORKOUT_TYPES.SPRINTS
]

export const WORKOUT_TYPES_FOR_SPLIT: Partial<WorkoutType[]> = [
  WORKOUT_TYPES.Z2,
  WORKOUT_TYPES.Z2_PLUS,
  WORKOUT_TYPES.Z2_PLUS2,
  WORKOUT_TYPES.Z2_MICRO_SPRINTS,
  WORKOUT_TYPES.LONG,
  WORKOUT_TYPES.LONG_CLIMBS
]
export const WORKOUT_TYPES_FOR_MOVE_FROM_DAY_OFF = [
  WORKOUT_TYPES.Z2,
  WORKOUT_TYPES.Z2_PLUS,
  WORKOUT_TYPES.Z2_PLUS2,
  WORKOUT_TYPES.Z2_MICRO_SPRINTS,
  WORKOUT_TYPES.LONG,
  WORKOUT_TYPES.LONG_CLIMBS
]
export const Z2_WORKOUT_TYPES_FOR_MOVE_FROM_DAY_OFF = [
  WORKOUT_TYPES.Z2,
  WORKOUT_TYPES.Z2_PLUS,
  WORKOUT_TYPES.Z2_PLUS2,
  WORKOUT_TYPES.Z2_MICRO_SPRINTS,
  WORKOUT_TYPES.RECOVERY
]
export const CUSTOM_PLAN_WORKOUT_TYPES = Object.values(WORKOUT_TYPES).filter(
  (type: WorkoutType) =>
    ![
      WORKOUT_TYPES.AEROBIC,
      WORKOUT_TYPES.Z2_PLUS,
      WORKOUT_TYPES.Z2_PLUS2,
      WORKOUT_TYPES.LONG_CLIMBS,
      WORKOUT_TYPES.RECOVERY,
      WORKOUT_TYPES.SPRINTS,
      WORKOUT_TYPES.TAPER,
      WORKOUT_TYPES.EVENT
    ].includes(type)
)
export const APPLICABLE_WORKOUT_TYPES_FOR_CUSTOM_INTENSITY = CUSTOM_PLAN_WORKOUT_TYPES.filter(
  (type: WorkoutType) =>
    ![WORKOUT_TYPES.Z2, WORKOUT_TYPES.Z2_MICRO_SPRINTS, WORKOUT_TYPES.LONG].includes(type)
)

export const TRAINING_TYPES = {
  ...WORKOUT_TRAINING_TYPES,
  MIXED: 'mixed'
} as const

export const DAYS = {
  MON: 'mon' as Day,
  TUE: 'tue' as Day,
  WED: 'wed' as Day,
  THU: 'thu' as Day,
  FRI: 'fri' as Day,
  SAT: 'sat' as Day,
  SUN: 'sun' as Day
}

export const GOAL_TYPES = {
  FARTHER: 'farther',
  FASTER: 'faster',
  CLIMBING: 'climbing',
  FITNESS: 'fitness',
  ALL: 'all'
}
