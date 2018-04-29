# Useful Things

## Force an app to open in workspace
    # Force App to open in certain workspace
    xprop # → then click the app and get the Class

    # Add to ~/.config/i3/config
    assign [class="CLASS_NAME"] $WORKSPACE


## Pycharm
    sudo snap install pycharm-professional --classic

## Spotify
    sudo snap install spotify

## Alt File Explorer
    sudo apt install thunar


## Resolution issues
#### [How To Link](https://superuser.com/questions/1111788/i3-how-to-save-background-and-screen-resolution)

    xrandr # to get OUTPUT name and MODE is just 1920x1080 or w/e
    xrandr --output OUTPUT --mode MODE


## Cava for those sick tunes
https://github.com/karlstav/cava#ubuntu