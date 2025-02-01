#!/bin/bash
set -e
echo 'Running migrations...'
cd /usr/src/app/db-migrations
npm run migrate  & PID=$!
wait $PID

echo 'Start application...'
cd /usr/src/app/apps/server/dist/src
node main "$@" & PID=$!
wait $PID