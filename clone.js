/*
 * Alternative: convert to JSON and back.
 * Faster, but it converts Date to string and loses functions.
 * var newObj = JSON.parse(JSON.stringify(obj))
 */

function clone(obj) {
    var copy;

    // Handle String, Number, Boolean, null or undefined
    if (null == obj || 'object' != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error('Unable to copy obj! Its type isn\'t supported.');
}
