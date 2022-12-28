/* eslint-disable max-classes-per-file */

export class GeneralModel {
  constructor(data) {
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.score = data.todayScore || data.score;
    this.calorieCount = data.keyData.calorieCount;
    this.proteinCount = data.keyData.proteinCount;
    this.carbohydrateCount = data.keyData.carbohydrateCount;
    this.lipidCount = data.keyData.lipidCount;
  }

  get getUserInfos() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };
  }

  get getScore() {
    return {
      score: this.score,
    };
  }

  get getKeyData() {
    return {
      calorieCount: this.calorieCount,
      proteinCount: this.proteinCount,
      carbohydrateCount: this.carbohydrateCount,
      lipidCount: this.lipidCount,
    };
  }
}

export class ActivityModel {
  constructor(data) {
    this.sessions = data.sessions;
  }

  get getSessions() {
    const sessionList = this.sessions.map((elem) => ({
      day: elem.day,
      kilogram: elem.kilogram,
      calories: elem.calories,
    }));

    return sessionList;
  }
}

export class PerformanceModel {
  constructor(data) {
    this.kind = data.kind;
    this.data = data.data;
    this.kindTranslate = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    };
  }

  get getPerformance() {
    const list = this.data.map((elem) => ({
      kind: this.kindTranslate[this.kind[elem.kind]],
      value: elem.value,
    }));

    return list;
  }
}

export class AverageSessionsModel {
  constructor(data) {
    this.sessions = data.sessions;
  }

  get getAverageSessions() {
    return this.sessions;
  }
}
