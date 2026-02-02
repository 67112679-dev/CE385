// 1. ฟังก์ชันแบบ Callback
function fetchDataWithCallback(callback) {
    console.log("กำลังดึงข้อมูลด้วย Callback... (รอ 2 วินาที)");
    setTimeout(() => {
        const data = "ข้อมูลจาก Callback สำเร็จ!";
        callback(data);
    }, 2000); // หน่วงเวลา 2000ms หรือ 2 วินาที
}

// 2. ฟังก์ชันแบบ Promise
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        console.log("กำลังดึงข้อมูลด้วย Promise... (รอ 2 วินาที)");
        setTimeout(() => {
            const data = "ข้อมูลจาก Promise สำเร็จ!";
            resolve(data);
        }, 2000);
    });
}

// --- การเรียกใช้งาน ---

// เรียกใช้แบบ Callback
fetchDataWithCallback((result) => {
    console.log("ผลลัพธ์:", result);
});

// เรียกใช้แบบ Promise
fetchDataWithPromise()
    .then((result) => {
        console.log("ผลลัพธ์:", result);
    })
    .catch((error) => {
        console.error("เกิดข้อผิดพลาด:", error);
    });