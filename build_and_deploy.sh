#!/bin/bash

git checkout gh-pages

git merge main

npm run build-ghpages

current_date=$(date +"%d_%m")

git add .
git commit -m "Build $current_date"

git push

git checkout main
