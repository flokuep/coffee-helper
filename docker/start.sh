#!/bin/bash
set -e
echo 'Running migrations...'
cd /usr/src/app/drizzle
ls -lart .
ls -lart meta
npm run migrate  & PID=$!
wait $PID

echo 'Start application...'
node /usr/src/app/dist/src/main "$@" & PID=$!
wait $PID