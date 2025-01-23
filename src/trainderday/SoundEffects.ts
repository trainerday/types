export enum SegmentSoundEffectType {
  NONE,
  /** @deprecated No longer used in the app */
  UP,
  /** @deprecated No longer used in the app */
  DOWN,
  /** @deprecated No longer used in the app */
  BEEPS_UP,
  /** @deprecated No longer used in the app */
  BEEPS_DOWN,

  /** Use a long signal. About 100% volume */
  SINGLE_BEEP,

  /** Use 3 short and 1 long signals. About 32% volume */
  FOUR_BEEPS_LOW_VOLUME,

  /** Use 3 short and 1 long signals. About 56% volume */
  FOUR_BEEPS_MID_VOLUME,

  /** Use 3 short and 1 long signals. About 100% volume */
  FOUR_BEEPS_HIGH_VOLUME,

  /** Use 3 short and 1 long signals. About 20%, 50%, 80%, 100% volume */
  FOUR_BEEPS_PROGRESSIVE_VOLUME
}
