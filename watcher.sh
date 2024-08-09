#!/bin/bash

WATCHED_DIR="/mnt/d/Download/btech-africa"
CHECK_INTERVAL=10  # Time between checks in seconds

# Initial snapshot
find "$WATCHED_DIR" -type f -print > /tmp/snapshot_before.txt

while true; do
	# Snapshot after changes
	find "$WATCHED_DIR" -type f -print > /tmp/snapshot_after.txt

		    # Compare snapshots
		    if ! cmp -s /tmp/snapshot_before.txt /tmp/snapshot_after.txt; then
			    /mnt/d/Download/btech-africa/auto_git.sh
			    # Update snapshot
			    cp /tmp/snapshot_after.txt /tmp/snapshot_before.txt
		    fi

		    sleep $CHECK_INTERVAL
	    done

