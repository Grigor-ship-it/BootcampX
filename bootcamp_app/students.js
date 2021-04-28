const { Pool } = require('pg');

let input = process.argv.slice(2);
let cohortName = input[0];
let limit = input[1];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohortName}%'
LIMIT ${limit};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));