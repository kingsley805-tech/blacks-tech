#!/bin/bash

# Navigate to the repository directory
cd /mnt/d/Download/btech-africa || exit

# Add all changes to the staging area
git add -A

# Commit changes with a message including the current timestamp
git commit -m "Automated commit: $(date +'%Y-%m-%d %H:%M:%S')"

# Push changes to the remote repository
git push

echo "Changes have been pushed to the repository."

