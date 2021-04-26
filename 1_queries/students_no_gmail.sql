SELECT name, email, id, cohort_id
FROM students
WHERE phone IS null AND email NOT LIKE '%gmail.com'