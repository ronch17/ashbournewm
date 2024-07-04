#!/usr/bin/env bash

DB_PASSWORD="q+NF6_6rXTxM@?UJ"

DEST_USER="proftit"
DEST_SERVER="${DEST_USER}@213.210.20.110"
DEST_SERVER_IP="213.210.20.110"
DEST_DOCKER_USER="www-data"
DEST_DOMAIN="ashbournewm2.com"
DEST_DIRECTORY="ashbournewm2"
DEST_BRANCH="master"
DEST_DOCKER_NAMESPACE="ashbournewm2"
DEST_DB_EXPORT_NAME="ashbournewm2-com"

#STAGE_USER="integration"
#STAGE_SERVER="${STAGE_USER}@35.241.169.22"
#STAGE_DOCKER_USER="www-data"
#STAGE_DOCKER_NAMESPACE="ashbournewm2"
#STAGE_DIRECTORY="ashbournewm2"
#STAGE_BRANCH="master"
#STAGE_DB_EXPORT_NAME="ashbournewm2-stage"


source ./variables_local.sh
