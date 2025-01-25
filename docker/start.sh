#!/bin/bash
set -e
echo 'Running migrations...'
cd /usr/src/app/db-migrations
npm run migrate  & PID=$!
wait $PID

echo 'Start application...'
node /usr/src/app/dist/src/main "$@" & PID=$!
wait $PID