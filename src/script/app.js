(function() {

	document.addEventListener('DOMContentLoaded', () => {
		PortfolioUI.AppSetup({
			ContentClass: ".content-holder",
			FirstTimeClass: ".js-firsttime",
			SchedulesClass: ".js-schedules",
			AboutClass: ".js-about",
			ContactClass: ".js-contact",
			RulesClass: ".js-rules",
        });

		PortfolioUI.isMobile()
	});
})();
