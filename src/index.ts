import { TARGET_TYPES } from './garmin'
const GARMIN = { TARGET_TYPES }
export { GARMIN }

// common
export { SegmentSoundEffectType } from './trainderday/SoundEffects'
export { SportType } from './trainderday/SportTypes'
export { SortType } from './trainderday/SortTypes'
export { QueueActionNameTypes } from './trainderday/QueueActionNameTypes'

// Activity
export { ActivitySourceType } from './trainderday/Activity'

// Workout
export { WorkoutZoneType, BaseSegmentIndex, SegmentType } from './trainderday/Workout'

// Zones
export { ZoneItemType, ZonesType, defaultHeartRateZones } from './trainderday/zones'

// Coach Jack
export * as CoachJackTypes from './trainderday/coachJack/Workout'
export * as CoachJackDefaults from './trainderday/coachJack/defaults'
