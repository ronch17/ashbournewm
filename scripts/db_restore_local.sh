#!/usr/bin/env bash
# backup db from remote server -- wp @Asher
#

cd "$(dirname "$0")"

# source common variables
source ./variables.sh

#sh db_backup_local.sh

cd ..

gunzip -c  './backup/wp-ashbournewm2-com-2024-06-24-15:39:13.sql.gz' | docker exec -i ${LOCAL_DOCKER_NAMESPACE}-db-1 mariadb -u wordpress --password=${DB_PASSWORD} wordpress
