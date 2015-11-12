files="./data/*.json"
for filepath in $files; do
    echo $filepath
    file=${filepath##*/}
    filename=${file%.*}

    mongoimport -d mt -c $filename --file $filepath
done

