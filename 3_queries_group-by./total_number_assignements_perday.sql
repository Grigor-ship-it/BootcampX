SELECT COUNT(*) as total_assignments, day
FROM assignments
GROUP BY day
HAVING COUNT(*) >= 10
ORDER BY day;

