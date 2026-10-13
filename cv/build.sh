#!/bin/bash
# Prints cv/cv.html to public/DeLaPena_PrincessJaenaCV.pdf (public, no reference contacts).
# If cv/references.local.html exists (never committed), also makes a private copy with references
# at ~/Downloads/DeLaPena_PrincessJaenaCV_with_references.pdf.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
print() {
    "$CHROME" --headless=new --no-pdf-header-footer --virtual-time-budget=8000 \
        --print-to-pdf="$2" "file://$PWD/$1" 2>/dev/null
}
print cv/cv.html public/DeLaPena_PrincessJaenaCV.pdf
echo "public:  public/DeLaPena_PrincessJaenaCV.pdf"

if [ -f cv/references.local.html ]; then
    tmp=cv/.cv-with-refs.local.html
    python3 - "$tmp" <<'PY'
import re, sys
src = open('cv/cv.html').read()
refs = open('cv/references.local.html').read()
out = re.sub(r'<!-- REFERENCES -->.*?<!-- /REFERENCES -->', refs, src, flags=re.S)
open(sys.argv[1], 'w').write(out)
PY
    print "$tmp" "$HOME/Downloads/DeLaPena_PrincessJaenaCV_with_references.pdf"
    rm -f "$tmp"
    echo "private: ~/Downloads/DeLaPena_PrincessJaenaCV_with_references.pdf"
fi
