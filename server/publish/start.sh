#!/bin/bash
#
check() {
        pid=`ps aux | grep "${log_client}" | grep -v grep | awk '{print $2}'`
}

start() {
        check
        if [ -z $pid ]; then
           nohup node --title=${log_client} ./main.js  > logfile.log 2>&1 &
                sleep 3
                check
                echo -e "${log_client} pid is:\033[31m$pid\033[0m"
        else
                echo -e "${log_client} pid is:\033[31m$pid\033[0m"
        fi
}

stop() {
        check
        if [ -z $pid ]
        then
                echo "${log_client} is not running."
        else
                kill $pid && echo "${log_client} stop finish."
        fi
}

status() {
        check
        if [ -z $pid ]
        then
                echo "${log_client} is not running."
        else
                echo -e "${log_client} pid is:\033[31m$pid\033[0m"
        fi
}


log_client="dacc_server"
option=$1


case $option in
stop)
        stop
        ;;
start)
        start
        ;;
status)
        status
        ;;
restart)
        stop
        start
        ;;
*)
        echo "Usage: $0 {stop|start|restart|status}"
esac
