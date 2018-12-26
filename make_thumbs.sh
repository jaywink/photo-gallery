#! /bin/bash

set -x

# Ensure clean image build
rm -rf images/
mkdir -p images/_thumbs
mkdir -p images/_medium

curdir=`pwd`

cd $1

# Copy source images
cp {*.jpg,*.png,*.JPG,*.PNG} $curdir/images/

cd $curdir/images

# Remove spaces
for f in *\ *; do mv "$f" "${f// /_}"; done

# Create medium and thumb sizes
for i in {*.jpg,*.png,*.JPG,*.PNG}; do
    if [ "$i" -nt "_medium/$i" ]; then
        convert "$i" -resize 'x1024' "_medium/$i";
    fi
    if [ "$i" -nt "_thumbs/$i" ]; then
        convert "$i" -thumbnail 'x100' "_thumbs/$i";
    fi
done;

cd $curdir
