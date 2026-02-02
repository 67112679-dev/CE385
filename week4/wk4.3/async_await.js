// 1. ฟังก์ชันจำลองการทำงานด้วย Promise
function simulateAsyncOperation(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeout >= 1000) {
                resolve(`ดึงข้อมูลสำเร็จ! (ใช้เวลา ${timeout}ms)`);
            } else {
                reject("Error: ระยะเวลา timeout น้อยเกินไป (ต้องไม่ต่ำกว่า 1000ms)");
            }
        }, timeout);
    });
}

// 2. ฟังก์ชันที่ใช้ async/await และ try/catch
async function performAsyncTask(timeoutValue) {
    try {
        console.log(`--- เริ่มการทำงาน (Timeout: ${timeoutValue}ms) ---`);
        const result = await simulateAsyncOperation(timeoutValue);
        console.log("ผลลัพธ์:", result);
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error);
    } finally {
        console.log("จบการทำงานในรอบนี้\n");
    }
}

// 3. เรียกใช้ฟังก์ชันตามเงื่อนไขที่โจทย์กำหนด
// ครั้งที่ 1: ให้ส่ง 1500 มิลลิวินาที (สำเร็จ)
performAsyncTask(1500);

// ครั้งที่ 2: ให้ส่ง 500 มิลลิวินาที (ล้มเหลว/Error)
setTimeout(() => {
    performAsyncTask(500);
}, 2000); // หน่วงเวลาเรียกครั้งที่ 2 เพื่อไม่ให้ log ตีกัน