#!/usr/bin/env bash
# Mutation check for the logger-redaction fixes. Each mutant reverts one fix;
# the jest suite must go red. M0 is the null control (must stay green).
# Files are backed up and restored on exit; run `git diff --stat` afterwards.
set -u
cd "$(git rev-parse --show-toplevel)"
B=$(mktemp -d)
cp src/Api/Login.ts src/Middleware/logger.service.ts "$B/"
restore(){ cp "$B/Login.ts" src/Api/Login.ts; cp "$B/logger.service.ts" src/Middleware/logger.service.ts; }
trap restore EXIT
run(){ npx jest tests/LoggerRedaction.test.ts --forceExit >/dev/null 2>&1 && echo green || echo red; }
echo "M0 null-control: $(run) (expect green)"
sed -i 's#Logger.logfunction("LoginToBackend", \[email, "\[REDACTED\]", application\]);#Logger.logfunction("LoginToBackend", arguments);#' src/Api/Login.ts
echo "M1 login passes raw arguments: $(run) (expect red)"; restore
sed -i 's#let myarguments: any = redactLogArguments(args);#let myarguments: any = args;#' src/Middleware/logger.service.ts
echo "M2 logfunction skips redaction: $(run) (expect red)"; restore
