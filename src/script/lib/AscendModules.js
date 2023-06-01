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
            answer: `Generally, most of us go on <span
									class="about__text--color">Monday, and Wednesday Evening at 6PM</span>.
                                    These times will change every semester depending on the people's class schedules`,
        },
        {
            question: "What do you do in ASCEND?",
            answer: `Besides the usual bouldering, we often go lead-climbing together as well. 
            <br>What is more, this coming year some of us will also participate in some competitions.
            <br>Future wise, we will also look into social gatherings (like a BBQ).`,
        },
        {
            question: "What is expected of me?",
            answer: `<span class="about__text--color">Nothing!</span>
							When, with who, and how much you come is all your own decision! 
                            <br>We understand agendas can be full/busy so we want to give everyone the freedom of their own choosing.`,
        },
        {
            question: "How do you stay in touch with eachother?",
            answer: `We currently have an active and friendly <span class="about__text--color">WhatsApp group</span> where people can say
             when they can/would like to go bouldering, <br>and if people would like to join them or not.
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
        let i = -1;
        let i2 = 0;

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
                i++;
            }
            htmlContainer += MerchContainer(htmlItem, item.IsUnisex, i, i2);
            i2++;
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

    const GenerateMalePictures = (id) => {
        let htmlItem = ``
        MerchItems[id].Male.Pictures.forEach(picture => {
            htmlItem += MerchItem(item.Folder + picture);
        });
        return MerchContainer(htmlItem, item.IsUnisex, i);
    }
    const GenerateFemalePictures = (id) => {
        let htmlItem = ``
        MerchItems[id].Female.Pictures.forEach(picture => {
            htmlItem += MerchItem(item.Folder + picture);
        });
        return MerchContainer(htmlItem, item.IsUnisex, i);
    }

    return {
        AppendFAQs: AppendFAQs,
        AppendMerch: AppendMerch,
        GenerateMalePictures:GenerateMalePictures,
        GenerateFemalePictures:GenerateFemalePictures
    }

})();