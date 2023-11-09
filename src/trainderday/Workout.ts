export enum WorkoutZoneType {
  RECOVERY = 'Recovery',
  ENDURANCE = 'Endurance',
  TEMPO = 'Tempo',
  THRESHOLD = 'Threshold',
  VO2MAX = 'VO2Max',
  ANAEROBIC = 'Anaerobic'
}

export enum BaseSegmentIndex {
  DURATION,
  POWER_START,
  POWER_END,
  CADENCE_START,
  CADENCE_END,
  TYPE,
  DESCRIPTIONS,
  SLOPE
}

export enum SegmentType {
  WARM_UP = 'warm-up',
  ACTIVE = 'active',
  COOL_DOWN = 'cooldown',
  INTERVAL = 'interval',
  REST = 'rest',
  FREE_RIDE = 'free-ride',
  OPEN_ENDED = 'open-ended',
  SFR = 'sfr',
  LAP = 'lap',
  CLIMB = 'climb',
  PLUS = '+',
  MINUS = '-',
  SLOPE = 'slope',
  HR = 'hr',
  ERG = 'erg'
}
