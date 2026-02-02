// 1. สร้างฟังก์ชันจำลองการดึงข้อมูลจาก 3 เซิร์ฟเวอร์
const fetchDataFromServer1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ข้อมูลจาก Server 1 (2 วินาที)"), 2000);
    });
};

const fetchDataFromServer2 = () => {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Error: Server 2 ล้มเหลว (1 วินาที)"), 1000);
    });
};

const fetchDataFromServer3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ข้อมูลจาก Server 3 (3 วินาที)"), 3000);
    });
};

// --- การจัดการตามสถานการณ์ ---

async function runWorkshop() {
    const servers = [fetchDataFromServer1(), fetchDataFromServer2(), fetchDataFromServer3()];

    // กรณีที่ 1: ต้องการข้อมูลจากเซิร์ฟเวอร์แรกที่ตอบสนองสำเร็จ (ใช้ Promise.any)
    console.log("--- เริ่มกรณีที่ 1: หาตัวที่สำเร็จตัวแรก ---");
    try {
        const firstSuccess = await Promise.any(servers);
        console.log("ผลลัพธ์กรณีที่ 1:", firstSuccess);
    } catch (error) {
        console.log("กรณีที่ 1 ล้มเหลวทั้งหมด:", error);
    }

    console.log("\n----------------------------\n");

    // กรณีที่ 2: จัดการผลลัพธ์ทั้งหมดไม่ว่าจะสำเร็จหรือล้มเหลว (ใช้ Promise.allSettled)
    console.log("--- เริ่มกรณีที่ 2: แสดงสถานะทุกเซิร์ฟเวอร์ ---");
    const allResults = await Promise.allSettled(servers);
    console.log("ผลลัพธ์กรณีที่ 2 (แบบ Object):");
    console.log(allResults);
}

runWorkshop();