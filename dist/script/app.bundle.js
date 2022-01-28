//Hoofdmodule general functions
const AscendUI = (function () {
    let HeaderContent = null, MobileHeaderContent = null, FooterContent = null, ContentHolder = null, MobileNavBtn = null, MobileNav = null, MobileNavHider = null, MobileNavBg = null, FAQHolder = null;
    const x = window.innerWidth, y = window.innerHeight, btnSize = 50;

    const IsMobile = () => {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    const AppSetup = function ({ HeaderClass, MobileHeaderClass, MobileNavBtnClass, MobileNavClass, MobileNavHiderClass, MobileNavBGClass, FooterClass, ContentClass, FAQHolderClass, FAQArrowClass, FAQAnswerClass, FAQContainerClass }) {
        let isMobile = IsMobile();

        HeaderContent = document.querySelector(HeaderClass);
        HeaderContent.innerHTML = Header(isMobile);
        if (isMobile) {
            MobileHeaderContent = document.querySelector(MobileHeaderClass);
            MobileHeaderContent.innerHTML = MobileHeader(isMobile);

            MobileNavBtn = document.querySelector(MobileNavBtnClass)
            MobileNav = document.querySelector(MobileNavClass)
            MobileNavHider = document.querySelector(MobileNavHiderClass)
            MobileNavBg = document.querySelector(MobileNavBGClass)

            GenerateMobileNavBtnClick();
        }


        FooterContent = document.querySelector(FooterClass);
        FooterContent.innerHTML = Footer();

        FAQHolder = document.querySelector(FAQHolderClass);
        FAQHolder.innerHTML = AscendModule.AppendFAQs();
        GenerateFAQEventListeners(FAQArrowClass, FAQAnswerClass, FAQContainerClass);

        ContentHolder = document.querySelector(ContentClass);
    }

    const GenerateFAQEventListeners = (ArrowClass, AnswerClass, ContainerClass) => {
        const arrows = document.querySelectorAll(ArrowClass);
        const answers = document.querySelectorAll(AnswerClass);
        const containers = document.querySelectorAll(ContainerClass);
        for (let i = 0; i < containers.length; i++) {
            const arrow = arrows[i];
            const answer = answers[i];
            const container = containers[i];

            container.addEventListener("click", () => {
                container.classList.toggle("first-time__question-container--checked")
                answer.classList.toggle("first-time__answer--checked")
            })
        }
    }

    const GenerateMobileNavBtnClick = () => {
        MobileNavBtn.addEventListener('click', () => {
            MobileNav.classList.toggle("mobile-nav-container--enabled")
            MobileNavHider.classList.toggle("mobile-nav-hider--enabled")
            MobileNavBg.classList.toggle("mobile-nav-bg--enabled")
            ToggleMenuBtn()
        })
        
        MobileNavHider.addEventListener('click', () => {
            MobileNav.classList.remove("mobile-nav-container--enabled")
            MobileNavHider.classList.remove("mobile-nav-hider--enabled")
            MobileNavBg.classList.remove("mobile-nav-bg--enabled")
        })
    }

    const ToggleMenuBtn = () => {
        const btnElement1 = MobileNavBtn.querySelector(".nav-button__element--top")
        const btnElement2 = MobileNavBtn.querySelector(".nav-button__element--middle")
        const btnElement3 = MobileNavBtn.querySelector(".nav-button__element--bottom")

        btnElement1.classList.toggle("nav-button__element--top-toggled");
        btnElement2.classList.toggle("nav-button__element--middle-toggled");
        btnElement3.classList.toggle("nav-button__element--bottom-toggled");
    }

    return {
        AppSetup: AppSetup,
        IsMobile: IsMobile,
    };
})();
const Header = (isMobile) => {
	const html = isMobile ? Button() : HeaderItems(isMobile);
	return html
}

const MobileHeader = (isMobile) => {
	const html = `
		<div class="mobile-nav-hider js-mobile-nav--hider"></div>

		<img class="mobile-nav-bg js-mobile-nav--bg" src="./assets/wall.svg" />
		<div class="mobile-nav-container js-mobile-nav">
			<div class="mobile-nav">
				${HeaderItems(isMobile)}
			</div>
		</div>
	`
	return html
}

const Button = () => {
	let html = `
		<div class="mobile-nav-btn js-mobile-nav-btn">
			<div class="nav-button__element nav-button__element--top"></div>
			<div class="nav-button__element nav-button__element--middle"></div>
			<div class="nav-button__element nav-button__element--bottom"></div>
		</div>
	`
	return html;
}

const HeaderItems = (isMobile) => {
	const html = `
	<a href="https://ascendbouldering.github.io/ASCEND/index.html#About" class="header__item ${isMobile ? "header__item--mobile" : ""} js-about">ABOUT</a>
	<a href="https://ascendbouldering.github.io/ASCEND/index.html#Contact" class="header__item ${isMobile ? "header__item--mobile" : ""} js-contact">CONTACT</a>
	<a href="https://ascendbouldering.github.io/ASCEND/index.html#FirstTime" class="header__item ${isMobile ? "header__item--mobile" : ""} js-firsttime">FAQ</a>
	`
	return html
}
{/* <a href="" class="header__item ${isMobile ? "header__item--mobile" : ""} js-schedules"><span class="content__unavailable">SCHEDULES</span></a>
<a href="http://localhost:3000/merch.html" class="header__item ${isMobile ? "header__item--mobile" : ""} js-schedules"><span class="content__unavailable">MERCH</span></a> */}


const Footer = () => {
	const html = `
    <img class="footer__logo" src="./assets/logo2.png">
		<div class="footer__container about__text--color">
			<a class="footer__link about__text--color" href="mailto:Ascendbouldering@gmail.com">
				Ascendbouldering@gmail.com </a> | <a class="footer__link about__text--color js-rules">Rules</a> | <a
				class="footer__link about__text--color" href="https://www.facebook.com/ASCENDBouldering"> <img
					class="footer__logo--fb" src="./assets/fb.png"> </a> </p>
		</div>
		<p class="about__text--color">© COPYRIGHT 2021 BY BRAM ROBYN - EQUINOX</p>
    `
	return html;
}

const FAQItem = (element) => {
	let html = `
            <div class="first-time__question-container first-time__question-container--unchecked js-container">
            <div class="first-time__question">
                <h3>
                    ${element.question}
                </h3>
                <div class="first-time__arrow js-arrow">

                </div>
            </div>
            <div class="first-time__answer first-time__answer--unchecked js-answer">
                <p>
                    ${element.answer}
                </p>
            </div>
        </div>
            `

	return html;
}
//secondary functions
const AscendModule = (function () {
    const FQAItems = [
        {
            question: "How can I join?",
            answer: `If you want to become a member you can just send an email to
								<span class="about__text--color">ascendbouldering@gmail.com</span> for more information,
								or you can ask any member to refer you to <span class="about__text--color">Bram</span>.`,
        },
        {
            question: "When do you go bouldering?",
            answer: `This depends really. Most of us are students and our schedule changes at times.
								However, most of the times some of us usually go at <span
									class="about__text--color">Tuesday noon/evening</span>, <span
									class="about__text--color">Thursday evenings</span>,
								and <span class="about__text--color">Friday evenings</span>.`,
        },
        {
            question: "How many members do you have?",
            answer: `We are currently <span class="about__text--color">22 Members</span> strong of which most
								people are <span class="about__text--color">students from Howest</span>`,
        },
        {
            question: "What is expected of me?",
            answer: `<span class="about__text--color">Nothing!</span>
							When or with who you come is all your own decision, meaning you still choose everything
							you'd like to do.`,
        },
        {
            question: "How do you stay in touch with eachother?",
            answer: `We currently have a <span class="about__text--color">WhatsApp group</span> where people are
							actively saying when they can/would like to go bouldering, and if people would like to join.
`,
        },
        {
            question: "Do you offer any classes?",
            answer: `We do not offer any classes, but we have experienced members that are always willing to
							teach you some tips and tricks.`,
        },
    ]

    const AppendFAQs = () => {
        let html = ``;
        FQAItems.forEach(element => {
            html += FAQItem(element);
        });

        return html;
    }

    return {
        AppendFAQs:AppendFAQs
    }

})();
//data access functions
const DataAccess = (function () {

    return {
    };
})();
(function() {

	document.addEventListener('DOMContentLoaded', () => {
		AscendUI.IsMobile()

		AscendUI.AppSetup({
			HeaderClass: ".header",
			MobileHeaderClass: ".mobile-header",
			MobileNavBtnClass: ".js-mobile-nav-btn",
			MobileNavClass: ".js-mobile-nav",
			MobileNavHiderClass: ".js-mobile-nav--hider",
			MobileNavBGClass: ".js-mobile-nav--bg",
			FooterClass: ".footer",
			ContentClass: ".content-holder",
			FAQHolderClass: ".js-faq-holder",
			FAQArrowClass: ".js-arrow",
			FAQContainerClass: ".js-container",
			FAQAnswerClass: ".js-answer",
        });

	});
})();
