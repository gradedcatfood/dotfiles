echo "RUN THIS IN DOWNLOADS FOLDER"

sudo apt update
sudo apt install i3


sudo apt install libxcb1-dev libxcb-keysyms1-dev libpango1.0-dev libxcb-util0-dev libxcb-icccm4-dev libyajl-dev libstartup-notification0-dev libxcb-randr0-dev libev-dev libxcb-cursor-dev libxcb-xinerama0-dev libxcb-xkb-dev libxkbcommon-dev libxkbcommon-x11-dev autoconf xutils-dev libtool libxcb-shape0-dev 

cd ~/Downloads/
mkdir tmp
cd /tmp
git clone https://www.github.com/Airblader/i3 i3-gaps
cd i3-gaps
git checkout gaps && git pull
autoreconf --force --install
rm -rf build
mkdir build
cd build
../configure --prefix=/usr --sysconfdir=/etc
make
sudo make install
cd ~/Downloads/
rm -rf tmp

mkdir tmp
cd tmp
git clone https://github.com/IBM/plex.git
sudo cp -r /home/$USER/Downloads/tmp/plex/IBM-Plex-Mono/fonts/complete/ttf /usr/share/fonts/truetype
sudo mv /usr/share/fonts/truetype/ttf /usr/share/fonts/truetype/ibm-plex-mono
cd /usr/share/fonts/truetype/ibm-plex-mono
sudo chmod 644 ./*

sudo cp -r /home/$USER/Downloads/tmp/plex/IBM-Plex-Sans/fonts/complete/ttf /usr/share/fonts/truetype
sudo mv /usr/share/fonts/truetype/ttf /usr/share/fonts/truetype/ibm-plex-sans
cd /usr/share/fonts/truetype/ibm-plex-sans
sudo chmod 644 ./*

sudo cp -r /home/$USER/Downloads/tmp/plex/IBM-Plex-Serif/fonts/complete/ttf /usr/share/fonts/truetype
sudo mv /usr/share/fonts/truetype/ttf /usr/share/fonts/truetype/ibm-plex-serif
cd /usr/share/fonts/truetype/ibm-plex-serif
sudo chmod 644 ./*

cd ~/Downloads/

fc-cache -f -v

sudo apt install i3blocks

sudo apt install zsh
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

sudo apt install arc-theme

sudo add-apt-repository ppa:moka/daily
sudo apt update
sudo apt install moka-icon-theme faba-icon-theme faba-mono-icons

sudo apt install compton

sudo apt install lxappearance

sudo apt install pavucontrol

wget http://i.imgur.com/qY1nKlP.png -O lock.png; mv lock.png ~/Pictures/

sudo snap install pycharm-professional --classic

sudo snap install spotify

sudo apt install thunar

sudo apt install imwheel

sudo apt install fonts-font-awesome
