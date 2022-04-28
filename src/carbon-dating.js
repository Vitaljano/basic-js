const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    const sample = 1 * sampleActivity;

    if (isNaN(sample)) {
      return false;
    }

    if (sample < MODERN_ACTIVITY && sample > 0) {
      const ln = 0.693;
      const k = ln / HALF_LIFE_PERIOD;
      const t = Math.log(MODERN_ACTIVITY / sample) / k;
      const result = Math.ceil(t);

      return result;
    }
  }
  return false;
}

// console.log(dateSample('1s'));

module.exports = {
  dateSample,
};
