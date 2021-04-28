const { Pool } = require('pg');

let input = process.argv.slice(2);
let cohortName = input[0];
let limit = input[1];
const values = [`%${cohortName}%`, `${limit}` ];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

pool.query(queryString, values)

.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack)); 