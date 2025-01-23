#!/bin/bash
set -e
echo "Running migrations..."
npm --prefix "/usr/src/app/drizzle" run migrate  & PID=$!
# Wait for migration to finish
wait $PID
echo "Start application..."
node /usr/src/app/dist/src/main "$@" & PID=$!

wait $PID