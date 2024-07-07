import initMainNavigation from '../lib/init-main-navigation';
import 'slick-carousel';
import ScrollReveal from 'scrollreveal';
import VanillaTilt from 'vanilla-tilt';
import Lottie from 'lottie-web';
import forex from '../lotties-json-files/forex.json';
import wallet from '../lotties-json-files/wallet.json';
import commodities from '../lotties-json-files/commodities.json';
import equities from '../lotties-json-files/equities.json';
import indices from '../lotties-json-files/indices.json';
import heroRobot from '../lotties-json-files/hero-robot.json';

export default {
    init() {
        // JavaScript to be fired on all pages
    },
    finalize() {
        let stars = ['<div class="stars"></div>', '<div class="stars2"></div>', '<div class="stars3"></div>'];
        let homeHero = document.querySelector('.home-hero');
        let acHeroSection = document.querySelector('.account-types-hero');
        let heroRocket = document.querySelector('.hero-rocket');
        const sections = document.querySelectorAll('.parallax-section');
        const acPage = document.querySelector('.account-types-new');
        const planetsNav = document.querySelector('.planets-navbar');
        const planetsNavItem = document.querySelectorAll('.planets-navbar ul a');
        const scrollWatcher = document.querySelector('.scroll-watcher');
        const lunarSection = document.getElementById('lunar');
        const galaxySection = document.getElementById('galaxy');
        let checkClickedNav = false;
        let scrollWatcherDown = false;
        let isTop = true;

        window.addEventListener('load', function () {
            document.getElementById('page-loader').remove();
        })

        function clearActiveClass() {
            planetsNavItem.forEach(item => item.classList.remove('active'));
        }

        function clearVisibleClass() {
            sections.forEach(item => item.classList.remove('visible'));
        }

        // enable planets navigation

        document.querySelectorAll('a.enableHash').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                console.log(targetElement.id, 'targetElement');

                targetElement.style.position = 'static';

                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    console.log(targetPosition, 'targetPosition');
                    window.scrollTo({
                        top: targetPosition - 200,
                        behavior: 'smooth',
                    });
                    targetElement.style.removeProperty('position');
                    galaxySection.classList.remove('exitdown');
                }
            });
        });

        // document.querySelectorAll('a.enableHash').forEach(function (link) {
        //     link.addEventListener('click', function (event) {
        //         event.preventDefault();
        //         let targetId = this.getAttribute('href').substring(1);
        //         let targetElement = document.getElementById(targetId);
        //
        //         checkClickedNav = true;
        //
        //
        //         setTimeout(() => {
        //             checkClickedNav = false;
        //         }, 1000)
        //
        //         if (targetElement) {
        //             // Scroll smoothly to the target element
        //
        //                 targetElement.scrollIntoView({behavior: 'smooth'});
        //                 scrollWatcherDown = false;
        //
        //             // Update the URL hash without jumping
        //             history.pushState(null, null, '#' + targetId);
        //         }
        //     });
        // });
        //
        //
        // planetsNavItem.forEach((item) => {
        //     console.log(scrollWatcherDown);
        //     item.addEventListener('click', () => {
        //         clearActiveClass()
        //         clearVisibleClass()
        //         console.log(item);
        //         item.classList.add('active');
        //         let hrefValue = item.getAttribute('href');
        //         console.log(hrefValue);
        //
        //         document.querySelector(hrefValue).scrollTo({behavior: 'smooth'})
        //
        //         let currentElement = document.querySelector(hrefValue);
        //
        //         const sectionByID = document.querySelector(hrefValue).classList.add('visible');
        //
        //         let scrollTop = window.scrollY || document.documentElement.scrollTop;
        //
        //         console.log(scrollTop)
        //
        //
        //
        //         //
        //         // scrollWatcherDown = true;
        //         //
        //         // if (!scrollWatcherDown) {
        //         //     const rect = scrollWatcher.getBoundingClientRect();
        //         //     const currentWidth = rect.width;
        //         //     const newWidth = currentWidth - (currentWidth / 5);
        //         //     scrollWatcher.style.width = `${newWidth}px`;
        //         // }
        //     })
        // })

        //Add custom divs (floating stars)

        if (acPage){
            acPage.insertAdjacentHTML('afterbegin', stars[0] + stars[1] + stars[2]);
        } else if (homeHero) {
            homeHero.insertAdjacentHTML('afterbegin', stars[0] + stars[1] + stars[2]);

        }

        // shrink hero section when scrolling and rocket flying up

        window.addEventListener('scroll', function (e) {
            let scrolled = window.scrollY;


            if (scrolled > 0) {
                acHeroSection.style.translate = '0 -80%';
                planetsNav.style.top = '8%';
                heroRocket.classList.add('rocket-up');

                lunarSection.classList.remove('exitdown');

                if (isTop) {
                    setTimeout(function () {
                        lunarSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                        setTimeout(() => {
                            isTop = false;
                        }, 1000)

                    }, 400);
                }

            } else {
                acHeroSection.style.translate = '0 0';
                planetsNav.style.top = '0';
                heroRocket.classList.remove('rocket-up');
                isTop = true;
            }


        });

        // Observe when an element appearing when scrolling, then run something

        const observerOptions = {
            threshold: [0.5, 1], // Adjust this threshold as needed
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sections.forEach(section => section.classList.remove('visible'));
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });


// Observer for entering the viewport
        const observerOptionsEnter = {
            root: null,
            rootMargin: '0px',
            threshold: [0.5, 1],
        };

        const observerCallbackEnter = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('exit');
                }
            });
        };

        const observerEnter = new IntersectionObserver(observerCallbackEnter, observerOptionsEnter);

// Observer for exiting the viewport
        const observerOptionsExit = {
            root: null,
            rootMargin: '0px',
            threshold: [0.5, 1],
        };

        const observerCallbackExit = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.classList.add('exit');
                }
            });
        };

        const observerExit = new IntersectionObserver(observerCallbackExit, observerOptionsExit);

        sections.forEach(section => {
            observerEnter.observe(section);
            observerExit.observe(section);
        });


        // exit sections


        const observerOptionsExit1 = {
            rootMargin: '0px 0px -625px 0px',
            threshold: [0.5, 1], // Adjust this threshold as needed
        };

        const observerCallbackExit1 = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !checkClickedNav) {
                    sections.forEach(section => section.classList.remove('exitdown'));
                    entry.target.classList.add('exitdown');
                }
            });
        };

        const observerExit1 = new IntersectionObserver(observerCallbackExit1, observerOptionsExit1);

        sections.forEach(section => {
            observerExit1.observe(section);
        });




        // for planets navigation

        const observerOptionsNav = {
            threshold: [0.5, 1], // Adjust this threshold as needed
        };

        const observerCallbackNav = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeItem = document.querySelector(`.${entry.target.id}`);
                    clearActiveClass();
                    if (activeItem) {
                        activeItem.classList.add('active');
                    }
                }
            });
        };

        const observerNav = new IntersectionObserver(observerCallbackNav, observerOptionsNav);

        sections.forEach(section => {
            observerNav.observe(section);
        });


        // tilt js

        const tiltFunction = () => {
            let tiltCard = document.querySelectorAll('.tilt-card');

            if (tiltCard) {
                tiltCard.forEach(card => {
                    card.setAttribute('data-tilt-full-page-listening', '');
                    VanillaTilt.init(card, {
                        max: 20,
                        speed: 300,
                        perspective: 1500,
                    });
                })
            }
        };

        tiltFunction()


        document.querySelectorAll('.acfm-accordion-header').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;

                button.classList.toggle('active');

                if (button.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = 0;
                }
            });
        });

        // lottie

        Lottie.loadAnimation({
            container: document.getElementById('hero-robot'),
            animationData: heroRobot,
        });

        Lottie.loadAnimation({
            container: document.getElementById('forex'),
            animationData: forex,
        });

        Lottie.loadAnimation({
            container: document.getElementById('wallet'),
            animationData: wallet,
        });

        Lottie.loadAnimation({
            container: document.getElementById('equities'),
            animationData: equities,
        });

        Lottie.loadAnimation({
            container: document.getElementById('commodities'),
            animationData: commodities,
        });

        Lottie.loadAnimation({
            container: document.getElementById('indices'),
            animationData: indices,
        });

        //         const animations = [
        //             { container: document.querySelectorAll('div#forex'), path: forex },
        //             { container: document.querySelectorAll('div#wallet'), path: wallet },
        //             // Add more configurations as needed
        //         ];
        //
        //
        // // Load each animation using a loop
        //         animations.forEach((container, path)  => {
        //             let cont = container;
        //             console.log([cont], path);
        //             Lottie.loadAnimation({
        //                 container: container, // DOM element where the animation will be rendered
        //                 renderer: 'svg', // Choose renderer (svg or canvas)
        //                 loop: true, // Set loop to true or false
        //                 autoplay: true, // Set autoplay to true or false
        //                 path: path, // Path to the JSON file of the animation
        //             });
        //         });

        // Add toggle-sub-menu button to main navigation links with children
        initMainNavigation($('.topNavigation'));

        // Closing Login Popup on mobile when clicked outside
        const $loginPopup = '#loginPopup';
        $(document).click(function (e) {
            if ($(window).outerWidth() < 1199) {
                if (!$(e.target).parents($loginPopup).length > 0) {
                    $($loginPopup).collapse('hide');
                }
            }
        });

        // Toggles transparency background of top bar when scrolling has started (beyond 10px)
        const $stickies = $('.prfwp-header'),
            $window = $(window);
        let lastScrollTop = 0;
        $window
            .scroll(() => {
                if ($window.scrollTop() >= 10) {
                    $stickies.addClass('sticky');
                    // workaround to prevent sticky header from flickering on edge of the position
                    if ($window.scrollTop() >= 50) {
                        $stickies.addClass('no-padding');
                    } else if ($window.scrollTop() <= 10) {
                        $stickies.removeClass('no-padding');
                    }
                } else {
                    $stickies.removeClass('sticky');
                }

                const st = $window.scrollTop();
                if (st > lastScrollTop) {
                    if ($('.prfwp-burger').hasClass('collapsed')) {
                        $stickies.removeClass('show-nav');
                    }
                } else {
                    $stickies.addClass('show-nav');
                }
                lastScrollTop = st;
            })
            .scroll();

        // Adding target self to enable anchor linking (which was prevented by Angular)
        $('.menu-item.self a').attr('target', '_self');

        // Run animation when element is inView
        const $animations = $('.js-anim');
        if ($animations.length) {
            $animations.each((index, animationContainer) => {
                $(animationContainer).addClass('js-anim-paused');
                $(animationContainer).one('inview', (event, isInView) => {
                    if (isInView) {
                        setTimeout(() => {
                            $(animationContainer).toggleClass('js-anim-paused js-anim-run');
                        }, 100);
                    }
                });
            });
        }

        // Open Account Switcher
        const $placeholderBody = $('#open_account_placeholder'),
            $placeholderLeft = $('.acfm-login-placeholder__left'),
            $placeholderRight = $('.acfm-login-placeholder__right'),
            $placeholderBtn = $('.acfm-login-placeholder__button');

        $placeholderRight.hide();
        $placeholderBtn.click(function () {
            if (!$placeholderBody.hasClass('right')) {
                $placeholderBody.addClass('right');
                $placeholderLeft.fadeOut();
                $placeholderRight.fadeIn();
            } else {
                $placeholderBody.removeClass('right');
                $placeholderRight.fadeOut();
                $placeholderLeft.fadeIn();
            }
        });

        // Numbers animation for counters
        const $counterSection = $('.acfm-list-numbers');
        $counterSection.one('inview', function () {
            $('.acfm-list-numbers__title span').each(function () {
                $(this)
                    .prop('Counter', 0)
                    .animate(
                        {
                            Counter: $(this)
                                .text()
                                .match(/^\d*\.?\d*$/),
                        },
                        {
                            duration: 4000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now).toLocaleString());
                            },
                        }
                    );
                $counterSection.off('inview');
            });
        });

        // Footer Accordion
        const $footerLink = $('.acfm-footer-menu__anchor'),
            $footerContent = $('.acfm-footer-menu__menu');
        if ($(window).outerWidth() < 768) {
            $footerLink.click(function () {
                const currentAttr = $(this).attr('href');
                if ($(this).is('.active')) {
                    $(this).removeClass('active');
                    $footerContent.slideUp(300);
                } else {
                    $footerLink
                        .removeClass('active')
                        .filter(this)
                        .addClass('active');
                    $footerContent
                        .slideUp(300)
                        .filter(currentAttr)
                        .slideDown(300);
                }
            });
        }

        // Material animation for buttons
        const btn = document.querySelectorAll('.acfm-ripple');
        btn.forEach(el => {
            el.style.position = 'relative';
            el.style.overflow = 'hidden';
            el.addEventListener('click', function (e) {
                const x = e.offsetX,
                    y = e.offsetY,
                    ripples = document.getElementsByClassName('ripple');

                if (ripples.length < 10) {
                    // this restricts the user from creating lots of ripples
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    this.appendChild(ripple);

                    setTimeout(function () {
                        ripple.remove();
                    }, 1000);
                }
            });
        });



        /* account types slider */
        const $accountTypes = $('.acfm-account-types');
        $accountTypes.slick({
            arrows: false,
            dots: true,
            customPaging: function (slider, i) {
                let $slideTitle = $(slider.$slides[i])
                    .find('li')
                    .attr('title');
                return '<img class="acfm-image" src="https://ashbournewm.com/wp-content/uploads/2024/07/' + $slideTitle + '.png" alt="' + $slideTitle + '"><button class="tab tab-title">' + $slideTitle + '</button>';
            },
            infinite: true,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '',
            mobileFirst: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: 'unslick',
                },
            ],
        });

        // // tabs click logic

        let tabsBtn = document.getElementById('tabs');

        if (tabsBtn) {
            tabsBtn.addEventListener('click', function (event) {
                if (event.target.classList.contains('main-tab')) {
                    let tabId = event.target.getAttribute('data-tab');

                    // Hide all tab content
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });

                    // Deactivate all tabs
                    document.querySelectorAll('.main-tab').forEach(tab => {
                        tab.classList.remove('active');
                    });

                    // Show the selected tab content
                    document.getElementById(tabId).classList.add('active');

                    // Activate the selected tab
                    event.target.classList.add('active');
                }
            });
        }

        // run once when page loaded
        function onPageLoad() {
            let winterTabElement = document.querySelector('.tab1');
            let winterImg = document.getElementById('tab1');

            if (winterTabElement || winterImg) {
                winterTabElement.classList.add('active');
                winterImg.classList.add('active');
            }
        }

        document.addEventListener('DOMContentLoaded', onPageLoad());

        document.querySelectorAll('.splide__arrow').forEach(el =>
            el.addEventListener('click', function () {
                let circleElement = document.querySelector('.splide__slide');

                let clonedElement = circleElement.cloneNode(true);

                circleElement.parentNode.replaceChild(clonedElement, circleElement);
            })
        );

        // change the header background on specific pages

        // Function to check if the current slug matches any in the list
        const slugsToCheck = [
            '/deposit/',
            '/personal-info/',
            '/account-summary/',
            '/transactions/',
            '/withdrawal/',
            '/documents-kyc/',
            '/refer-a-friend/',
            '/intrenal-transfer/',
        ];
        const header = document.querySelector('.prfwp-header');
        const navbar = document.getElementById('menu-primary');

        function checkCurrentSlug() {
            const currentSlug = window.location.pathname;

            for (let i = 0; i < slugsToCheck.length; i++) {
                const slug = slugsToCheck[i];
                if (currentSlug.endsWith(slug)) {
                    // console.log(`The slug of the page is ${slug}`);
                    navbar.style.color = '#2f363d';
                    header.style.display = 'none';
                    return; // exit the loop once a match is found
                } else if (currentSlug.endsWith('/open-account/')) {
                    header.style.backgroundColor = '#fff';
                }
            }
        }

        checkCurrentSlug();
    },
};

let amountScrolled = 200;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('button.back-to-top').addClass('show');
    } else {
        $('button.back-to-top').removeClass('show');
    }
});

$('button.back-to-top').click(function () {
    $('html, body').animate(
        {
            scrollTop: 0,
        },
        800
    );
    return false;
});

// scroll reveal

function revealFunction() {
    if (window.innerWidth > 768) {
        ScrollReveal().reveal('.acfm-list-Numbered-card__item:nth-child(1)', {
            origin: 'left',
            duration: 1000,
            distance: '100%',
            easing: 'ease-in-out',
            reset: false,
        });
        ScrollReveal().reveal('.acfm-list-Numbered-card__item:nth-child(2)', {
            origin: 'bottom',
            duration: 1000,
            distance: '100%',
            easing: 'ease-in-out',
            reset: false,
        });
        ScrollReveal().reveal('.acfm-list-Numbered-card__item:nth-child(3)', {
            origin: 'right',
            duration: 1000,
            distance: '100%',
            easing: 'ease-in-out',
            reset: false,
        });
        ScrollReveal().reveal('.acfm-list-Numbered-card__item:nth-child(4)', {
            origin: 'left',
            duration: 1300,
            distance: '100%',
            easing: 'ease-in-out',
            reset: false,
        });
    }

    ScrollReveal().reveal('.gray_card:nth-child(1)', {
        duration: 900,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });
    ScrollReveal().reveal('.gray_card:nth-child(2)', {
        duration: 1100,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });
    ScrollReveal().reveal('.gray_card:nth-child(3)', {
        duration: 1250,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });

    ScrollReveal().reveal('.white_card:nth-child(1)', {
        duration: 900,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });
    ScrollReveal().reveal('.white_card:nth-child(2)', {
        duration: 1100,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });
    ScrollReveal().reveal('.white_card:nth-child(3)', {
        duration: 1250,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });

    ScrollReveal().reveal('.fade-left-col', {
        origin: 'left',
        duration: 1300,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });
    ScrollReveal().reveal('.our-platforms .acfm-image', {
        beforeReveal: function (domEl) {
            // Animate the element's position before reveal
            domEl.style.transition = 'transform 1.7s ease';
            domEl.style.transform = 'translateX(-500px)'; // Move 100px to the right (adjust as needed)
        },
        afterReveal: function (domEl) {
            // Reset the element's position after reveal
            domEl.style.transition = 'transform 1.7s ease'; // Disable transition for immediate change
            domEl.style.transform = 'translateX(-500px)'; // Move back to original position
        },
        // afterReset: function (domEl) {
        //     // Reset the element's position when hidden
        //     domEl.style.transform = 'translateX(1000px)'; // Move back to the transformed position
        // },
    });

    ScrollReveal().reveal('.our-platforms .acfm-image .right-reveal', {
        beforeReveal: function (domEl) {
            // Animate the element's position before reveal
            domEl.style.transition = 'transform 1.7s ease';
            domEl.style.transform = 'translateX(500px)'; // Move 100px to the right (adjust as needed)
        },
        afterReveal: function (domEl) {
            // Reset the element's position after reveal
            domEl.style.transition = 'transform 1.7s ease'; // Disable transition for immediate change
            domEl.style.transform = 'translateX(500px)'; // Move back to original position
        },
    });

    ScrollReveal().reveal('img.hero-img', {
        origin: 'right',
        duration: 1400,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });

    ScrollReveal().reveal('.fade-up', {
        origin: 'bottom',
        duration: 1200,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });

    ScrollReveal().reveal('.acfm-list-default-white-bg__item:nth-child(1)', {
        origin: 'bottom',
        duration: 800,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });
    ScrollReveal().reveal('.acfm-list-default-white-bg__item:nth-child(2)', {
        origin: 'bottom',
        duration: 900,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });
    ScrollReveal().reveal('.acfm-list-default-white-bg__item:nth-child(3)', {
        origin: 'bottom',
        duration: 1000,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });
    ScrollReveal().reveal('.acfm-list-default-white-bg__item:nth-child(4)', {
        origin: 'bottom',
        duration: 1100,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });

    ScrollReveal().reveal('.acfm-list-default__item', {
        origin: 'bottom',
        duration: 1200,
        distance: '100%',
        easing: 'ease-in-out',
        reset: false,
    });

    ScrollReveal().reveal('.grow-img', {
        delay: 200, // Delay before the animation starts in milliseconds
        duration: 1000, // Duration of the animation in milliseconds
        scale: 1, // Initial scale of the element
        distance: '50px', // Distance the element moves during the animation
        origin: 'center', // Origin of the animation
        easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function for the animation
        reset: false, // Reveal the element only once
    });
}

window.addEventListener('load', () => {
    revealFunction();
});
