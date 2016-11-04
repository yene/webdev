Object.defineProperty(Array.prototype, 'contains', {
  enumerable: false,
  value: Array.prototype.includes
});
Object.defineProperty(String.prototype, 'contains', {
  enumerable: false,
  value: String.prototype.includes
});
window.location.redirect = window.location.replace;

