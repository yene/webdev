String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function RFC3339DateString(s) {
  var d = new Date(s);

  function pad(n) {
    return n < 10 ? '0' + n : n
  }

  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T'
    + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + 'Z';
}


function guid() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}
