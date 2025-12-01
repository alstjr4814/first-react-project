🅖 G. Git / npm 명령어 정리
1. git 기본 명령어
git status
git add .
git commit -m "msg"
git push

2. clone → 실행 순서

GitHub에서 clone

프로젝트 폴더에서 실행:

npm install
npm run dev

3. node_modules가 없는 이유

node_modules는 GitHub에 업로드되지 않음

npm install 하면 자동 설치됨

4. 브랜치 & 최초 push

새 프로젝트 최초 push:

git init
git add .
git commit -m "first"
git branch -M main
git remote add origin 깃주소
git push -u origin main