exports.EcgMeasurementModel = {
  name: 'EcgMeasurementModel',
  primaryKey: 'startTimestamp',
  properties: {
    startTimestamp: 'int',
    endTimestamp: 'int?',
    wiffFilename: 'string?'
  }
}

exports.EmographySlotModel = {
  name: 'EmographySlotModel',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    cognitiveZone: 'int',
    predictiveCZ: 'int',
    predictiveCZTransitionTime: 'int',
    czHour: 'int',
    cortisolContribution: 'int',
    cognitiveZoneQ: 'int',
    stressLevelSkinConductance: 'int',
    stressLevelSkinConductanceQ: 'int'
  }
}

exports.EmographySummaryModel = {
  name: 'EmographySummaryModel',
  primaryKey: 'serverDate',
  properties: {
    serverDate: 'string',
    uuid: 'string',
    slots: 'EmographySlotModel[]',
    stressLevelSkinConductanceAvg: 'int',
    startTimestamp: 'int',
    endTimestamp: 'int'
  }
}

exports.HeartRateSlotModel = {
  name: 'HeartRateSlotModel',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    bpm: 'int?',
    bpm_q: 'int?'
  }
}

exports.HeartRateSummaryModel = {
  name: 'HeartRateSummaryModel',
  primaryKey: 'serverDate',
  properties: {
    serverDate: 'string',
    uuid: 'string',
    heartRateSlots: 'HeartRateSlotModel[]',
    avgDailyHeartRate: 'int',
    maxDailyHeartRate: 'int',
    restDailyHeartRate: 'int',
    allActiveTime: 'int',
    maxHeartRateTime: 'int',
    performanceHeartRateTime: 'int',
    enduranceHeartRateTime: 'int',
    fatBurnHeartRateTime: 'int',
    warmUpHeartRateTime: 'int',
    restHeartRateTime: 'int',
    dailyPercent: 'int?',
    startTimestamp: 'int',
    endTimestamp: 'int'
  }
}

exports.LocalSettingDB = {
  name: 'LocalSettingDB',
  primaryKey: 'key',
  properties: {
    key: 'string',
    value: 'string'
  }
}

exports.MetricActivity = {
  name: 'MetricActivity',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    bpm: 'int?',
    bpm_q: 'int?',
    q: 'int?',
    last_steps: 'int?',
    activity_type: 'int?',
    speed: 'double?',
    spo2: 'int?',
    spo2Q: 'int?',
    energy_exp: 'int?',
    respiration_rate: 'float?',
    pha: 'int?',
    pha_q: 'int?',
    resp_q: 'int?',
    wearing: 'int?',
    move_alert: 'int?',
    cw: 'int?',
    cwt: 'int?',
    battery: 'int?',
    step_calories: 'int?',
    rest_calories: 'int?',
    distance: 'int?',
    step_duration: 'int?',
    active_calories: 'int?',
    isSynced: 'bool'
  }
}

exports.MetricEmography = {
  name: 'MetricEmography',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    cognitiveZone: 'int',
    predictiveCZ: 'int',
    predictiveCZTransitionTime: 'int',
    czHour: 'int',
    cortisolContribution: 'int',
    cognitiveZoneQ: 'int',
    stressLevelSkinConductance: 'int',
    stressLevelSkinConductanceQ: 'int',
    isSynced: 'bool'
  }
}

exports.MetricHrv = {
  name: 'MetricHrv',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    beats: 'int',
    isSynced: 'bool'
  }
}

exports.MetricPpg = {
  name: 'MetricPpg',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    acc: 'int',
    ppg: 'int',
    bpm: 'int',
    bpmQ: 'int',
    crc: 'int',
    accX: 'int?',
    accY: 'int?',
    accZ: 'int?',
    isSynced: 'bool'
  }
}

exports.MetricSleep = {
  name: 'MetricSleep',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    sleepState: 'int',
    quality: 'int',
    isSynced: 'bool'
  }
}

exports.MetricTemperature = {
  name: 'MetricTemperature',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    temp1: 'float?',
    temp2: 'float?',
    tempAmb: 'float?',
    isSynced: 'bool'
  }
}

exports.RawFileChunk = {
  name: 'RawFileChunk',
  primaryKey: 'fileName',
  properties: {
    fileName: 'string',
    timestamp: 'int',
    watchAddress: 'string',
    size: 'int',
    crc: 'int',
    deletedFromWatch: 'bool',
    status: 'int',
    type: 'string'
  }
}

exports.RespirationSlotModel = {
  name: 'RespirationSlotModel',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    rate: 'float',
    quality: 'float'
  }
}

exports.RespirationSummaryModel = {
  name: 'RespirationSummaryModel',
  primaryKey: 'serverDate',
  properties: {
    serverDate: 'string',
    uuid: 'string',
    average: 'float',
    slots: 'RespirationSlotModel[]',
    startTimestamp: 'int',
    endTimestamp: 'int'
  }
}

exports.SleepSlotModel = {
  name: 'SleepSlotModel',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    startDate: 'string',
    endDate: 'string',
    sleepState: 'int'
  }
}

exports.SleepSummaryModel = {
  name: 'SleepSummaryModel',
  primaryKey: 'serverDate',
  properties: {
    serverDate: 'string',
    uuid: 'string',
    sleepDuration: 'int',
    sleepSlots: 'SleepSlotModel[]',
    goalSleepPercentage: 'int',
    sleepNeedDuration: 'int',
    awakeTime: 'int',
    remTime: 'int',
    lightTime: 'int',
    deepTime: 'int',
    performance: 'int',
    tranquility: 'int',
    date: 'date'
  }
}

exports.SpO2SummaryModel = {
  name: 'SpO2SummaryModel',
  primaryKey: 'serverDate',
  properties: {
    serverDate: 'string',
    uuid: 'string',
    average: 'int',
    slots: 'Spo2SlotModel[]',
    startTimestamp: 'int',
    endTimestamp: 'int'
  }
}

exports.Spo2SlotModel = {
  name: 'Spo2SlotModel',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    value: 'int?',
    quality: 'int?'
  }
}

exports.StepsSlotModel = {
  name: 'StepsSlotModel',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    stepCount: 'int',
    energyExp: 'double',
    speed: 'double?',
    activityType: 'int?'
  }
}

exports.StepsSummaryModel = {
  name: 'StepsSummaryModel',
  primaryKey: 'serverDate',
  properties: {
    serverDate: 'string',
    uuid: 'string',
    stepsSlots: 'StepsSlotModel[]',
    stepCount: 'int',
    stepDistance: 'float',
    stepCalories: 'int',
    goalStepPercentage: 'int',
    moveEveryHour: 'int',
    workoutsCount: 'int',
    startTimestamp: 'int',
    endTimestamp: 'int'
  }
}

exports.TemperatureSlotModel = {
  name: 'TemperatureSlotModel',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'int',
    date: 'string',
    temp1: 'float',
    temp2: 'float'
  }
}

exports.TemperatureSummaryModel = {
  name: 'TemperatureSummaryModel',
  primaryKey: 'serverDate',
  properties: {
    serverDate: 'string',
    uuid: 'string',
    average1: 'float',
    average2: 'float',
    slots: 'TemperatureSlotModel[]',
    startTimestamp: 'int',
    endTimestamp: 'int'
  }
}

