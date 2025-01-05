#!/usr/bin/env bash
echo "Running migrations..."
cd /usr/src/app/drizzle
exec npm run migrate
echo "Start application..."
exec node /usr/src/app/dist/src/main "$@"