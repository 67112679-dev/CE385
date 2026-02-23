# Workshop 7: Prisma API Summary

### User Endpoints
- **POST** `/user`: สร้าง User ใหม่ (Body: name, email)
- **GET** `/users`: ดูรายชื่อทั้งหมด
- **GET** `/users/email/:email`: หาผู้ใช้ด้วยอีเมล
- **PUT** `/user/:id`: แก้ไขข้อมูลผู้ใช้ (UUID)
- **DELETE** `/users/:id`: ลบผู้ใช้ (UUID)

### Post Endpoints
- **POST** `/posts`: สร้างโพสต์ (Body: title, content, authorId)
- **GET** `/posts`: ดูโพสต์ทั้งหมด
- **GET** `/posts/:id`: ดูโพสต์รายบุคคล
- **PUT** `/posts/:id`: แก้ไขโพสต์
- **DELETE** `/posts/:id`: ลบโพสต์

*หมายเหตุ: ในการสร้าง Post ค่า `authorId` ใน Body ต้องนำมาจาก `Userid` ของผู้ใช้งานที่มีอยู่จริงเท่านั้น*