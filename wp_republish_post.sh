COMMAND=`cat << EndOfMessage
update wp_posts
set post_date = now(),
post_date_gmt = date_add(now(), interval -8 hour),
post_modified = now(),
post_modified_gmt = date_add(now(), interval -8 hour),
post_title = concat(date_format(now(), '%M %Y'), ' - updated ', now())
where post_title like concat(date_format(now(), '%M %Y'), '%') and post_status = 'publish'
limit 1
EndOfMessage
`

WPCONFIG=/home/reitdat1/www/wp-config.php

USER=$(grep -Eo "DB_USER',.+'" $WPCONFIG | cut -d "'" -f 3)
PASSWORD=$(grep -Eo "DB_PASSWORD',.+'" $WPCONFIG | cut -d "'" -f 3)
DB=$(grep -Eo "DB_NAME',.+'" $WPCONFIG | cut -d "'" -f 3)

mysql -u $USER --password=${PASSWORD} -e "$COMMAND" $DB