$(function () {
    // 비주얼
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".visual",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "bottom top",
            // markers: true,
        },
    });

    tl.to(".visual h2", { opacity: "1", duration: "10" }, 5);
    tl.to(".visual img", { scale: "0.5", duration: "10", opacity: "0.3" });

    // 프로필 올라옴
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con1 li",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 2,
            // markers: true,
        },
    })

        .to(
            ".con1 li:nth-child(1)",
            { y: "0", opacity: "1", duration: "1" },
            0.2
        )
        .to(
            ".con1 li:nth-child(2)",
            { y: "0", opacity: "1", duration: "1" },
            0.4
        )
        .to(
            ".con1 li:nth-child(3)",
            { y: "0", opacity: "1", duration: "1" },
            0.6
        );

    // linechange 스크롤
    const pTag1 = document.querySelector(".first-parallel");
    const pTag2 = document.querySelector(".second-parallel");
    const pTag3 = document.querySelector(".third-parallel");

    const textArr1 =
        "Did you enjoy it? It's coming to an end. Lower your head".split(" ");
    const textArr2 =
        "Thank you for watching until here. Please put it down more".split(" ");
    const textArr3 = "Thank you again and let's go towards the end!".split(" ");

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    initTexts(pTag1, textArr1);
    initTexts(pTag2, textArr2);
    initTexts(pTag3, textArr3);

    function initTexts(element, textArray) {
        textArray.push(...textArray);
        for (let i = 0; i < textArray.length; i++) {
            element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`;
        }
    }

    function marqueeText(count, element, direction) {
        if (count > element.scrollWidth / 2) {
            element.style.transform = `translate3d(0, 0, 0)`;
            count = 0;
        }
        element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

        return count;
    }

    function animate() {
        count1++;
        count2++;
        count3++;

        count1 = marqueeText(count1, pTag1, -1);
        count2 = marqueeText(count2, pTag2, 1);
        count3 = marqueeText(count3, pTag3, -1);

        window.requestAnimationFrame(animate);
    }

    function scrollHandler() {
        count1 += 15;
        count2 += 15;
        count3 += 15;
    }

    window.addEventListener("scroll", scrollHandler);
    animate();

    // 일러스트 왼쪽 이동
    let list = gsap.utils.toArray(".illust .list li");
    let listA = gsap.utils.toArray(".illust .list .a");
    let listB = gsap.utils.toArray(".illust .list .b");
    let listC = gsap.utils.toArray(".illust .list .c");

    gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        scrollTrigger: {
            trigger: ".illust",
            pin: true,
            scrub: 2,
            start: "center center",
            end: "200%",
            // markers: true,
        },
    });

    gsap.to(listA, {
        y: 50,
        rotation: 20,
        scrollTrigger: {
            trigger: ".illust",
            scrub: 2,
            end: "200%",
        },
    });
    gsap.to(listB, {
        y: 50,
        rotation: -20,
        scrollTrigger: {
            trigger: ".illust",
            scrub: 2,
            end: "200%",
        },
    });
    gsap.to(listC, {
        y: 50,
        rotation: 20,
        scrollTrigger: {
            trigger: ".illust",
            scrub: 2,
            end: "200%",
        },
    });
    gsap.registerPlugin(ScrollTrigger);
});
