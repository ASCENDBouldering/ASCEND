(function() {

	document.addEventListener('DOMContentLoaded', () => {
		AscendUI.IsMobile()

		AscendUI.AppSetup({
			HeaderClass: ".header",
			MobileHeaderClass: ".mobile-header",
			MobileNavBtnClass: ".js-mobile-nav-btn",
			MobileNavClass: ".js-mobile-nav",
			MobileNavHiderClass: ".js-mobile-nav--hider",
			FooterClass: ".footer",
			ContentClass: ".content-holder",
			FAQArrowClasses: [    ".js-arrow-1",    ".js-arrow-2",    ".js-arrow-3",    ".js-arrow-4",    ".js-arrow-5"],
			FAQContainerClasses: [".js-container-1",".js-container-2",".js-container-3",".js-container-4",".js-container-5"],
			FAQAnswerClasses: [   ".js-answer-1",   ".js-answer-2",   ".js-answer-3",   ".js-answer-4",   ".js-answer-5"],
        });

	});
})();
