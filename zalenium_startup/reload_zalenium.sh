#! /bin/bash
#
#

echo "Zalenium: stopping..."
sudo docker rm $(sudo docker stop $(sudo docker ps -a -q --filter="name=zalenium"))

echo "Zalenium: starting..."
sudo docker run --rm -ti -d --name zalenium -p 4444:4444 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/videos:/home/seluser/videos --privileged johnwwm/zalenium start --timeZone "US/Mountain" --desiredContainers 4