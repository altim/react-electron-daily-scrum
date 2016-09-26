#!/bin/bash
sed -i "s/{{username}}/$USER/g" resources/app/app/dist/js/main.js
echo "SETUP DONE."