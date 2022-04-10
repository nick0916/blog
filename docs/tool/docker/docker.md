---
sidebar_position: 1
title: Docker 相關操作
---

## > 進入容器

docker exec -it [容器名] sh

## > 起一個 mysql container 指令

docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=my-password -d -p 3306:3306 mysql


