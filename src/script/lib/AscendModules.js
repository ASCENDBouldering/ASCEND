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

    const MerchItems = [
        { IsUnisex:true, Name: "Unisex Joggers Heather-Black", Folder: "./assets/merch/pants1/", Pictures: ["unisex-joggers-black-heather-left-front-61a27f488d9e2.png", "unisex-joggers-black-heather-left-front-61a27f488db1b.png", "unisex-joggers-black-heather-left-leg-61a27f488d4ce.png", "unisex-joggers-black-heather-left-leg-61a27f488d73b.png"] },
        { IsUnisex:false, Name: "Unisex TriBlend T-Shirt Black", Folder: "./assets/merch/shirt2/", 
            Male:{Pictures: ["unisex-tri-blend-t-shirt-solid-black-triblend-back-61a27fee3b07f.png", "unisex-tri-blend-t-shirt-solid-black-triblend-front-61a27fee3aeba.png", "unisex-tri-blend-t-shirt-solid-black-triblend-left-61a27fee3b3c7.png", "unisex-tri-blend-t-shirt-solid-black-triblend-left-front-61a27fee3b893.png"]},
            Female:{Pictures: ["unisex-tri-blend-t-shirt-solid-black-triblend-back-61a27fee3b224.png", "unisex-tri-blend-t-shirt-solid-black-triblend-front-61a27fee3ac30.png", "unisex-tri-blend-t-shirt-solid-black-triblend-left-61a27fee3b6f3.png", "unisex-tri-blend-t-shirt-solid-black-triblend-left-front-61a27fee3b563.png"]} 
        },
        { IsUnisex:true, Name: "Unisex Staple T-Shirt Heather-Black", Folder: "./assets/merch/shirt1/", Pictures: ["unisex-staple-t-shirt-black-heather-back-61a283538c616.png", "unisex-staple-t-shirt-black-heather-front-61a283538bee8.png", "unisex-staple-t-shirt-black-heather-left-61a283538c8ba.png", "unisex-staple-t-shirt-black-heather-left-front-61a283538cb2c.png"] },
        { IsUnisex:false, Name: "Unisex Premium Hoodie Black", Folder: "./assets/merch/sweater/", 
            Male:{Pictures: ["unisex-premium-hoodie-black-back-61a280c5cf34c.png","unisex-premium-hoodie-black-front-61a280c5cf0f9.png", "unisex-premium-hoodie-black-left-61a280c5cf7a2.png", "unisex-premium-hoodie-black-left-front-61a280c5cfe29.png"]},
            Female:{Pictures: ["unisex-premium-hoodie-black-back-61a280c5cf564.png", "unisex-premium-hoodie-black-front-61a280c5cee03.png", "unisex-premium-hoodie-black-left-61a280c5cfc0d.png", "unisex-premium-hoodie-black-left-front-61a280c5cf9e4.png"]} 
        },
        { IsUnisex:true, Name: "Unisex Lightweight Zip Hoodie Black", Folder: "./assets/merch/sweater2/",  Pictures: ["unisex-lightweight-zip-hoodie-charcoal-black-triblend-back-61a27fb37059a.png", "unisex-lightweight-zip-hoodie-charcoal-black-triblend-back-61a27fb370784.png", "unisex-lightweight-zip-hoodie-charcoal-black-triblend-front-61a27fb370200.png", "unisex-lightweight-zip-hoodie-charcoal-black-triblend-front-61a27fb370427.png"]},
    ]
    const AppendFAQs = () => {
        let html = ``;
        FQAItems.forEach(element => {
            html += FAQItem(element);
        });

        return html;
    }


    const AppendMerchItems = () => {
        let htmlContainer = ``;
        let htmlItem = ``;

        MerchItems.forEach(item => {
            htmlItem = ``
            if(item.IsUnisex){
                item.Pictures.forEach(picture => {
                    htmlItem += MerchItem(item.Folder + picture);
                });
            }
            else{
                item.Male.Pictures.forEach(picture => {
                    htmlItem += MerchItem(item.Folder + picture);
                });
            }
            htmlContainer += MerchContainer(htmlItem, item.IsUnisex);
        });

        return htmlContainer;
    }

    const AppendMerch = () => {
        let html = `
            <div class="merch">
                ${AppendMerchItems()}
            </div>
        `

        return html;
    }

    return {
        AppendFAQs: AppendFAQs,
        AppendMerch: AppendMerch
    }

})();