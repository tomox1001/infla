#!/bin/bash

IFS=$'\t' read -a COLUMNS
IDX_MX=$((${#COLUMNS[@]}-1))

while read line; do
    IFS=$'\t' read -a ROW <<< "$line"

    printf "{"
    for i in $(seq 0 $IDX_MX); do
        printf '"%s":"%s"' ${COLUMNS[$i]} ${ROW[$i]}

        if [ $i -ne $IDX_MX ] ; then
            printf ","
        fi
    done
    echo "}"
done
