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