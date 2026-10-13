#!/bin/bash
# Prints cv/cv.html to public/DeLaPena_PrincessJaenaCV.pdf.
set -euo pipefail
cd "$(dirname "$0")/.."
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
    --virtual-time-budget=8000 --print-to-pdf=public/DeLaPena_PrincessJaenaCV.pdf "file://$PWD/cv/cv.html" 2>/dev/null
echo "built: public/DeLaPena_PrincessJaenaCV.pdf"
