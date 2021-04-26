SELECT id, name, cohort_id
FROM students
WHERE email IS null OR phone IS null;