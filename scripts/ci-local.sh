#!/bin/sh
# Mismos pasos que .github/workflows/ci.yml, para cuando Actions no corre.
set -e
cd "$(dirname "$0")/.."
for t in test-fsrs test-lab-models test-studio test-legacy test-lesson-check check-lesson; do
  printf '%s: ' "$t"
  node "scripts/$t.mjs" > /dev/null
  echo ok
done
gitleaks git . --config .gitleaks.toml --redact --no-banner
echo "CI local en verde"
