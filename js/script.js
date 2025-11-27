// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    initProgressBars();
    initScrollProgress();
});



// .gnb 스크롤 진행률 표시
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #8B5CF6, #06B6D4);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);

        // 진행률 바 너비 업데이트
        progressBar.style.width = scrollPercent + '%';

        // .logo span에 진행률 표시
        const logoSpan = document.querySelector('.logo span');
        if (logoSpan) {
            logoSpan.textContent = `${Math.round(scrollPercent)}%`;
        }
    });
}


// about---------------------

gsap.fromTo(['.about-personal', '.about-license'],
    { y: 100, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.about-item',
            start: "top 60%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    }
);
gsap.fromTo(['.about-education', '.about-program'],
    { y: 100, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: .4,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.about-education',
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

// portfolio---------------------

document.querySelectorAll('.port-box').forEach(item => {
    const left = item.querySelector('.port-frame') || item.querySelector('.port-Mock');;
    const right = item.querySelector('.port-txt');

    if (left) {
        gsap.fromTo(left,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: left,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                }
            }
        );
    }
    if (right) {
        gsap.fromTo(right,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: right,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                }
            }
        );

    }
})

// art---------------------


gsap.fromTo('.card',
    { y: 100, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.card',
            start: "top 60%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    }
);


// skill -----------------
// 프로그레스 바 애니메이션
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');

        gsap.to(bar, {
            width: progress + '%',
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}


gsap.fromTo('.skill-card',
    { y: 100, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.skills',
            start: "top 60%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    }
);


/* lottie */
bodymovin.loadAnimation({
    container: document.querySelector('#lottie'), // 애니메이션을 표시할 요소
    renderer: 'svg', // 렌더링 방식 (svg / canvas / html 중 선택)
    loop: true, // 애니메이션 반복 여부
    autoplay: true, // 자동 재생 여부
    path: '../image/Plane.json', // 애니메이션 파일 경로
});


/* typing animation */
const $text = document.querySelector(".typing");

// 글자 모음
const letters = [
  "도전하는 코더",
  "도전하는 퍼블리셔", 
  "생각하는 디자이너", 
  "대표님 내일 뵙겠습니다."
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);


