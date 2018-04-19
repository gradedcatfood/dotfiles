# dotfiles

## Install i3
    sudo apt update
    sudo apt install i3

## Install i3 Gaps
    ./install_i3_gaps.sh

### Add config for i3 gaps
    echo 'for_window [class="^.*"] border pixel 0\ngaps inner 15\ngaps outer 15' >> ~/.config/i3/config

## Install i3 Blocks
    sudo apt install i3blocks
### Add config for i3 blocks
##### Manually need to edit the ~/.config/i3/config or just use my config file
    bar {
      status_command i3blocks
    }

### Add config file for i3blocks
    mkdir ~/.config/i3blocks

    cp /etc/i3blocks.conf ~/.config/i3blocks/config

## Install ZSH
    sudo apt install zsh
    sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

## Install Fonts
    ./install_ibm_fonts.sh

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

## Install imwheel
sudo install imwheel

## Add images for lock screen
    wget http://i.imgur.com/qY1nKlP.png -O lock.png; mv lock.png ~/Pictures/
