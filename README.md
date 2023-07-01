# Interviz

![image](https://github.com/HalamLee/Interviz/assets/87893624/f631bba9-e911-4d56-9b63-8112644fa78c)

🔗 [전국 노코드 & AI 개발 경진대회: 싱커톤 시즌2 우승 🏆](https://m.blog.naver.com/synctree/223143163356)

<br>

> 기업 엔터플에서 주최한 싱커톤이라는 해커톤에 참여해 모든 작업을 혼자 진행했으며, 백엔드를 자사 노코드 툴인 싱크트리를 이용해 개발했습니다.
>
> 싱커톤에 참여하게 되며 싱크트리를 처음 접했고, 학습 기간인 2023.6.12(월) - 6.16(금) 동안 싱크트리 학습 및 기획과 디자인을 했습니다.
>
> 이후 2023.6.17(토) - 6.25(일) 9일 동안 프론트엔드와 백엔드 개발을 해서 프로젝트를 완성했습니다.
>
> 현재 백엔드는 싱커톤에서 작업한 싱크트리로 개발되어 있으며, 추후에 서비스를 업데이트하며 Node.js로 마이그레이션할 계획입니다.

<br>

## 서비스 소개

    Interviz : interview + visualization

    면접을 시각화해서 연습할 수 있다는 뜻으로,
    ChatGPT를 이용해 사용자의 상황에 따른 기술면접 질문을 제공해주며,
    사용자의 답변에 피드백과 모범해설을 제공해주는 서비스입니다.

<br>

## 기능 소개

![image](https://github.com/HalamLee/Interviz/assets/87893624/648e50c6-3eb2-4847-afd0-e0155e9ffa83)

<br>

### 1. 반응형

![image](https://github.com/HalamLee/Interviz/assets/87893624/fbbb4b58-bc95-4776-b290-8c8c464bd089)

> 사용자가 어떠한 기기로 서비스를 사용하더라도 불편함을 느끼지 않도록 하기 위해 반응형 작업을 했습니다.

<br> 
<br>

### 2. 스플래시 스크린

<img width="300" src="https://github.com/HalamLee/Interviz/assets/87893624/2cbd3487-c225-4101-8092-894556ed7439"/>

> 사용자에게 마치 어플을 사용하는 것과 같은 느낌의 효과를 주기 위해 세션을 사용해 스플래시 스크린 효과를 주었습니다.
>
> 서비스가 렌더링되었을 때 세션 스토리지에 스플래시 스크린의 여부를 판단하는 키가 있는지 확인합니다.
> <br>
> 만약 해당 키가 없다면 스플래시 스크린을 띄우고 키와 값을 추가합니다.

<br>
<br>

### 3. 사용자 정보 입력

<img width="300" src="https://github.com/HalamLee/Interviz/assets/87893624/f0e9c5f6-ce4d-40b4-bef5-69e2f1819220" />

> 사용자로부터 기술스택과 연차, 직군에 대한 정보를 입력 받고, 슬라이드바를 통해 질문의 개수를 설정합니다.

<br> 
<br>

### 4. 입력한 사용자 정보에 알맞는 면접 질문 리스트 생성

<img width="300" src="https://github.com/HalamLee/Interviz/assets/87893624/5dbcf875-227a-48e3-a7e4-746c2529d5fc" />

> 사용자로부터 받은 정보와 질문 개수를 ChatGPT에게 보내 사용자에게 알맞는 면접 질문 리스트를 생성합니다.

<br>
<br>

### 5. 답변 시 사용자에게 피드백과 질문에 대한 모범해설 제공

<img width="300" src="https://github.com/HalamLee/Interviz/assets/87893624/f4fe8553-167d-40e1-933e-793b56679855" />

> 사용자는 생성된 질문 리스트에서 선택을 할 수 있으며, 답변 시 사용자가 한 답변의 피드백과 질문에 대한 모범해설을 제공합니다.

<br>
<br>

### 6. 서비스에 대한 피드백을 할 수 있는 공간 마련

<img width="300" src="https://github.com/HalamLee/Interviz/assets/87893624/3acd9243-d3a5-4ae2-89fd-56d2d4cd3b3c" />

> 사용자에게 불편함을 느끼지 않도록, 더 나은 서비스를 만들기 위해 서비스에 대한 피드백을 할 수 있는 공간을 준비했습니다.
>
> 싱커톤은 끝이 났지만 이후에도 사용자의 피드백을 바탕으로 더 나은 서비스를 만들도록 개선할 예정입니다.

<br>
<br>
<br>

## 핵심 기술

### Frontend

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"> 
<img src="https://img.shields.io/badge/TypeScript-1572b6?style=flat-square&logo=TypeScript&logoColor=white"> 
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"> 
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>

<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/>

<br>

### Backend

<img src="https://img.shields.io/badge/SyncTree-5CCE59?style=flat-square&logoColor=white"/>
<img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=OpenAI&logoColor=white"/>
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/>

<br>

### Product management & Design

<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white">

<br>
<br>

## API

|                                              질문 리스트                                               |                                      답변에 대한 피드백과 모범해설                                      |
| :----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/HalamLee/Interviz/assets/87893624/ab140aea-9a45-43dc-91ba-6860284b4f20"/> | <img src="https://github.com/HalamLee/Interviz/assets/87893624/611e3f77-6de6-4921-aebd-0d79a6b7a25f" /> |

<details> 
	<summary>질문 리스트 API Example</summary>  
	
	Request:
	
	{

    	"techStack":  "javascript",

    	"yearsOfExperience":  "신입",

    	"partOfDevelopment":  "프론트엔드",

    	"numberOfQuestion":  "2"

    }


    Response:

    {

    	"result":  [

    		{

    			"id":  1,

    			"question":  "자바스크립트에서 클로저(Closure)에 대해 설명해주세요."

    		},

    		{

    			"id":  2,

    			"question":  "자바스크립트에서 이벤트 위임(Event delegation)이 무엇인지 설명해주세요."

    		}

    	]

    }

</details>

<details> 
	<summary>답변에 대한 피드백과 모범해설 API Example</summary>  
	
	Request:
	
	{

    	"question":  "자바스크립트에서 호이스팅(Hoisting)이 무엇인지 설명해주세요.",

    	"userAnswer":  "잘 모르겠습니다."

    }


    Response:

    {

    	"result":  {

    		"feedback":  "'잘 모르겠습니다.'라는 답변은 면접관으로서 면접자에게 원하는 답변이 아닙니다. 호이스팅은 자바스크립트에서 변수와 함수 선언이 스코프의 상단으로 끌어올려지는 현상을 말합니다. 이는 코드의 실행 순서와는 상관없이 변수와 함수를 사용할 수 있는 이점을 제공합니다. 호이스팅은 변수 선언은 해당 스코프의 상단으로, 함수 선언은 전체 스코프의 상단으로 끌어올려지며, 변수 초기화는 원래 위치에서 이루어집니다. 이해하고 있는지 확인하기 위해 면접자에게 호이스팅의 예시나 주의해야 할 점 등을 더 자세히 설명해보세요.",

    		"answer":  "호이스팅은 자바스크립트에서 변수 및 함수 선언이 스코프의 최상단으로 끌어올려지는 현상을 말합니다. 이는 코드의 실행 전에 변수 및 함수 선언이 처리되어 해당 스코프 내에서 사용할 수 있게 됩니다. 변수 호이스팅은 변수 선언이 스코프의 최상단으로 끌어올려지지만, 초기화는 그 자리에 남아있게 됩니다. 따라서 변수를 선언하기 전에 사용하면 `undefined`로 값이 할당됩니다.함수 호이스팅은 함수 선언문이 스코프의 최상단으로 끌어올려지며, 함수 표현식은 호이스팅되지 않습니다. 따라서 함수 선언문은 선언 전에 호출할 수 있습니다.호이스팅은 코드의 가독성과 유지보수를 어렵게 만들 수 있으므로, 변수 및 함수 선언은 스코프 상단에서 명시적으로 작성하는 것이 좋습니다."

    	}

    }

</details>
