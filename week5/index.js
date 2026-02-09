const express = require('express');
const app = express();

// ต้องมีบรรทัดนี้เพื่อให้ Express อ่านข้อมูล JSON จาก body ได้ (ตามที่โจทย์สั่ง)
app.use(express.json());

// ข้อมูลนักศึกษาตั้งต้นตามโจทย์
let students = [
    { id: 1, name: "Nutdanai", age: 26 },
    { id: 2, name: "Gitsada", age: 25 },
    { id: 3, name: "Varamon", age: 25 }
];

const validateStudent = (req, res, next) => {
    const { name, age } = req.body;
    // ถ้าไม่มี name หรือ age ให้ส่ง error 400 และข้อความ "Invalid data"
    if (!name || !age) {
        return res.status(400).send("Invalid data");
    }
    next(); // ข้อมูลครบ ให้ไปทำงานต่อ
};

// GET /students - แสดงข้อมูลนักศึกษาทั้งหมด
app.get('/students', (req, res) => {
    res.send(students);
});

// GET /students/:id - แสดงข้อมูลนักศึกษาคนหนึ่งตาม ID
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.send(student);
    } else {
        res.status(404).send("Error 404: Student not found");
    }
});

// POST /students - เพิ่มนักศึกษาใหม่ (ข้อมูลส่งมาเป็น JSON)
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newStudent);
    res.status(201).send(newStudent);
});

// PUT /students/:id - แก้ไขข้อมูลนักศึกษาตาม ID
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        student.name = req.body.name;
        student.age = req.body.age;
        res.send(student);
    } else {
        res.status(404).send("Student not found to update");
    }
});

// DELETE /students/:id - ลบข้อมูลนักศึกษาตาม ID
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);
        res.send(deletedStudent);
    } else {
        res.status(404).send("Student not found to delete");
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});