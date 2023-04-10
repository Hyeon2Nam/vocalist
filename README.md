# 단어장

![mainPage image](https://github.com/Hyeon2Nam/vocalist/blob/master/images/mainPage.png)

## 개요

단어 외우기 사이트 아무리 찾아도 마음에 드는 게 없어서 그냥 직접 만들기로 했습니다.<br/>
와이파이가 안되는 장소에서도 단어를 외울 수 있도록 일부러 localhost에서만 작동하게 만들어서 외울때마다 귀찮겠지만 `yarn start` 해야합니다.<br/>
로컬에서만 돌아가기도 하고 제가 단어를 컴으로만 외워서 모바일뷰 최적화가 안되어 있습니다.

## 사용법

### 학습하기 페이지

학습하기 페이지는 현재 자신이 추가한 카테고리(책장)와 카테고리별 단어장을 확인 할 수 있습니다.<br/>
카테고리를 선택하면 그 카테고리에 속해있는 단어장들을 확인 할 수 있습니다.<br/>
단어장을 클릭하면 해당 단어장안에 들어 있는 단어들을 확인 할 수 있습니다.
![libraryList image](https://github.com/Hyeon2Nam/vocalist/blob/master/images/libraryList.png)

학습은 단어장별 모드와 전체 학습 모드 두가지가 있습니다

- 카테고리에 있는 학습 버튼을 클릭할 경우 해당 카테고리 안에 있는 모든 단어들을 한번에 외울 수 있습니다.
- 단어장별로 있는 학습 벼튼을 클릭할 경우 해당 단어장에 있는 단어들만 외울 수 있습니다.

문제 모드는 객관식 모드와 주관식 모드가 있습니다. 객관식 모드가 먼저 실행 된 후 주관식 모드가 실행됩니다.<br/>
![multiple choice question image](https://github.com/Hyeon2Nam/vocalist/blob/master/images/multipleChoiceQuestion.png)

![subjective Question image](https://github.com/Hyeon2Nam/vocalist/blob/master/images/subjectiveQuestion.png)

두 모드에 공통 사항

- `skip 버튼`을 누르면 해당 문제를 건너뛸 수 있습니다.
- `정답 보기 버튼`을 누르면 답이 나옵니다. 다시하면 누르면 답이 숨겨집니다.

객관식 모드 한정

- `오답노트 추가 버튼`을 클릭하면 해당 문제가 오답노트에 추가가 되며, 오답노트에 추가가 된 단어들은 해당 객관식 모드 사이클이 한번 끝나면 바로 이어서 해당 단어들이 다시 문제로 나옵니다.

### 단어장 추가 페이지

![add Book Page image](https://github.com/Hyeon2Nam/vocalist/blob/master/images/addBookPage.png)

- 단어장을 추가할 카테고리(책장)를 선택할 수 있습니다.
- 카테고리를 해당 페이지에서 추가할 수 있습니다.
- 카테고리 추가가 끝나면 취소버튼을 눌러야만 카테고리 선택 목록으로 돌아갈 수 있습니다.
- 단어는 무조건 "단어 뜻, 뜻1, 뜻2" 로 입력해야 합니다.
- 문장은 무조건 "문장)뜻"으로 입력해야합니다.
  - 예시)
  - opening 공석, 결원, 개장, 개시
  - travel all by yourself)혼자서 여행하다
- 취소 버튼을 누르면 단어장과 단어장의 내용이 전부 사라집니다.
- 추가 버튼을 누르면 새로 입력한 단어장이 포함된 json파일이 다운로드 됩니다.
  - 다운로드된 json파일은 해당 컴퓨터 다운로드 폴더에 다운받아집니다.
  - 해당 json파일은 해당 프로젝트 파일의 `src/data/` 경로에 있는 `libraryData.json` 에 덮어쓰기를 해주세요. 덮어쓰기를 하지 않으면 갱신이 안됩니다.

## 차후에

시간이 나면

- json파일이 다운로드되어지는 위치를 변경할 예정입니다.
- 코드 최적화 예정입니다.
- 문제 모드 선택 버튼 추가 예정입니다.

그외 제가 사용하는데에 있어서 불편함을 느끼면 다른 기능들이 추가가 될 수 있습니다.

나중에 마음이 바뀌어서 그냥 호스팅을 하게 된다면

- 단어 저장 방식을 json파일이 아닌 DB에 저장하는 방법으로 교체
- 모바일 뷰 최적화

등을 할 예정입니다
