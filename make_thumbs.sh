#! /bin/bash

cd $1

for i in *.jpg; do
    if [ "$i" -nt "_thumbs/$i" ]; then
        convert "$i" -thumbnail 100 "_thumbs/$i";
    fi
done;

for i in *.JPG; do
    if [ "$i" -nt "_thumbs/$i" ]; then
        convert "$i" -thumbnail 100 "_thumbs/$i";
    fi
done;

cd -
