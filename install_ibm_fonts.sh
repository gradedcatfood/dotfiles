#!/usr/bin/env bash

mkdir tmp
cd tmp
git clone https://github.com/IBM/plex.git
sudo cp -r /home/~$USER/Downloads/tmp/plex/IBM-Plex-Mono/fonts/complete/ttf /usr/share/fonts/truetype
sudo mv /usr/share/fonts/truetype/ttf /usr/share/fonts/truetype/ibm-plex-mono
cd /usr/share/fonts/truetype/ibm-plex-mono
sudo chmod 644 ./*

sudo cp -r /home/~$USER/Downloads/tmp/plex/IBM-Plex-Sans/fonts/complete/ttf /usr/share/fonts/truetype
sudo mv /usr/share/fonts/truetype/ttf /usr/share/fonts/truetype/ibm-plex-sans
cd /usr/share/fonts/truetype/ibm-plex-sans
sudo chmod 644 ./*

sudo cp -r /home/~$USER/Downloads/tmp/plex/IBM-Plex-Serif/fonts/complete/ttf /usr/share/fonts/truetype
sudo mv /usr/share/fonts/truetype/ttf /usr/share/fonts/truetype/ibm-plex-serif
cd /usr/share/fonts/truetype/ibm-plex-serif
sudo chmod 644 ./*

fc-cache -f -v

# reboot