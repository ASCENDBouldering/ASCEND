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
			MerchClass: ".merch-holder",
        });

	});
})();
