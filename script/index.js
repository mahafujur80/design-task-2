// global variables
// community cards data
const communityData = [
    { icon: "./assets/icons/Icon.png", title: "Membership Organisations", desciption: "Our membership management software provides full automation of membership renewals and payments" },
    { icon: "./assets/icons/Icon (1).png", title: "National Associations", desciption: "Our membership management software provides full automation of membership renewals and payments" },
    { icon: "./assets/icons/Icon (2).png", title: "Clubs And Groups", desciption: "Our membership management software provides full automation of membership renewals and payments" }
];

// testimonials data
const testimonials = [
    { image: "./assets/images/image 18.png", title: "Creating Streamlined Safeguarding Processes with OneRen" },
    { image: "./assets/images/image 19.png", title: "What are your safeguarding responsibilities and how can you manage them?" },
    { image: "./assets/images/image 20.png", title: "Revamping the Membership Model with Triathlon Australia" },
];


// DOM selection
const mobileNavButton = document.querySelector(".mobile-nav-button"),
    mobileNavMenu = document.querySelector(".mobile-nav-menu"),
    showClientsLogo = document.querySelector(".clients-logo-container"),
    showCommunityCards = document.querySelector(".community-cards-container"),
    showBlogsCards = document.querySelector(".blog-cards-container");

// load client logo images
[0, 1, 2, 3, 4, 5, 6].forEach(logoNumber => {
    const img = document.createElement("img");
    img.src = logoNumber === 0 ? `./assets/icons/Logo.png` : `./assets/icons/Logo (${logoNumber}).png`;
    img.alt = "Client logo"
    showClientsLogo.appendChild(img);
});

// load content
communityData.forEach(data => {
    const divWithContent = document.createElement("div");
    divWithContent.innerHTML = `
                    <div
                        class="bg-white rounded-lg shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 flex flex-col items-center text-center">
                        <div class="relative w-16 h-16 flex items-center justify-center mb-4">
                            <div class="absolute inset-0 bg-[#E8F5E9] rounded-tl-2xl rounded-br-2xl">
                            </div>
                            <img class="relative z-10 w-9 h-9" src="${data.icon}" alt="icon" />
                        </div>
                        <h3 class="text-2xl font-bold text-text-neutral mb-3 leading-snug max-w-[200px]">
                            ${data.title}
                        </h3>
                        <p class="text-text-neutral-gray text-sm leading-relaxed max-w-[250px]">
                            ${data.desciption}
                        </p>
                    </div>
    `
    showCommunityCards.appendChild(divWithContent);
});

// load testimonials contents
testimonials.forEach(data => {
    const divWithContent = document.createElement("div");
    divWithContent.innerHTML = `
                      <div class="relative flex flex-col items-center">
                        <!-- background image -->
                        <div class="w-full h-[286px] overflow-hidden rounded-lg">
                            <img class="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                                src="${data.image}"
                                alt="${data.title}" />
                        </div>
                        <!-- floating card overlay -->
                        <div
                            class="w-[88%] -mt-24 z-10 bg-bg-silver p-5 rounded-lg shadow-lg text-center flex flex-col items-center justify-between min-h-[168px]">
                            <h3 class="text-lg md:text-xl font-semibold text-text-neutral-gray leading-snug">
                                ${data.title}
                            </h3>
                            <a href="#"
                                class="inline-flex items-center gap-2 text-primary font-semibold text-base mt-4 hover:text-[#3d9140] transition-colors duration-300">
                                <span>Readmore</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
    `
    showBlogsCards.appendChild(divWithContent);
});

// nav menu btn
mobileNavButton.addEventListener("click", () => {
    // check hidden class exist
    if (mobileNavMenu.classList.contains("hidden")) {
        mobileNavMenu.classList.remove("hidden");
        mobileNavMenu.classList.add("flex");

        mobileNavButton.innerHTML = '';
        mobileNavButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        mobileNavMenu.classList.add("hidden");
        mobileNavMenu.classList.remove("flex");

        mobileNavButton.innerHTML = '';
        mobileNavButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});