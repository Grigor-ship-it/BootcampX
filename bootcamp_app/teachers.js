const { Pool } = require('pg');

let input = process.argv.slice(2);
let cohortName = input[0];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`

SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${cohortName}$'
ORDER BY teacher;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));

