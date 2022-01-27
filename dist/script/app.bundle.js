//Hoofdmodule general functions
const AscendUI = (function () {
    let HeaderContent = null, FooterContent = null, ContentHolder = null, FirstTime = null, Schedules = null, About = null, Contact = null, Rules = null, Merch = null;
    const x = window.innerWidth, y = window.innerHeight, btnSize = 50;

    const isMobile = () => {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    const AppSetup = function ({ HeaderClass, FooterClass, ContentClass, FirstTimeClass, SchedulesClass, AboutClass, ContactClass, RulesClass, MerchClass, FAQArrowClasses, FAQAnswerClasses, FAQContainerClasses }) {
        HeaderContent = document.querySelector(HeaderClass);
        HeaderContent.innerHTML = Header();
        FooterContent = document.querySelector(FooterClass);
        FooterContent.innerHTML = Footer();

        ContentHolder = document.querySelector(ContentClass);
        FirstTime = document.querySelector(FirstTimeClass);
        Schedules = document.querySelector(SchedulesClass);
        About = document.querySelector(AboutClass);
        Contact = document.querySelector(ContactClass);
        Rules = document.querySelector(RulesClass);
        Merch = document.querySelector(MerchClass);
        GenerateFAQEventListeners(FAQArrowClasses, FAQAnswerClasses, FAQContainerClasses);
    }

    const GenerateFAQEventListeners = (ArrowClasses, AnswerClasses, ContainerClasses) => {
        for (let i = 0; i < ContainerClasses.length; i++) {
            const arrow = document.querySelector(ArrowClasses[i]);
            const answer = document.querySelector(AnswerClasses[i]);
            const container = document.querySelector(ContainerClasses[i]);

            container.addEventListener("click", () => {
                if (container.classList.contains("first-time__question-container--checked")) {
                    container.classList.add("first-time__question-container--unchecked")
                    container.classList.remove("first-time__question-container--checked")

                    answer.classList.add("first-time__answer--unchecked")
                    answer.classList.remove("first-time__answer--checked")
                }
                else {
                    container.classList.add("first-time__question-container--checked")
                    container.classList.remove("first-time__question-container--unchecked")

                    answer.classList.add("first-time__answer--checked")
                    answer.classList.remove("first-time__answer--unchecked")
                }

                RepositionAbout()
            })
        }
    }

    return {
        AppSetup: AppSetup,
        isMobile: isMobile,
    };
})();
//classes should be declared here
// class Main {
//     constructor() {
//         let menu = document.createElement("div");
//         menu.classList.add("c-main")
//         let html = `<div class="c-about c-grid-item">
//             <div class="c-grid-item__droptarget">
//                 <p class="c-grid-item__link" to="/about">About</p>
//                 <div class="c-grid-item__dot">
//                     <div class="c-grid-item__dot--inner"></div>
//                 </div>
//             </div>
//         </div>

//         <div class="c-projects c-grid-item">
//             <div class="c-grid-item__droptarget">
//                 <p class="c-grid-item__link" to="/projects">Projects</p>
//                 <div class="c-grid-item__dot">
//                     <div class="c-grid-item__dot--inner"></div>
//                 </div>
//             </div>
//         </div>

//         <div class="c-skills c-grid-item">
//             <div class="c-grid-item__droptarget">
//                 <p class="c-grid-item__link" to="/skills">Skills</p>
//                 <div class="c-grid-item__dot">
//                     <div class="c-grid-item__dot--inner"></div>
//                 </div>
//             </div>
//         </div>

//         <div class="c-dae c-grid-item">
//             <div class="c-grid-item__droptarget">
//                 <p class="c-grid-item__link" to="/dae">DAE</p>
//                 <div class="c-grid-item__dot">
//                     <div class="c-grid-item__dot--inner"></div>
//                 </div>
//             </div>
//         </div>`
//         menu.innerHTML += html
//         return menu
//     }
//   }

const Header = () => {
    const html = `
            <a href="http://localhost:3000/index.html#FirstTime" class="header__item js-firsttime">FIRST TIME</a>
			<a href="" class="header__item js-schedules"><span class="content__unavailable">SCHEDULES</span></a>
			<a href="http://localhost:3000/merch.html" class="header__item js-schedules"><span class="content__unavailable">MERCH</span></a>
			<a href="http://localhost:3000/index.html#About" class="header__item js-about">ABOUT</a>
			<a href="http://localhost:3000/index.html#Contact" class="header__item js-contact">CONTACT</a>
        `
    return html
}

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
//secondary functions
const PortfolioModule = (function(){

    return{
        
    }

})();
//data access functions
const DataAccess = (function () {

    return {
    };
})();
(function() {

	document.addEventListener('DOMContentLoaded', () => {
		AscendUI.AppSetup({
			HeaderClass: ".header",
			FooterClass: ".footer",
			ContentClass: ".content-holder",
			FirstTimeClass: ".js-firsttime",
			SchedulesClass: ".js-schedules",
			AboutClass: ".about__text",
			ContactClass: ".js-contact",
			RulesClass: ".js-rules",
			MerchClass: ".js-merch",
			FAQArrowClasses: [    ".js-arrow-1",    ".js-arrow-2",    ".js-arrow-3",    ".js-arrow-4",    ".js-arrow-5"],
			FAQContainerClasses: [".js-container-1",".js-container-2",".js-container-3",".js-container-4",".js-container-5"],
			FAQAnswerClasses: [   ".js-answer-1",   ".js-answer-2",   ".js-answer-3",   ".js-answer-4",   ".js-answer-5"],
        });

		AscendUI.isMobile()
	});
})();
