# sake_app

## 環境構築
```
// apiサーバー
cd sake
docker-compose run --rm --no-deps api /bin/bash
npm install -g npm
npm install
exit

// react
cd sake
docker-compose run --rm --no-deps react /bin/bash
npm install -g npm
npm install
exit

//docker起動
docker-compose up -d
``` 

react : 
http://localhost:8080/
<br>

api : http://localhost:3000/
<br>

## DB情報
```
DB_ROOT_HOST=%
DB_NAME=sake
DB_USER=root
DB_PASS=password
TZ=Asia/Tokyo
```
