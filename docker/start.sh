#!/bin/bash
set -e
echo "Running migrations..."
cd /usr/src/app/drizzle
ls .
ls meta
npm run migrate  & PID=$!
# Wait for migration to finish
wait $PID
echo "Start application..."
node /usr/src/app/dist/src/main "$@" & PID=$!

wait $PID