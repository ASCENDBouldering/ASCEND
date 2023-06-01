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

{/* <a href="http://localhost:3000/merch.html"                           class="header__item ${isMobile ? "header__item--mobile" : ""} js-merch">MERCH</a> */}
const HeaderItems = (isMobile) => {
	const html = `
	<a href="https://ascendbouldering.github.io/ASCEND/index.html#About" class="header__item ${isMobile ? "header__item--mobile" : ""} js-about">ABOUT</a>
	<a href="https://ascendbouldering.github.io/ASCEND/index.html#Contact" class="header__item ${isMobile ? "header__item--mobile" : ""} js-contact">CONTACT</a>
	<a href="https://ascendbouldering.github.io/ASCEND/index.html#FirstTime" class="header__item ${isMobile ? "header__item--mobile" : ""} js-firsttime">FAQ</a>
	`
	return html
}
{/* <a href="" class="header__item ${isMobile ? "header__item--mobile" : ""} js-schedules"><span class="content__unavailable">SCHEDULES</span></a> */}


const Footer = () => {
	const html = `
    <img class="footer__logo" src="./assets/LogoV2.png">
		<div class="footer__container about__text--color">
			<a class="footer__link about__text--color" href="mailto:Ascendbouldering@gmail.com">
				Ascendbouldering@gmail.com </a> | <a
				class="footer__link about__text--color" href="https://www.facebook.com/ASCENDBouldering"> <img
					class="footer__logo--fb" src="./assets/fb.png"> </a> </p>
		</div>
		<p class="about__text--color">© COPYRIGHT 2023 AND CREATION BY <a class="footer__link about__text--color" style="color: white;" href="https://www.linkedin.com/in/bram-robyn">BRAM ROBYN - EQUINOX</a></p>
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

const MerchContainer = (htmlItems, isUnisex, i, i2) => {
	let html = `
	<div>
		<div class="merch-container js-merch-${i}" id="${i2}">
		${htmlItems}
		</div>
		${isUnisex ? MerchToggleBtn(i) : ``}
	</div>
	`;

	return html;
}

const MerchItem = (item) => {
	let html = `
		<img class="merch-item" src="${item}" />
	`;

	return html;
}

{/* <div class="merch-item__button js-merchToggleBtn">Btn</div> */}
const MerchToggleBtn = (i) => {
	let html = `
	<div class="merch-item__button-container">
		<label class="toggle">
			<input class="toggle-checkbox js-toggle-${i}" type="checkbox" checked>
			<div class="toggle-switch"></div>
			<span class="toggle-label">Show Male</span>
		</label>
	</div>`
	return html;
}