`use strict`;

// function getElementWidth(content, padding, border) {
//   return (
//     Number.parseFloat(content) +
//     Number.parseFloat(padding) * 2 +
//     Number.parseFloat(border) * 2
//   );
// }
// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

function formatDuration(seconds) {
  // Edge case: if duration is 0
  if (seconds === 0) return 'now';

  // Define units in seconds
  const units = [
    { label: 'year', seconds: 365 * 24 * 60 * 60 },
    { label: 'day', seconds: 24 * 60 * 60 },
    { label: 'hour', seconds: 60 * 60 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  // Array to store the parts of the result
  const resultParts = [];

  // Calculate each unit's value
  for (const unit of units) {
    const unitValue = Math.floor(seconds / unit.seconds);
    if (unitValue > 0) {
      // Add formatted unit (singular/plural)
      resultParts.push(
        unitValue + ' ' + unit.label + (unitValue > 1 ? 's' : '')
      );
      // Reduce the remaining seconds
      seconds -= unitValue * unit.seconds;
    }
  }

  // Format the result using commas and "and"
  const lastPart = resultParts.pop(); // Get the last part
  return resultParts.length > 0
    ? resultParts.join(', ') + ' and ' + lastPart
    : lastPart;
}

// Example Usage:
console.log(formatDuration(3662)); // Output: "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(0)); // Output: "now"
console.log(formatDuration(31536000)); // Output: "1 year"
