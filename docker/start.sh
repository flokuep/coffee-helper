#!/usr/bin/env bash
console.log("Running migrations...")
exec npm --path /usr/src/app/drizzle run migrate
console.log("Start application...")
exec node /usr/src/app/dist/src/main "$@"