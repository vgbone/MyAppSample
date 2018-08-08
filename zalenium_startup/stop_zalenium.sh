#! /bin/bash
#
#

echo "Zalenium: stopping..."
sudo docker rm $(sudo docker stop $(sudo docker ps -a -q --filter="name=zalenium"))