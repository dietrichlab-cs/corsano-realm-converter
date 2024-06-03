exports.AppSettings = {
  name: 'AppSettings',
  properties: {
    activityStepCount: 'int',
    activityDistanceGoal: 'int',
    activityCaloriesGoal: 'int',
    sleepGoal: 'int',
    workoutCountWeeklyGoal: 'int',
    workoutMinutesWeeklyGoal: 'int',
    scheduleBedTime: 'int',
    scheduleRiseTime: 'int',
    backlightDuration: 'int',
    getActiveDuration: 'int'
  }
}

exports.Articles = {
  name: 'Articles',
  primaryKey: 'uid',
  properties: {
    uid: 'string',
    position: 'string',
    theme: 'string',
    correlation1: 'string',
    correlation2: 'string',
    title: 'string',
    text: 'string',
    imageName: 'string'
  }
}

exports.BPPeripheral = {
  name: 'BPPeripheral',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    deviceName: 'string',
    isActive: 'bool',
    dateConnected: 'date?'
  }
}

exports.BloodPressureCheck = {
  name: 'BloodPressureCheck',
  properties: {
    morning: 'bool',
    midday: 'bool',
    evening: 'bool'
  }
}

exports.BloodPressureValues = {
  name: 'BloodPressureValues',
  properties: {
    date: 'date',
    sbp: 'double',
    map: 'int',
    dbp: 'double',
    hr: 'int',
    mmhg: 'double',
    initM: 'bool'
  }
}

exports.EURSurvey = {
  name: 'EURSurvey',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    readyForSync: 'bool',
    morning: 'MorningSurvey',
    evening: 'EveningSurvey'
  }
}

exports.EveningSurvey = {
  name: 'EveningSurvey',
  properties: {
    mood: 'int',
    alcohol: 'int',
    coffee: 'int',
    tea: 'int',
    drink: 'int',
    daySleep: 'string',
    didNotWear: 'string',
    work: 'string',
    whyNotWear: 'int[]',
    surveyHasBeenCompleted: 'bool'
  }
}

exports.ExtTemperatureValues = {
  name: 'ExtTemperatureValues',
  properties: {
    date: 'date',
    temperatureValue: 'double',
    deviceName: 'string',
    tzOffset: 'int',
    isCelciusUnit: 'bool',
    isUnderMedication: 'bool',
    isUnderFever: 'bool',
    readyForSync: 'bool'
  }
}

exports.FilesAvailable = {
  name: 'FilesAvailable',
  properties: {
    fileName: 'string',
    requestRawMetricsId: 'string',
    sequenceId: 'string',
    requestSequenceId: 'string',
    customerId: 'string',
    isAlreadySentToMmtCloud: 'bool',
    isAlreadySentToPreventicusCloud: 'bool'
  }
}

exports.GatewayPeripheral = {
  name: 'GatewayPeripheral',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    deviceName: 'string',
    isActive: 'bool',
    dateConnected: 'date?'
  }
}

exports.HappitechRawModel = {
  name: 'HappitechRawModel',
  properties: {
    timestamp: 'int',
    clientTimestamp: 'string',
    heartRate: 'int',
    goodIbiNumber: 'int',
    avnn: 'int',
    pnn50: 'int',
    rmssd: 'int',
    sdnn: 'int',
    hta: 'string',
    htaQ: 'int',
    lf: 'int',
    lfConfidence: 'int',
    classification: 'string',
    finalProbability: 'double',
    afbProbability: 'double',
    nsrProbability: 'double',
    goodQualityProbability: 'double',
    aFib: 'bool',
    aFibTimestamp: 'string',
    readyToSync: 'bool'
  }
}

exports.MetricACC = {
  name: 'MetricACC',
  primaryKey: 'id',
  properties: {
    id: 'string',
    measurementUUID: 'string',
    timestamp: 'int',
    recordStartTimestamp: 'int',
    date: 'date',
    fileName: 'string',
    patientId: 'string',
    nrOfSyncs: 'int',
    syncedCloud: 'bool',
    errorCode: 'int'
  }
}

exports.MetricACCParsed = {
  name: 'MetricACCParsed',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'string',
    rawIndex: 'int',
    chunkIndex: 'int',
    quality: 'int',
    bodyPose: 'int',
    valueX: 'int',
    valueY: 'int',
    valueZ: 'int',
    synced: 'bool'
  }
}

exports.MetricActivity = {
  name: 'MetricActivity',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'string',
    id: 'string',
    date: 'date',
    bpm: 'int',
    bpmQ: 'int',
    corsanoBpm: 'int',
    corsanoBpmQ: 'int',
    lastSteps: 'int',
    corsanoLastSteps: 'int',
    activityType: 'int',
    speed: 'int',
    skinProximity: 'int',
    energyExp: 'int',
    respirationRate: 'int',
    respirationRateQuality: 'int',
    corsanoRespirationRate: 'int',
    corsanoRespirationRateQuality: 'int',
    corsanoEnergyExpenditure: 'int',
    gailAsym: 'int',
    gailSpeed: 'int',
    gailVariability: 'int',
    temp1: 'double',
    temp2: 'double',
    pha: 'int',
    phaQ: 'int',
    wearing: 'int',
    batteryLevel: 'int',
    syncedCloud: 'bool',
    bpmUpdated: 'bool',
    breathUpdated: 'bool',
    bodytempUpdated: 'bool',
    activityUpdated: 'bool',
    spo2: 'double',
    spo2Quality: 'int'
  }
}

exports.MetricActivitySummery = {
  name: 'MetricActivitySummery',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    steps: 'int',
    distance: 'int',
    calories: 'double',
    averageGaitAsymmetry: 'int',
    averageGaitSpeed: 'int',
    averageGaitVar: 'int',
    readyForSync: 'bool',
    slots: 'MetricActivitySummerySlot[]'
  }
}

exports.MetricActivitySummerySlot = {
  name: 'MetricActivitySummerySlot',
  properties: {
    intervalDate: 'date',
    steps: 'int?',
    distance: 'int?',
    calories: 'double?',
    gaitAsymmetry: 'int?',
    gaitSpeed: 'int?',
    gaitVar: 'int?',
    allValuesGaitAsymmetry: 'string',
    allValuesGaitSpeed: 'string',
    allValuesGaitVar: 'string',
    isEdited: 'bool'
  }
}

exports.MetricBIOZ = {
  name: 'MetricBIOZ',
  primaryKey: 'id',
  properties: {
    id: 'string',
    measurementUUID: 'string',
    timestamp: 'int',
    recordStartTimestamp: 'int',
    date: 'date',
    fileName: 'string',
    patientId: 'string',
    nrOfSyncs: 'int',
    syncedCloud: 'bool'
  }
}

exports.MetricBPMSummery = {
  name: 'MetricBPMSummery',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageBPM: 'int',
    lastBPM: 'int',
    maxDayBPM: 'int',
    maxDayWorkoutBPM: 'int',
    realMaxDayBPM: 'int',
    realMinDayBPM: 'int',
    sleepRHR: 'int',
    durationRestZone: 'int',
    durationWarmUpZone: 'int',
    durationFatBurnZone: 'int',
    durationEnduranceZone: 'int',
    durationPerformanceZone: 'int',
    durationMaxZone: 'int',
    percentageRestZone: 'int',
    percentageWarmUpZone: 'int',
    percentageFatBurnZone: 'int',
    percentageEnduranceZone: 'int',
    percentagePerformanceZone: 'int',
    percentageMaxZone: 'int',
    readyForSync: 'bool',
    slots: 'MetricBPMSummerySlot[]'
  }
}

exports.MetricBPMSummerySlot = {
  name: 'MetricBPMSummerySlot',
  properties: {
    intervalDate: 'date',
    bpm: 'int?',
    bpmAverage: 'double?',
    bpmRealmMin: 'int?',
    bpmRealmMax: 'int?',
    isLowestOfDay: 'bool',
    isHighestOfDay: 'bool',
    isEvaluated: 'bool',
    bpmQ: 'int?',
    isEdited: 'bool',
    allValues: 'string',
    allValuesQ: 'string'
  }
}

exports.MetricBloodPressureSummary = {
  name: 'MetricBloodPressureSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageSys: 'int',
    averageDia: 'int',
    lastSys: 'int',
    lastDia: 'int',
    maxDaySys: 'int',
    maxDayDia: 'int',
    minDaySys: 'int',
    minDayDia: 'int',
    readyForSync: 'bool',
    slots: 'MetricBloodPressureSummarySlot[]'
  }
}

exports.MetricBloodPressureSummarySlot = {
  name: 'MetricBloodPressureSummarySlot',
  properties: {
    intervalDate: 'date',
    sys: 'int?',
    dia: 'int?',
    allValuesSys: 'string',
    allValuesDia: 'string'
  }
}

exports.MetricBodyTempSummery = {
  name: 'MetricBodyTempSummery',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageTemp: 'double',
    lastTemp: 'double',
    maxDayTemp: 'double',
    readyForSync: 'bool',
    slots: 'MetricBodyTempSummerySlot[]'
  }
}

exports.MetricBodyTempSummerySlot = {
  name: 'MetricBodyTempSummerySlot',
  properties: {
    intervalDate: 'date',
    temp: 'double?',
    allValues: 'string'
  }
}

exports.MetricBreathSummery = {
  name: 'MetricBreathSummery',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageBreath: 'int',
    lastBreath: 'int',
    maxDayBreath: 'int',
    minDayBreath: 'int',
    readyForSync: 'bool',
    slots: 'MetricBreathSummerySlot[]'
  }
}

exports.MetricBreathSummerySlot = {
  name: 'MetricBreathSummerySlot',
  properties: {
    intervalDate: 'date',
    brpm: 'int?',
    brpmQ: 'int?',
    allValues: 'string',
    allValuesQ: 'string'
  }
}

exports.MetricCoreBodyTemperatureSummary = {
  name: 'MetricCoreBodyTemperatureSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageCoreBodyTemperature: 'double',
    lastCoreBodyTemperature: 'double',
    maxDayCoreBodyTemperature: 'double',
    minDayCoreBodyTemperature: 'double',
    readyForSync: 'bool',
    slots: 'MetricCoreBodyTemperatureSummerySlot[]'
  }
}

exports.MetricCoreBodyTemperatureSummerySlot = {
  name: 'MetricCoreBodyTemperatureSummerySlot',
  properties: {
    intervalDate: 'date',
    coreBodyTemperature: 'double?',
    allValues: 'string',
    TempAlert: 'bool'
  }
}

exports.MetricCorsanoBPMSummery = {
  name: 'MetricCorsanoBPMSummery',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageBPM: 'int',
    lastBPM: 'int',
    maxDayBPM: 'int',
    realMaxDayBPM: 'int',
    realMinDayBPM: 'int',
    sleepRHR: 'int',
    durationRestZone: 'int',
    durationWarmUpZone: 'int',
    durationFatBurnZone: 'int',
    durationEnduranceZone: 'int',
    durationPerformanceZone: 'int',
    durationMaxZone: 'int',
    percentageRestZone: 'int',
    percentageWarmUpZone: 'int',
    percentageFatBurnZone: 'int',
    percentageEnduranceZone: 'int',
    percentagePerformanceZone: 'int',
    percentageMaxZone: 'int',
    readyForSync: 'bool',
    slots: 'MetricCorsanoBPMSummerySlot[]'
  }
}

exports.MetricCorsanoBPMSummerySlot = {
  name: 'MetricCorsanoBPMSummerySlot',
  properties: {
    intervalDate: 'date',
    bpm: 'int?',
    bpmAverage: 'double?',
    bpmRealmMin: 'int?',
    bpmRealmMax: 'int?',
    isLowestOfDay: 'bool',
    isHighestOfDay: 'bool',
    isEvaluated: 'bool',
    bpmQ: 'int?',
    isEdited: 'bool',
    allValues: 'string',
    allValuesQ: 'string'
  }
}

exports.MetricCorsanoBreathSummary = {
  name: 'MetricCorsanoBreathSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageBreath: 'int',
    lastBreath: 'int',
    maxDayBreath: 'int',
    minDayBreath: 'int',
    readyForSync: 'bool',
    slots: 'MetricCorsanoBreathSummerySlot[]'
  }
}

exports.MetricCorsanoBreathSummerySlot = {
  name: 'MetricCorsanoBreathSummerySlot',
  properties: {
    intervalDate: 'date',
    brpm: 'int?',
    brpmQ: 'int?',
    allValues: 'string',
    allValuesQ: 'string'
  }
}

exports.MetricCorsanoStepsSummary = {
  name: 'MetricCorsanoStepsSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    steps: 'int',
    readyForSync: 'bool',
    slots: 'MetricCorsanoStepsSummerySlot[]'
  }
}

exports.MetricCorsanoStepsSummerySlot = {
  name: 'MetricCorsanoStepsSummerySlot',
  properties: {
    intervalDate: 'date',
    steps: 'int?'
  }
}

exports.MetricECG = {
  name: 'MetricECG',
  primaryKey: 'id',
  properties: {
    id: 'string',
    measurementUUID: 'string',
    timestamp: 'int',
    recordStartTimestamp: 'int',
    date: 'date',
    fileName: 'string',
    patientId: 'string',
    result: 'string',
    syncedCloud: 'bool'
  }
}

exports.MetricEmography = {
  name: 'MetricEmography',
  primaryKey: 'id',
  properties: {
    id: 'string',
    timestamp: 'string',
    date: 'date',
    cognitiveZone: 'int',
    cognitiveZoneQ: 'int',
    predictiveCz: 'int',
    predictiveCzTransitionTime: 'int',
    czHour: 'int',
    cortisolContribution: 'int',
    stressSkin: 'int',
    stressSkinQuality: 'int',
    readyForSync: 'bool'
  }
}

exports.MetricEmographySummary = {
  name: 'MetricEmographySummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    stressLevelSkinConductanceAvg: 'int',
    slots: 'MetricEmographySummarySlot[]',
    slotsMinute: 'MetricEmographySummarySlotMinute[]',
    slotsHour: 'MetricEmographySummarySlotHour[]',
    zones: 'MetricEmographySummaryZone[]'
  }
}

exports.MetricEmographySummarySlot = {
  name: 'MetricEmographySummarySlot',
  properties: {
    date: 'date',
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

exports.MetricEmographySummarySlotHour = {
  name: 'MetricEmographySummarySlotHour',
  properties: {
    date: 'date',
    cognitiveZone: 'int',
    stressLevelSkinConductance: 'int'
  }
}

exports.MetricEmographySummarySlotMinute = {
  name: 'MetricEmographySummarySlotMinute',
  properties: {
    date: 'date',
    cognitiveZone: 'int',
    stressLevelSkinConductance: 'int'
  }
}

exports.MetricEmographySummaryZone = {
  name: 'MetricEmographySummaryZone',
  properties: {
    startDate: 'date',
    endDate: 'date',
    feeling: 'int',
    situation: 'bool[]',
    emotion: 'bool[]',
    message: 'string',
    isEdited: 'bool',
    zoneType: 'int',
    isFinished: 'bool',
    isManual: 'bool'
  }
}

exports.MetricEnergyReserve = {
  name: 'MetricEnergyReserve',
  properties: {
    t: 'int',
    from: 'int',
    to: 'int',
    steps: 'int',
    bpm: 'double',
    energy: 'int',
    speed: 'double',
    mrr: 'double',
    rmssd: 'double',
    si: 'double',
    sin: 'double',
    activityPointsNumber: 'int',
    hrvPointsNumber: 'int',
    isSleep: 'bool',
    sleepType: 'int',
    sleepCoefficient: 'int',
    deltaSlotSleepPercent: 'double',
    date: 'string',
    hasSteps: 'bool',
    hasHighHeartRate: 'bool',
    sinMultiplier: 'double',
    stepsPercent: 'double',
    stepsPercentDissipationPercent: 'double',
    stressDrain: 'double',
    activityDrain: 'double',
    naturalDrain: 'double',
    totalDrain: 'double',
    dayCoefficientsActivity: 'double?',
    dayCoefficientsStress: 'double?',
    dayCoefficientsNatural: 'double?',
    nightCoefficientsActivity: 'double?',
    nightCoefficientsStress: 'double?',
    nightCoefficientsNatural: 'double?',
    numberOfIntervalsDuringDay: 'double',
    stressAlfa: 'double',
    kappa: 'double',
    coefStress: 'double',
    coefActivity: 'double',
    coefNatural: 'double',
    naturalDrainPercent: 'double',
    value: 'double',
    wearing: 'int',
    timeFromStartOfTheSleep: 'int',
    timeFromEndOfTheSleep: 'int',
    currentSleepFrom: 'int',
    currentSleepTo: 'int',
    currentSleepFromDate: 'string',
    currentSleepToDate: 'string'
  }
}

exports.MetricEnergyReserveSummary = {
  name: 'MetricEnergyReserveSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'string',
    startDayDate: 'date',
    slots: 'MetricEnergyReserve[]'
  }
}

exports.MetricExternalHr = {
  name: 'MetricExternalHr',
  primaryKey: 'id',
  properties: {
    id: 'string',
    timestamp: 'double',
    date: 'date',
    hr: 'int',
    rrs: 'string',
    rrsMs: 'string',
    contact: 'bool',
    contactSupported: 'bool',
    type: 'string'
  }
}

exports.MetricExternalPPG = {
  name: 'MetricExternalPPG',
  primaryKey: 'id',
  properties: {
    id: 'string',
    timestamp: 'double',
    date: 'date',
    ppg0: 'int',
    ppg1: 'int',
    ppg2: 'int',
    ppgAmbient: 'int'
  }
}

exports.MetricHRV = {
  name: 'MetricHRV',
  primaryKey: 'id',
  properties: {
    id: 'string',
    timestamp: 'int',
    date: 'string',
    rr: 'int',
    syncedCloud: 'bool'
  }
}

exports.MetricInternalTemprature = {
  name: 'MetricInternalTemprature',
  primaryKey: 'id',
  properties: {
    id: 'string',
    timestamp: 'string',
    date: 'date',
    skinTemp: 'double',
    greenTechValue: 'double',
    accX: 'double',
    accY: 'double',
    accZ: 'double',
    pulseRate: 'double',
    cbt: 'double',
    readyForSync: 'bool'
  }
}

exports.MetricNewHRV = {
  name: 'MetricNewHRV',
  primaryKey: 'id',
  properties: {
    id: 'string',
    timestamp: 'int',
    date: 'string',
    rr: 'int',
    syncedCloud: 'bool'
  }
}

exports.MetricPPG = {
  name: 'MetricPPG',
  primaryKey: 'id',
  properties: {
    id: 'string',
    timestamp: 'int',
    date: 'string',
    ppg: 'int',
    acc: 'int',
    bpm: 'int',
    bpmQ: 'int',
    accX: 'int',
    accY: 'int',
    accZ: 'int',
    crc: 'int',
    syncedCloud: 'bool'
  }
}

exports.MetricPPG2 = {
  name: 'MetricPPG2',
  primaryKey: 'id',
  properties: {
    id: 'string',
    measurementUUID: 'string',
    timestamp: 'int',
    recordStartTimestamp: 'int',
    date: 'date',
    fileName: 'string',
    patientId: 'string',
    nrOfSyncs: 'int',
    syncedCloud: 'bool'
  }
}

exports.MetricPPG2ACCParsed = {
  name: 'MetricPPG2ACCParsed',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'string',
    rawIndex: 'int',
    timestampD: 'double',
    accX: 'int',
    accY: 'int',
    accZ: 'int',
    ppgLed: 'int',
    ppgGain: 'int',
    ppgValue: 'int',
    hz: 'int',
    rawCompleted: 'bool',
    synced: 'bool'
  }
}

exports.MetricPPG2Parsed = {
  name: 'MetricPPG2Parsed',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'string',
    rawIndex: 'int',
    chunkIndex: 'int',
    quality: 'int',
    bodyPose: 'int',
    ledPdPos: 'int',
    offset: 'int',
    exp: 'int',
    led: 'int',
    gain: 'int',
    value: 'int',
    synced: 'bool'
  }
}

exports.MetricParsedECGSummary = {
  name: 'MetricParsedECGSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    recordStartTimestamp: 'int',
    bpm: 'int',
    message: 'string',
    cardiolyseID: 'string',
    readyForSync: 'bool',
    isDeleted: 'bool',
    slots: 'MetricParsedECGSummarySlot[]'
  }
}

exports.MetricParsedECGSummarySlot = {
  name: 'MetricParsedECGSummarySlot',
  properties: {
    timestamp: 'string',
    chunkIndex: 'int',
    value: 'int',
    ecg: 'double',
    synced: 'bool'
  }
}

exports.MetricPreventicusAlertSummary = {
  name: 'MetricPreventicusAlertSummary',
  primaryKey: 'id',
  properties: {
    id: 'string',
    date: 'string',
    userId: 'string',
    vendor: 'string',
    timestamps: 'int',
    label: 'string',
    title: 'string',
    message: 'string',
    priority: 'string',
    isRead: 'bool'
  }
}

exports.MetricSleepSummery = {
  name: 'MetricSleepSummery',
  primaryKey: 'id',
  properties: {
    id: 'int',
    recordDate: 'string',
    startSession: 'date',
    stopSession: 'date',
    tzOffset: 'int',
    totalSleepDuration: 'int',
    timeToSleep: 'int',
    timeToWakeUp: 'int',
    consecutiveSleepSlotLightToRemove: 'int',
    consecutiveSleepSlotDeepToRemove: 'int',
    consecutiveSleepSlotRemToRemove: 'int',
    totalSecsLight: 'int',
    totalSecsDeep: 'int',
    totalSecsAwake: 'int',
    totalSecsREM: 'int',
    totalSecsDept: 'int',
    totalSecsIntensityAdjust: 'int',
    totalSecsDeptAdjust: 'int',
    totalDeepToLightTransitions: 'int',
    totalDeepToREMTransitions: 'int',
    totalLightToDeepTransitions: 'int',
    totalLightToREMTransitions: 'int',
    totalREMToDeepTransitions: 'int',
    totalREMToLightTransitions: 'int',
    totalSleepToAwakeTransitions: 'int',
    totalAwakeToSleepTransitions: 'int',
    readyForSync: 'bool',
    cloudResultFailure: 'bool',
    sleepRHR: 'int',
    sleepRHRQuality: 'int',
    slots: 'MetricSleepSummerySlots[]'
  }
}

exports.MetricSleepSummerySlots = {
  name: 'MetricSleepSummerySlots',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'string',
    date: 'date',
    sleepType: 'int',
    isRejected: 'bool',
    isEdited: 'bool'
  }
}

exports.MetricSpirometryValues = {
  name: 'MetricSpirometryValues',
  properties: {
    date: 'date',
    actualMeasurement: 'double',
    targetMeasurement: 'double',
    pefResultMeasurement: 'double',
    fev1ResultMeasurement: 'double',
    fvcResultMeasurement: 'double',
    fev1fvcResultMeasurement: 'double',
    fev6ResultMeasurement: 'double',
    fev2575fvcResultMeasurement: 'double',
    measurementResult: 'string',
    measurementStatus: 'string',
    readyForSync: 'bool'
  }
}

exports.MetricSpo2Summery = {
  name: 'MetricSpo2Summery',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageSpo2: 'int',
    lastSpo2: 'int',
    maxDaySpo2: 'int',
    minDaySpo2: 'int',
    readyForSync: 'bool',
    slots: 'MetricSpo2SummerySlot[]'
  }
}

exports.MetricSpo2SummerySlot = {
  name: 'MetricSpo2SummerySlot',
  properties: {
    intervalDate: 'date',
    spo2: 'double?',
    spo2Q: 'int?',
    allValues: 'string',
    allValuesQ: 'string'
  }
}

exports.MetricStepsSummary = {
  name: 'MetricStepsSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    stepCount: 'int',
    stepDistance: 'int',
    stepCalories: 'double',
    goalStepPercentage: 'int',
    moveEveryHour: 'int',
    workoutsCount: 'int',
    slots: 'MetricStepsSummarySlot[]'
  }
}

exports.MetricStepsSummarySlot = {
  name: 'MetricStepsSummarySlot',
  properties: {
    intervalDate: 'date',
    stepCount: 'int?',
    energyExp: 'double?',
    speed: 'double?',
    activityType: 'int?',
    distance: 'int?'
  }
}

exports.MetricStressSummery = {
  name: 'MetricStressSummery',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'string',
    startDayDate: 'date',
    recovery: 'RecoverySummary',
    avg_si: 'double',
    avg_si_n: 'double',
    avg_mrr: 'double',
    avg_sdnn: 'double',
    avg_rmssd: 'double',
    avg_pnn50: 'double',
    avg_vlf: 'double',
    avg_vlf_percent: 'double',
    avg_lf: 'double',
    avg_lf_percent: 'double',
    avg_hf: 'double',
    avg_hf_percent: 'double',
    avg_hrv: 'double',
    avg_mo: 'double',
    avg_amo: 'double',
    slots: 'MetricStressSummerySlot[]'
  }
}

exports.MetricStressSummerySlot = {
  name: 'MetricStressSummerySlot',
  properties: {
    timestamp: 'int',
    date: 'string',
    day: 'string',
    si: 'double',
    si_n: 'double',
    mrr: 'double',
    sdnn: 'double',
    rmssd: 'double',
    pnn50: 'double',
    vlf: 'double',
    vlf_percent: 'double',
    lf: 'double',
    lf_percent: 'double',
    hf: 'double',
    hf_percent: 'double',
    hrv: 'double',
    amo: 'double',
    mo: 'double'
  }
}

exports.MetricVivaLnk = {
  name: 'MetricVivaLnk',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    lastUpdated: 'date',
    temperature: 'double',
    syncedCloud: 'bool',
    dateString: 'string',
    timestamp: 'int'
  }
}

exports.MetricVivaLnkECG = {
  name: 'MetricVivaLnkECG',
  primaryKey: 'id',
  properties: {
    id: 'int',
    timestamp: 'int',
    heartRate: 'int',
    RR: 'int[]',
    respiration: 'float',
    syncedCloud: 'bool'
  }
}

exports.MetricVivaLnkTemperatureSummary = {
  name: 'MetricVivaLnkTemperatureSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    averageCoreBodyTemperature: 'double',
    lastCoreBodyTemperature: 'double',
    maxDayCoreBodyTemperature: 'double',
    minDayCoreBodyTemperature: 'double',
    readyForSync: 'bool',
    slots: 'MetricVivaLnkTemperatureSummarySlot[]'
  }
}

exports.MetricVivaLnkTemperatureSummarySlot = {
  name: 'MetricVivaLnkTemperatureSummarySlot',
  properties: {
    intervalDate: 'date',
    coreBodyTemperature: 'double?',
    allValues: 'string',
    TempAlert: 'bool'
  }
}

exports.MetricWatchGPS = {
  name: 'MetricWatchGPS',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'string',
    id: 'string',
    date: 'date',
    latitude: 'double',
    longitude: 'double',
    elevation: 'double',
    speed: 'double',
    distance: 'double'
  }
}

exports.MetricWatchWorkoutSummary = {
  name: 'MetricWatchWorkoutSummary',
  primaryKey: 'startTimestamp',
  properties: {
    startTimestamp: 'string',
    id: 'string',
    stopTimestamp: 'string',
    startDate: 'date',
    stopDate: 'date',
    duration: 'double',
    distance: 'double',
    steps: 'int',
    calories: 'int',
    avgHRM: 'int',
    maxHRM: 'int',
    cfi: 'int',
    vo2Max: 'int',
    avgSpeed: 'double',
    maxSpeed: 'double',
    activityType: 'int',
    gpsStatus: 'int'
  }
}

exports.MetricWorkout = {
  name: 'MetricWorkout',
  primaryKey: 'timestamp',
  properties: {
    timestamp: 'string',
    id: 'string',
    date: 'date',
    bpm: 'int',
    bpmQ: 'int',
    corsanoBpm: 'int',
    corsanoBpmQ: 'int',
    lastSteps: 'int',
    corsanoLastSteps: 'int',
    activityType: 'int',
    speed: 'int',
    energyExp: 'int',
    respirationRate: 'int',
    respirationRateQuality: 'int',
    corsanoRespirationRate: 'int',
    corsanoRespirationRateQuality: 'int',
    corsanoEnergyExpenditure: 'int',
    temp1: 'double',
    temp2: 'double',
    pha: 'int',
    phaQ: 'int',
    wearing: 'int',
    rawBpm: 'int',
    rawBpmQuality: 'int',
    rawEnergyEx: 'int',
    rawEnergyExQuality: 'int',
    rawEnergyExIntermittent: 'int',
    rawEnergyExIntermittentQuality: 'int',
    rawCadence: 'int',
    rawCadenceQuality: 'int',
    rawRespiration: 'int',
    rawRespirationQuality: 'int',
    vo2Max: 'int',
    vo2MaxQuality: 'int',
    gailAsym: 'int',
    gailSpeed: 'int',
    gailVariability: 'int',
    cfi: 'int',
    cfiQuality: 'int',
    syncedCloud: 'bool',
    spo2: 'double',
    spo2Quality: 'int'
  }
}

exports.MetricWorkoutSummary = {
  name: 'MetricWorkoutSummary',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'string',
    type: 'int',
    startSession: 'date',
    duration: 'int',
    distance: 'double',
    avg_speed: 'double',
    max_speed: 'double',
    elevationGain: 'double',
    avg_power: 'double',
    region_latitudeCenter: 'double',
    region_longitudeCenter: 'double',
    region_latitudeDelta: 'double',
    region_longitudeDelta: 'double',
    slots: 'MetricWorkoutSummerySlot[]'
  }
}

exports.MetricWorkoutSummerySlot = {
  name: 'MetricWorkoutSummerySlot',
  properties: {
    timestamp: 'int',
    date: 'string',
    workout_session_id: 'string',
    bpm: 'int',
    bpm_q: 'int',
    last_steps: 'int',
    last_distance: 'double',
    last_calories: 'double',
    activity_type: 'int',
    speed: 'double',
    energy_exp: 'int',
    vo2_max: 'int',
    cfi: 'int',
    gps_lat: 'double',
    gps_lon: 'double',
    gps_speed: 'double',
    gps_altitude: 'double',
    respiration_rate: 'int'
  }
}

exports.MorningSurvey = {
  name: 'MorningSurvey',
  properties: {
    awake: 'int',
    pill: 'int',
    disturb: 'int',
    howSleep: 'int',
    rested: 'int',
    alone: 'bool',
    enough: 'int',
    bedTime: 'string',
    riseTime: 'string',
    wokeUp: 'string',
    fellAsleepIn: 'string',
    whyAwake: 'int[]',
    surveyHasBeenCompleted: 'bool'
  }
}

exports.PatientProfile = {
  name: 'PatientProfile',
  primaryKey: 'UUID',
  properties: {
    UUID: 'string',
    dateCreation: 'date',
    isActive: 'bool',
    timestamp_from: 'string',
    timestamp_to: 'string',
    name: 'string',
    description_message: 'string',
    session_code: 'int',
    session_id: 'string'
  }
}

exports.Peripheral = {
  name: 'Peripheral',
  properties: {
    uuid: 'string',
    deviceName: 'string',
    platformId: 'string',
    modelId: 'string',
    brandId: 'string',
    serialNumber: 'string',
    fwVersion: 'string',
    isActive: 'bool',
    dateConnected: 'date?'
  }
}

exports.RecoverySummary = {
  name: 'RecoverySummary',
  properties: {
    date: 'string',
    value: 'double',
    avgRmssdPast7Days: 'double',
    avgRmssdPast60Days: 'double',
    avgRmssdToday: 'double',
    avgTemperaturePast7Pays: 'double',
    avgTemperaturePast60Days: 'double',
    avgTemperatureToday: 'double',
    restingBpmToday: 'double',
    restingBpmPast60Days: 'double',
    restingBpmDelta: 'double',
    recoveryRhrScore: 'double',
    avgHrvDelta: 'double',
    avgHrvDeltaFactor: 'double',
    recoveryHrvScore: 'double',
    sleepScore: 'double',
    temperatureDeviation: 'double',
    temperatureDeviationFactor: 'double'
  }
}

exports.Ride = {
  name: 'Ride',
  primaryKey: 'id',
  properties: {
    id: 'string',
    createdAt: 'date',
    deletedAt: 'date?',
    name: 'string?',
    type: 'int',
    updatedAt: 'date',
    summary: 'RideSummary',
    track: 'Track',
    isDeleted: 'bool',
    syncedCloud: 'bool',
    nrSyncedCloud: 'int',
    isSpotMeasurement: 'bool',
    zones: 'MetricEmographySummaryZone[]',
    hrvValue: 'double?',
    badMeasurement: 'bool?',
    uiCaloriesDB: 'int?',
    uiMaxBpmDB: 'int?',
    avgBPMDB: 'int?',
    avgSpo2DB: 'double?',
    avgBreathDB: 'double?'
  }
}

exports.RideSummary = {
  name: 'RideSummary',
  properties: {
    createdAt: 'date',
    avgPower: 'double',
    avgSpeed: 'double',
    distance: 'double',
    duration: 'double',
    elevationGain: 'double',
    id: 'string',
    maxSpeed: 'double',
    rideId: 'string',
    isSpotMeasurement: 'bool',
    isDeleted: 'bool'
  }
}

exports.SleepModifications = {
  name: 'SleepModifications',
  properties: {
    timestamp: 'string',
    recordDate: 'string',
    date: 'date',
    steps: 'int',
    sleepIsEdited: 'bool'
  }
}

exports.SpiroBankPeripheral = {
  name: 'SpiroBankPeripheral',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    deviceName: 'string',
    peripheralId: 'string',
    isActive: 'bool',
    dateConnected: 'date?'
  }
}

exports.Track = {
  name: 'Track',
  properties: {
    createdAt: 'date',
    id: 'string',
    name: 'string?',
    updatedAt: 'date',
    points: 'TrackPoint[]',
    region: 'TrackRegion',
    ride: 'Ride'
  }
}

exports.TrackPoint = {
  name: 'TrackPoint',
  properties: {
    elevation: 'double',
    id: 'string',
    latitude: 'double',
    longitude: 'double',
    name: 'string?',
    speed: 'double',
    distance: 'double',
    timestamp: 'date?',
    track: 'Track'
  }
}

exports.TrackRegion = {
  name: 'TrackRegion',
  properties: {
    latitudeCenter: 'double',
    latitudeDelta: 'double',
    longitudeCenter: 'double',
    longitudeDelta: 'double',
    track: 'Track'
  }
}

exports.UserActivityData = {
  name: 'UserActivityData',
  properties: {
    timestamp: 'int',
    date: 'string',
    bpm: 'int',
    last_steps: 'int'
  }
}

exports.UserProfile = {
  name: 'UserProfile',
  primaryKey: 'UUID',
  properties: {
    UUID: 'string',
    cloudID: 'string',
    fcmToken: 'string',
    stravaToken: 'string',
    firstName: 'string',
    lastName: 'string',
    patientName: 'string',
    patientId: 'string',
    birthDate: 'date?',
    dischargeDate: 'date?',
    infusionDate: 'date?',
    gender: 'string',
    height: 'int',
    weight: 'int',
    wrist: 'string',
    email: 'string',
    studyTag: 'string',
    hcpCode: 'string',
    metricUnit: 'string',
    hrvOption: 'string',
    skinType: 'int',
    hairDensity: 'int',
    bpMedication: 'bool',
    activityOption: 'int',
    activityTypeOption: 'int',
    accOption: 'int',
    heartRateOption: 'int',
    rrIntervalOption: 'int',
    bpOption: 'int',
    afibOption: 'int',
    ppgAndAccOption: 'int',
    ppg2Option: 'int',
    bioZOption: 'int',
    temperatureRawOption: 'int',
    emographyOption: 'int',
    spo2Option: 'int',
    opticalOption: 'int',
    respirationRateOption: 'int',
    sleepStageOption: 'int',
    skinTemperatureOption: 'int',
    samplingRateOption: 'int',
    samplingRateEnabled: 'int',
    acc32hz: 'int',
    emographyTime: 'int',
    bioZTime: 'int',
    rawppgFreq: 'int',
    ppgGreenStatus: 'int',
    ppgRedStatus: 'int',
    ppgInfraRedStatus: 'int',
    ppgAmbientStatus: 'int',
    optInTerms: 'bool',
    optInPrivacy: 'bool',
    optInCommercial: 'bool',
    activityTab: 'bool',
    sleepTab: 'bool',
    heartRateTab: 'bool',
    stressTab: 'bool',
    webViewTab: 'bool',
    activityDash: 'bool?',
    sleepDash: 'bool?',
    heartRateDash: 'bool?',
    ecgDash: 'bool?',
    spo2Dash: 'bool?',
    respirationDash: 'bool?',
    nibpDash: 'bool?',
    stressDash: 'bool?',
    spirometerDash: 'bool?',
    weightDash: 'bool?',
    insightsDash: 'bool?',
    temperatureDash: 'bool?',
    workoutDash: 'bool?',
    dashboard: 'int',
    braceletConfiguration: 'int'
  }
}

exports.VivaLnkPeripheral = {
  name: 'VivaLnkPeripheral',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    type: 'string',
    deviceName: 'string',
    isActive: 'bool',
    dateConnected: 'date?'
  }
}

exports.WeightScalePeripheral = {
  name: 'WeightScalePeripheral',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    deviceName: 'string',
    model: 'string',
    isActive: 'bool',
    dateConnected: 'date?'
  }
}

exports.WeightScaleValues = {
  name: 'WeightScaleValues',
  properties: {
    date: 'date',
    weight: 'double',
    readyForSync: 'bool'
  }
}

exports.WorldTimer = {
  name: 'WorldTimer',
  properties: {
    tzName: 'string',
    tzCountry: 'string',
    tzTime: 'string',
    tzAbrevation: 'string',
    tzDescription: 'string',
    tzOffset: 'int'
  }
}

