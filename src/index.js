// You should implement your task here.

module.exports = (matrix) => matrix && matrix.length ? matrix.reduce((a, b, i) => [...a, ...(i % 2 ? b.reverse() : b)], []) : []