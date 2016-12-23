#!/bin/bash

current_basename=`basename $PWD`
echo $current_basename
if [ "$current_basename" != "reitdata" ] ; then
    cd reitdata
    echo $PWD
fi

#1 crawl, 0 dun crawl
CMD_CRAWL_OPT=1
#1 clear the html, 0 dun clear
CMD_CLEAR_OPT=1

CMD_DEBUG_OPT=0
CMD_HELP_OPT=0

function print_help {
cat <<_EOF_
Usage: `basename $0` [OPTIONS]
	-d 		    Enabled debug
	-c          Don't delete the html first
	-w          Don't crawl the web for data
	-h			Print this help message.
_EOF_
}

while getopts "dcwh" OPTION
do
  case $OPTION in
  	d) CMD_DEBUG_OPT=1 ;;
  	c) CMD_CLEAR_OPT=0 ;;
  	w) CMD_CRAWL_OPT=0 ;;
  	*) CMD_HELP_OPT=1 ;;
  esac
done

if [ "$CMD_DEBUG_OPT" -eq 1 ] ; then
	set -x
fi

if [ "$CMD_HELP_OPT" -eq 1 ] ; then
	print_help
	exit 0
fi

first_time=1
json_data=""
for reit_code in `cut -d '|' -f 2 reitdata_code.sh`
do
    echo $reit_code
    reit_name=`grep -E "$reit_code" reitdata_code.sh | cut -d '|' -f 1`
    echo $reit_name
    reit_filename="${reit_code}_${reit_name// /_}.html"
    echo $reit_filename
    #reit_url="https://sg.finance.yahoo.com/q?s=${reit_code}.SI"
    reit_url="https://sgx-premium.wealthmsi.com/sgx/company"
    
    if [ "$CMD_CLEAR_OPT" -eq 1 ] ; then
        rm data/$reit_filename
    fi
    
    if [ "$CMD_CRAWL_OPT" -eq 1 ] ; then
        #wget --no-check-certificate -a crawl_reitdata.log -w 5 -t 5 -O data/$reit_filename $reit_url
        #curl \
        #-X POST \
        #-d '{"id":"'${reit_code}'"}' \
        #-H 'Accept: application/json, text/javascript, */*; q=0.01' \
        #-H 'Accept-Encoding: gzip, deflate, br' \
        #-H 'Accept-Language: en-US,en;q=0.5' \
        #-H 'Cache-Control: no-cache' \
        #-H 'Connection: keep-alive' \
        #-H 'Content-Type: application/json' \
        #-H 'Cookie: _ga=GA1.1.1692100892.1474510770' \
        #-H 'Host: sgx-premium.wealthmsi.com' \
        #-H 'Referer: https://sgx-premium.wealthmsi.com/company-tearsheet.html?code=N21' \
        #-H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0' \
        #-H 'X-Requested-With: XMLHttpRequest' \
        #--insecure \
        #https://sgx-premium.wealthmsi.com/sgx/company | gzip -d > data/$reit_filename
        
        curl http://www.shareinvestor.com/fundamental/factsheet.html?counter=${reit_code}.SI > data/$reit_filename
    fi
    
    prev_closed=`grep -E 'sic_lastdone' data/$reit_filename | grep -Eo '[0-9]+.[0-9]+'`
    echo $prev_closed
    
    reit_other_data=`grep -E "$reit_code" reitdata_editable.txt`
    
    current_period=""
    current_dpu=""
    current_ttl_dpu=""
    current_yield=""
    current_nav=""
    current_gearing=""
    current_asset_type=""
    
    if [ ! -z "$reit_other_data" ] ; then
        IFS='|' read var1 var2 current_period var3 current_dpu current_ttl_dpu current_yield current_nav current_gearing current_asset_type <<< "$reit_other_data"

        json_current="{ " 
        json_current="${json_current}\"code\": \"${reit_code}\", \"descr\": \"${reit_name}\", \"prevClosed\": \"${prev_closed}\""
        json_current="${json_current}, \"period\": \"${current_period}\", \"dpu\": \"${current_dpu}\", \"ttlDpu\": \"${current_ttl_dpu}\", \"yield\": \"${current_yield}\""
        json_current="${json_current}, \"nav\": \"${current_nav}\", \"gearing\": \"${current_gearing}\", \"assetType\": \"${current_asset_type}\""
        json_current="${json_current} }"
        
        if [ "$first_time" -eq 1 ] ; then
            json_data="${json_data}${json_current}"
            first_time=0
        else
            json_data="${json_data}\n, ${json_current}"
        fi
    fi
done

echo -e "var reitDatas = [\n${json_data}\n];" > reit_data.js