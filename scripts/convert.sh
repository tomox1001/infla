#!/bin/bash
cat data/$1.tsv | sh ./tsv2json.sh > data/$1.json
