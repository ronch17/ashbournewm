#!/usr/bin/env bash

DB_PASSWORD="q+NF6_6rXTxM@?UJ"

DEST_USER="proftit"
DEST_SERVER="${DEST_USER}@213.210.20.110"
DEST_SERVER_IP="213.210.20.110"
DEST_DOCKER_USER="www-data"
DEST_DOMAIN="ashbournewm.com"
DEST_DIRECTORY="ashbournewm"
DEST_BRANCH="master"
DEST_DOCKER_NAMESPACE="ashbournewm"
DEST_DB_EXPORT_NAME="ashbournewm-com"

#STAGE_USER="integration"
#STAGE_SERVER="${STAGE_USER}@35.241.169.22"
#STAGE_DOCKER_USER="www-data"
#STAGE_DOCKER_NAMESPACE="ashbournewm"
#STAGE_DIRECTORY="ashbournewm"
#STAGE_BRANCH="master"
#STAGE_DB_EXPORT_NAME="ashbournewm-stage"


source ./variables_local.sh
