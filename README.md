安装nodejs
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -  
sudo apt-get install -y nodejs
sudo ln -s /usr/bin/nodejs /usr/bin/node  

重新安装nginx
To recreate it, first uninstall using purge to remove even configuration files and records:

sudo apt-get purge nginx nginx-common nginx-full
then reinstall:

sudo apt-get install nginx
If above doesn't work for you, you can also try using --force-confmiss option of dpkg.

sudo dpkg --force-confmiss -i /var/cache/apt/archives/nginx-common_*.deb 