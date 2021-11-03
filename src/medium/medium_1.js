import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    const reducer = (prev, curr) => prev + curr;
    return array.reduce(reducer);
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort(function(x, y) {
        return x - y;
    });

    let mid = Math.floor(array.length/2);
    if (array.length % 2) {
        return array[mid];
    } else {
        return (array[half-1] + array[half])/2.0;
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var length = array.length;
    var sum = getSum(array);
    var mean = sum / length;
    var median = getMedian(array);
    var min = Math.min(array);
    var max = Math.max(array);
    var variance = variance(array, mean);
    var std = Math.sqrt(variance);
    return {"length": length, "sum": sum, "mean": mean, "median": median, "min": min, "max": max, "variance": variance, "standard_deviation": std}
}

