import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

// create new functions to help with const allCarStats
export function getAvgMPG() {
    var highway = 0;
    var city = 0;
    for (var i = 0; i < mpg_data.length; i++) {
        highway += mpg_data[i].highway_mpg;
        city += mpg_data[i].city_mpg
    }
    let cityAvg = city/mpg_data.length;
    let highAvg = highway/mpg_data.length;
    return {cityAvg, highwayAvg}
}

export function yearStat() {
    var yearArr = [];
    for (var i = 0; i < mpg_data.length; i++) {
        yearArr.push(mpg_data[i].year)
    }
    return getStatistics(yearArr)
}

export function ratio() {
    var hybrid = 0;
    for (var i = 0; i < mpg_data.length; i++) {
        if (array[i].hybrid == true) {
            hybrid++;
        }
    }
    var ratioed = hybrid/mpg_data.length;
    return ratioed
}

export const allCarStats = {
    avgMpg: getAvgMPG(),
    allYearStats: yearStat(),
    ratioHybrids: ratio(),
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

// create some more functions for const moreStats
export function makerHybrid() {
    var hyb = [];
    var nonhyb = [];
    for (var i = 0; i < mpg_data.length; i++) {
        if (!nonhyb.includes(mpg_data[i].make) && mpg_data[i].hybrid) {
            nonhyb.push(mpg_data[i].make)
        }
    }
    for (var j = 0; j < mpg_data.length; j++) {
        var hybridModels = {};
        var models = [];
        hybridModels['make'] = nonhyb[j]
        for (var k = 0; k < mpg_data.length; k++) {
            if (mpg_data[k].make == nonhyb[i] && mpg_data[k].hybrid) {
                models.push(mpg_data[k].id)
            }
        }
        hybridModels["hybrids"] = models;
        hyb.push(hybridModels)
    }
    return hyb
}

export function mpgYearHybrid() {
    var mpgs = {};
    var year = [];
    for (var i = 0; i < mpg_data.length; i++) {
        yearArr.push(mpg_data[i].year)
    }
    for (var j = 0; j < year.length; j++) {
        mpgs[year[j]] = {};
        var hybridAt = {};
        var nonHybridAt = {};
        var hybC = 0;
        var nonHybC = 0;
        var hybH = 0;
        var nonHybH = 0;
        var hCounter = 0;
        var nCounter = 0;
        for (var k = 0; k < mpg_data.length; k++) {
            if (mpg_data[k].year == year[j] && mpg_data[k].hybrid) {
                hybC += mpg_data[k].city_mpg;
                hybH += mpg_data[k].highway_mpg;
                hCounter += 1
            } else if (mpg_data[k].year == year[j] && !mpg_data[k].hybrid) {
                nonHybC += mpg_data[k].city_mpg;
                nonHybH += mpg_data[k].highway_mpg;
                nCounter += 1
            }
        }
        hybridAt.city = hybC/hCounter;
        hybridAt.highway = hybH/hCounter;
        nonHybridAt.city = nonHybC/nCounter;
        nonHybridAt.highway = nonHybH/nCounter;
        mpgs[year[j]].hybrid = hybridAt;
        mpgs[year[j]].notHybrid = nonHybridAt;
    }
}

export const moreStats = {
    makerHybrids: makerHybrid(),
    avgMpgByYearAndHybrid: mpgYearHybrid()
};
