/* eslint-disable max-classes-per-file */

/**
 * Class for "general" data model
 * @class
 *
 * @constructor
 *
 * @property firstName          the user's first name
 * @property lastName           the user's last name
 * @property age                the user's age
 * @property score              the daily target score completion (percentage)
 * @property calorieCount       the amount of calories burned
 * @property proteinCount       the amount of proteins eaten
 * @property carbohydrateCount  the amount of carbohydrates eaten
 * @property lipidCount         the amount of lipids eaten
 * */
export class GeneralModel {
  /**
   * @param {Object} data The data object
   */
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

  /**
   * Get main user's info (first name, last name, age).
   * @return {Object} Object data dictionary
   */
  get getUserInfos() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };
  }

  /**
   * Get the daily score of the user.
   * @return {Object} Object data dictionary
   */
  get getScore() {
    return {
      score: this.score,
    };
  }

  /**
   * Get the nutrition data of the user.
   * @return {Object} Object data dictionary
   */
  get getKeyData() {
    return {
      calorieCount: this.calorieCount,
      proteinCount: this.proteinCount,
      carbohydrateCount: this.carbohydrateCount,
      lipidCount: this.lipidCount,
    };
  }
}

/**
 * Class for "activity" data model
 * @class
 *
 * @constructor
 *
 * @property sessions the session list
 * */
export class ActivityModel {
  /**
   * @param {Object} data The data object
   */
  constructor(data) {
    this.sessions = data.sessions;
  }

  /**
   * Get the nutrition data of the user.
   * @return {Array} Array of objects with daily statistics.
   */
  get getSessions() {
    const sessionList = this.sessions.map((elem) => ({
      day: elem.day,
      kilogram: elem.kilogram,
      calories: elem.calories,
    }));

    return sessionList;
  }
}

/**
 * Class for "performance" data model
 * @class
 *
 * @constructor
 *
 * @property kind           the category list
 * @property data           the data list by category
 * @property kindTranslate  a dictionary of categories label
 * */
export class PerformanceModel {
  /**
   * @param {Object} data The data object
   */
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

  /**
   * Get the user's statistics by category
   * @return {Array} Array of objects with value by category.
   */
  get getPerformance() {
    const list = this.data.map((elem) => ({
      kind: this.kindTranslate[this.kind[elem.kind]],
      value: elem.value,
    }));

    return list;
  }
}

/**
 * Class for "average sessions" data model
 * @class
 *
 * @constructor
 *
 * @property sessions the sessions list by day
 * */
export class AverageSessionsModel {
  /**
   * @param {Object} data The data object
   */
  constructor(data) {
    this.sessions = data.sessions;
  }

  /**
   * Get the user's average time exercise by day.
   * @return {Array} Array of objects with time spent by day.
   */
  get getAverageSessions() {
    return this.sessions;
  }
}
