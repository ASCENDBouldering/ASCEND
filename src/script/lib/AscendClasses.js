const Header = (isMobile) => {
	const html = isMobile ? Button() : HeaderItems(isMobile);
	return html
}

const MobileHeader = (isMobile) => {
	const html = `
		<div class="mobile-nav-hider js-mobile-nav--hider"></div>
		<div class="mobile-nav-container js-mobile-nav">
			<div class="mobile-nav">
				${HeaderItems(isMobile)}
			</div>
			${Button()}
		</div>
	`
	return html
}

const Button = () => {
	let html = `
	<div class="header--mobile js-mobile-nav-btn">
	
	</div>
	`
return html;
}

const HeaderItems = (isMobile) => {
	const html = `
	<a href="http://localhost:3000/index.html#About" class="header__item ${isMobile ? "header__item--mobile" : ""} js-about">ABOUT</a>
	<a href="http://localhost:3000/index.html#Contact" class="header__item ${isMobile ? "header__item--mobile" : ""} js-contact">CONTACT</a>
	<a href="http://localhost:3000/index.html#FirstTime" class="header__item ${isMobile ? "header__item--mobile" : ""} js-firsttime">FAQ</a>
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