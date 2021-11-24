const quotes = [
    {
      quote: "칭찬은 크게 해주세요!",
      author: " <黄仁俊>",
    },
    {
      quote: "저도 그럼 막내라인이에요? 저도 지금 뽀짝상큼한데.",
      author: " <黄仁俊>",
    },
    {
      quote:
        "슬프지 마요. 슬픈 일 생길 수 있는데 그쪽에 걸고 넘어지면 진 거예요. 슬플 수 있지만 그래도 다시 힘내서 더 많을 걸 얻어서 가야죠.",
      author: " <黄仁俊>",
    },
    {
      quote: "시즈니 안 힘들어요? 제 머릿속에서 하루 종일 뛰어다녔어요.",
      author: " <黄仁俊>",
    },
    {
      quote: "무민 안 사랑하는 건 아닌데 내가 좀 컸잖아. 그러니까 이제는 좀 큰 무민을 좋아해.",
      author: " <黄仁俊>",
    },
    {
      quote: "언어가 뭐가 필요하겠어요. 같은 마음이라는 게, 하나라는 게 중요하죠.",
      author: " <黄仁俊>",
    },
    {
      quote: "나에게 항상 용기를 줘서 고마워요.",
      author: " <黄仁俊>",
    },
    {
      quote: "비 오는날엔 뭐라고? 막걸리와 런전!",
      author: " <黄仁俊>",
    },
    {
      quote: "근데 그거 아세요, 여러분? 우리 같이 늙어가고 있어요. 그래서 딱히 기분이 나쁘진 않아요.",
      author: " <黄仁俊>",
    },
    {
      quote: "지치지 마! 얘들아 우리 할 수 있어.",
      author: " <黄仁俊>",
    },
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;