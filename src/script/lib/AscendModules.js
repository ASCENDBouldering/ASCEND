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