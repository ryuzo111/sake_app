# sake_app

## 環境構築
```
// apiサーバー
cd sake_app
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

//dockerを終了するとき
docker-compose down

//サーバーのログをみる方法
docker-compose logs
//もしくは、docker desktopにて確認
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
.envは変更なしとする </br>
portは3306

## マイグレーションファイルを構築した時(sequlizeを調べてみてください)
```
// マイグレート
docker-compose exec api /bin/bash
npx sequelize-cli db:migrate
exit

//マイグレーションファイルとモデルファイルの作成コマンド
docker-compose exec api /bin/bash
npx sequelize-cli model:generate --name <モデル名> --attributes <プロパティを設定する 例name:string,done:boolean>
exit
```
sequelize
https://sequelize.org/docs/v7/other-topics/other-data-types/
