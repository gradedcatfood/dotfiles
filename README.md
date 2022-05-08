# dotfiles

# Laravel Valet/trust SSL Certs

    # Download hombrew
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/mmillis/.zshrc
    sudo apt-get install build-essential
    brew install gcc
    brew install mkcert

    # Make your cert
    cd .valet/Certificates
    mkcert orientation.local.uci.edu "*.orientation.local.uci.edu" localhost 127.0.0.1 ::1

    # Point Valet config to new files
    vim ~/.valet/Nginx/orientation.local.uci.edu.test

    # Change block
    ssl_certificate /home/mmillis/.valet/Certificates/orientation.local.uci.edu+4.pem;
    ssl_certificate_key /home/mmillis/.valet/Certificates/orientation.local.uci.edu+4-key.pem;

    # Restart Valet
    valet restart

    # Restart chrome



## Install i3 and i3blocks
    https://gist.github.com/boreycutts/6417980039760d9d9dac0dd2148d4783
    https://www.howtoinstall.me/ubuntu/18-04/i3blocks/
    
    place i3 and i3blocks config in config locations

## Install ZSH
    sudo apt install zsh
    sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

## Install Fonts
    ./install_ibm_fonts.sh
    sudo apt install fonts-font-awesome

## Install Arc Theme
    sudo apt install arc-theme

## Install Icons
    sudo add-apt-repository ppa:moka/daily
    sudo apt update
    sudo apt install moka-icon-theme faba-icon-theme faba-mono-icons

## Install compton
    sudo apt install compton

## Install Lxappearance
    sudo apt install lxappearance

#### Open lxappearance and select the new theme and icons

## Install audio controls
    sudo apt install pavucontrol
    
    # Get this too
    https://github.com/acrisci/playerctl/releases

## Install imwheel
    sudo apt install imwheel
    
## Install maim for screenshots
    sudo apt install maim

## Install openconnect vpn
    sudo apt install openconnect
    
## Install Composer
    sudo apt install composer
    
## Install Dunst
    https://github.com/dunst-project/dunst
    copy config dunst folder
    
## Install xscreensaver
    https://vitux.com/how-to-replace-gnome-screensaver-with-xscreensaver-on-ubuntu/
    
## Add images for lock screen
    wget http://i.imgur.com/qY1nKlP.png -O lock.png; mv lock.png ~/Pictures/lockscreen/
