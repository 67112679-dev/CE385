const operation = require('./operation');

// ทดสอบการทำงานตามตัวอย่างในโจทย์
console.log(operation('add', 4, 5));        // ควรคืนค่า 9
console.log(operation('subtract', 10, 3));   // ควรคืนค่า 7
console.log(operation('multiply', 5, 6));   // ควรคืนค่า 30
console.log(operation('divide', 8, 2));     // ควรคืนค่า 4
console.log(operation('unknown', 1, 1));    // ควรคืนค่า 'Invalid operation type'