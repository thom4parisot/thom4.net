#!/usr/bin/bash

set -e

node --run build
rsync -a --compress --stats --delete ./_site/ thom4:../www/
