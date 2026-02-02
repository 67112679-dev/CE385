Workshop 3.1: operation.js, index.js

Workshop 3.2: eventloop.js

Workshop 3.3: async_await.js

Workshop 3.4: parallel_promise.js

รายละเอียดแต่ละ Workshop
Workshop 3.1: Custom Module (การส่งออกฟังก์ชันเดียว)
เป็นการเรียนรู้วิธีสร้างโมดูลแยกส่วนเพื่อให้โค้ดเป็นระเบียบ

การทำงาน: สร้างฟังก์ชัน operation รับค่า type เพื่อเลือกว่าจะ บวก, ลบ, คูณ หรือ หาร

หัวใจหลัก: ใช้ module.exports = operation เพื่อส่งออกฟังก์ชัน และใช้ require('./operation') ในการนำเข้าข้อมูลมาใช้ในไฟล์หลัก

Workshop 3.2: Callbacks และ Promises
เปรียบเทียบการจัดการงานที่ต้องรอเวลา (Asynchronous) เช่น การดึงข้อมูล

Callback: ส่งฟังก์ชันเข้าไปเป็นพารามิเตอร์ และจะถูกเรียกใช้เมื่อทำงานเสร็จ (ใช้เวลา 2 วินาที)

Promise: คืนค่าเป็น Object ที่ "สัญญา" ว่าจะคืนข้อมูลให้ในอนาคต จัดการผลลัพธ์ผ่าน .then() และ .catch()

Workshop 3.3: Async/Await และ Try/Catch
การเขียนโค้ด Asynchronous ให้ดูสะอาดและอ่านง่ายเหมือนโค้ดปกติ

การทำงาน: ใช้ async นำหน้าฟังก์ชัน และ await เพื่อหยุดรอ Promise จนกว่าจะสำเร็จ

การจัดการ Error: ใช้บล็อก try...catch เพื่อดักจับข้อผิดพลาด เช่น หากตั้งค่า timeout น้อยกว่า 1000ms จะเกิด Error ทันที

Workshop 3.4: Promise แบบขนาน (Parallel)
การจัดการกับหลาย Event พร้อมกันในสถานการณ์จริง

Promise.any(): แข่งกันหา Server ตัวแรกที่ "สำเร็จ" เท่านั้น (ไม่สนใจตัวที่พังก่อน)

Promise.allSettled(): รอจนกว่าทุก Server จะทำงานเสร็จทั้งหมด แล้วแสดงสถานะของทุกตัวออกมาเป็น Object ว่าตัวไหนผ่านหรือตัวไหนล้มเหลว