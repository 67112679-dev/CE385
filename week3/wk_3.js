// 1. ประกาศตัวแปรคะแนนสอบ 3 วิชา
let mathScore = 85;
let scienceScore = 72;
let englishScore = 90;

// 2. คำนวณคะแนนรวม
let totalScore = mathScore + scienceScore + englishScore;

// 3. คำนวณค่าเฉลี่ย
let averageScore = totalScore / 3;

// 4. ตรวจสอบว่าคะแนนเฉลี่ยมากกว่าหรือเท่ากับ 80 หรือไม่
let isPassed = averageScore >= 80;

// แสดงผลลัพธ์ตามรูปแบบที่กำหนด
console.log("คะแนนรวม: " + totalScore);
console.log("คะแนนเฉลี่ย: " + averageScore);
console.log("คะแนนเฉลี่ย >= 80: " + isPassed);