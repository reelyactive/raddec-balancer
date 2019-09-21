/**
 * Copyright reelyActive 2019
 * We believe in an open Internet of Things
 */


const DEFAULT_NUMBER_OF_TARGETS = 1;


/**
 * RaddecBalancer Class
 * Balance raddec traffic among targets.
 */
class RaddecBalancer {

  /**
   * RaddecBalancer constructor
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(options) {
    options = options || {};

    this.numberOfTargets = options.numberOfTargets ||
                           DEFAULT_NUMBER_OF_TARGETS;
  }

  /**
   * Balance the given raddec among the targets.
   * @param {Raddec} raddec The given Raddec instance.
   * @param {function} callback The function to call upon completion.
   */
  balanceRaddec(raddec, callback) {
    // TODO: support strategies other than modulo
    let targetIndex = parseInt(raddec.transmitterId, 16) %
                      this.numberOfTargets;

    return callback(raddec, targetIndex);
  }

}


module.exports = RaddecBalancer;
