class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
        <header class="main-header-three clearfix">
            <div class="main-header-three__top">
                <div class="main-header-three__top-inner clearfix">
                    <div class="main-header-three__top-left">
                        <ul class="list-unstyled main-header-three__top-address">
                            <li>
                                <div class="icon">
                                    <span class="icon-pin"></span>
                                </div>
                                <div class="text">
                                    <p>Vancouver, Richmound, Maple Ridge, Langley</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="icon-tel"><i class="fas fa-phone-volume"></i></span>
                                </div>
                                <div class="text">
                                    <p><a href="tel:604-807-6906">
                                            604-807-6906</a></p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="icon-email"></span>
                                </div>
                                <div class="text">
                                    <p><a href="mailto:sales@bellacustomblinds.ca"> sales@bellacustomblinds.ca</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="main-header-three__top-right">
                        <div class="main-header-three__top-right-content">
                            <ul class="list-unstyled main-header-three__top-right-menu">
                                <li><a href="blog.html">Contact</a></li>
                            </ul>
                            <div class="main-header-three__top-right-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="main-menu main-menu-three clearfix">
                <div class="main-menu-three__wrapper clearfix">
                    <div class="main-menu-three__left">
                        <div class="main-menu-three__logo-box">
                            <div class="main-menu-three__logo">
                                <a href="index.html">
                                    <img src="assets/images/resources/logo-2.png" class="light-logo" alt="">
                                    <img src="assets/images/resources/logo-1.png" class="dark-logo" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="main-menu-three__main-menu-three-box">
                            <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                            <ul class="main-menu__list">
                                <li>
                                    <a href="/index">Home </a>
                                </li>
                                <li class="dropdown">
                                    <a href="#">Blinds & Shades </a>
                                    <ul>
                                        <li><a href="/roller-shades">Roller Shades</a></li>
                                        <li><a href="/zebra-shades">Zebra Shades</a></li>
                                        <li><a href="/venetian-blinds">Venetian Blinds</a></li>
                                        <li><a href="/vertical-blinds">Vertical Blinds</a></li>
                                        <li><a href="/smart-blinds">Smart Blinds</a></li>
                                        <li><a href="/honeycomb-blinds">Honeycomb Blind</a></li>

                                    </ul>
                                </li>
                                <li>
                                    <a href="/about">About </a>
                                </li>
                                <li >
                                    <a href="/projects">Projects</a>
                                </li>
                                <li><a href="/contact">Contact </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="main-menu-three__right">
                        <div class="main-menu-three__search-btn-call">
                            <div class="main-menu-three__search-btn">
                                <div class="main-menu-three__btn-box">
                                    <a href="/contact" class="main-menu-three__btn thm-btn btn-black">Book
                                        Appointment</a>
                                </div>
                            </div>
                            <div class="main-menu-three__call">
                                <div class="main-menu-three__call-icon">
                                    <span class="icon-phone-call"></span>
                                </div>
                                <div class="main-menu-three__call-number">
                                    <p>Call anytime</p>
                                    <h5><a href="tel:604-807-6906">604-807-6906</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div class="stricky-header stricked-menu main-menu main-menu-three">
            <div class="sticky-header__content"></div><!-- /.sticky-header__content -->
        </div>
 `;
    }
}
window.customElements.define('header-section', Header);

class MobNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
           <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>
        <!-- /.mobile-nav__overlay -->
        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

            <div class="logo-box">
                <a href="/" aria-label="logo image"><img src="assets/images/resources/logo-1.png" width="155"
                        alt="" /></a>
            </div>
            <!-- /.logo-box -->
            <div class="mobile-nav__container"></div>
            <!-- /.mobile-nav__container -->

            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:ales@bellacustomblinds.ca">sales@bellacustomblinds.ca</a>
                </li>
                <li>
                    <i class="fa fa-phone-alt"></i>
                    <a href="tel:604-807-6906">604-807-6906</a>
                </li>
            </ul><!-- /.mobile-nav__contact -->
            <div class="mobile-nav__top">
                <div class="mobile-nav__social">
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-facebook-square"></a>
                    <a href="#" class="fab fa-pinterest-p"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div><!-- /.mobile-nav__social -->
            </div><!-- /.mobile-nav__top -->



        </div>
        <!-- /.mobile-nav__content -->
    </div>
 `;
    }
}
window.customElements.define('mob-navbar-section', MobNav);

class Products extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
                    <section class="services-one services-three">
            <div class="services-one-bg-box">
                <div class="services-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"></div>
            </div>

            <div class="container">
                <div class="section-title text-center">
                    <span class="section-title__tagline"><strong>Our Custom Blinds & Shades</strong></span>
                    <h2 class="section-title__title text-dark">Tailored to You, Perfected by Bella Blinds</h2>
                    <div class="section-title__line"></div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4">
                        <div class="services-one__single wow fadeInUp" data-wow-delay="100ms">
                            <div class="">
                                <img src="assets/images/products/roller1.jpg" width="100%" height="432" alt="">
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="/roller-shades">Roller Shades</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="services-one__single wow fadeInUp" data-wow-delay="100ms">
                            <div class="">
                                <img src="assets/images/products/zebra-blinds.jpg" width="100%" height="432" alt="">
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="/zebra-shades">Zebra Shadees</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="services-one__single wow fadeInUp" data-wow-delay="100ms">
                            <div class="">
                                <img src="assets/images/products/venetion.jpg" width="100%" height="432" alt="">
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="/venetian-blinds">Venetian Blinds</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="services-one__single wow fadeInUp" data-wow-delay="100ms">
                            <div class="">
                                <img src="assets/images/products/vertical_blinds.jpg" width="100%" height="432" alt="">
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="/vertical-blinds">Vertical Blinds</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="services-one__single wow fadeInUp" data-wow-delay="100ms">
                            <div class="">
                                <img src="assets/images/products/honeycomb.jpg" width="100%" height="432" alt="">
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="/honeycomb-blinds">Honeycomb Blinds</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="services-one__single wow fadeInUp" data-wow-delay="100ms">
                            <div class="">
                                <img src="assets/images/products/smart-blinds.jpg" width="100%" height="432" alt="">
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="/smart-blinds">Smart Blinds</a></h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
 `;
    }
}
window.customElements.define('products-section', Products);

class ProductSidebar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `    
            <div class="sidebar">
                <div class="sidebar__single sidebar__category">
                    <h3 class="sidebar__title">Products</h3>
                    <ul class="sidebar__category-list list-unstyled">
                        <li><a href="/roller-shades">Roller Shades <span class="fa fa-angle-right"></span></a>
                        </li>
                        <li><a href="/zebra-shades">Zebra Shadees <span class="fa fa-angle-right"></span></a>
                        </li>
                        <li><a href="/venetian Blinds">Venetian Blinds <span
                            class="fa fa-angle-right"></span></a></li>
                        <li><a href="vertical-blinds">Vertical Blinds <span
                            class="fa fa-angle-right"></span></a></li>
                        <li><a href="smart-blinds">Smart Blinds <span class="fa fa-angle-right"></span></a></li>
                                                <li><a href="/honeycomb-blinds">Honeycomb Blinds <span class="fa fa-angle-right"></span></a></li>

        
                    </ul>
                </div>
                <div class="sidebar__single sidebar__tags">
                    <h3 class="sidebar__title">Tags</h3>
                    <div class="sidebar__tags-list">
                        <a href="/roller-shades">Blackout Shades</a>
                        <a href="/smart-blinds">Smart Shades</a>
                        <a href="/venetian-blinds">Faux wood </a>
                        <a href="/smart-blinds">Smart Home Integration</a>
                        <a href="/contact">Home Consultation</a>
                    </div>
                </div>
                <div class="sidebar__single sidebar__category">
                    <h3 class="sidebar__title">Pages</h3>
                    <ul class="sidebar__category-list list-unstyled">
                        <li><a href="/index">Home<span class="fa fa-angle-right"></span></a>
                        </li>
                        <li><a href="/about">About <span class="fa fa-angle-right"></span></a>
                        </li>
                        <li><a href="/contact">Contact <span class="fa fa-angle-right"></span></a></li>
                    </ul>
                </div>
        
            </div>
        
 `;
    }
}
window.customElements.define('product-sidebar-section', ProductSidebar);

class ContactForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
        <section class="contact-one">
            <div class="container">
                <div class="section-title text-center">
                    <span class="section-title__tagline">Contact us</span>
                    <h2 class="section-title__title">Feel Free to Write</h2>
                    <div class="section-title__line"></div>
                </div>
                <div class="row">
                    <div class="col-xl-8 col-lg-7">
                        <div class="contact-one__left">
                            <form action="" class="contact-one__form contact-form-validated" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="contact-one__form-input-box">
                                            <input type="text" placeholder="Your name" name="name">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="contact-one__form-input-box">
                                            <input type="email" placeholder="Email address" name="email">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="contact-one__form-input-box">
                                            <input type="text" placeholder="Phone number" name="phone">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="contact-one__form-input-box">
                                            <input type="text" placeholder="Subject" name="subject">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="contact-one__form-input-box text-message-box">
                                            <textarea name="message" placeholder="Write a message"></textarea>
                                        </div>
                                        <div class="contact-one__btn-box">
                                            <button type="submit" class="thm-btn contact-one__btn">Send a
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="contact-one__right">
                            <div class="contact-one__right-shape-1">
                            </div>
                            <ul class="list-unstyled contact-one__info">
                                <li>
                                    <div class="contact-one__info-box">
                                        <p>Call anytime</p>
                                        <h5><a href="tel:980009630">604-807-6906</a></h5>
                                    </div>
                                </li>
                                <li>
                                    <div class="contact-one__info-box">
                                        <p>Send email</p>
                                        <h5><a href="mailto:sales@bellacustomblinds.ca">sales@bellacustomblinds.ca</a>
                                        </h5>
                                    </div>
                                </li>
                                <li>
                                    <div class="contact-one__info-box">
                                        <p>Richmond</p>
                                        <h5>12520 Vickers Way Richmond, BC, V6V 1H9</h5>
                                    </div>
                                </li>
                            </ul>
                            <div class="contact-one__social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 `;
    }
}
window.customElements.define('contact-form-section', ContactForm);

class Map extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
               <section class="google-map mt-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.4774748223267!2d-123.08710292351638!3d49.19109067137917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548675a78ba4f4b9%3A0xb5785257892a4ea7!2s12520%20Vickers%20Way%2C%20Richmond%2C%20BC%20V6V%201H9!5e1!3m2!1sen!2sca!4v1728887865642!5m2!1sen!2sca"
                class="google-map__one" allowfullscreen></iframe>
        </section>
 `;
    }
}
window.customElements.define('map-section', Map);

class ServiceBadge extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
                    <section class="more-services-two mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div class="more-services-two__single">
                            <div class="more-services-two__img-box">
                                <div class="more-services-two__icon">
                                    <span class="icon-house"></span>
                                </div>
                            </div>
                            <div class="more-services-two__content">
                                <p class="more-services-two__sub-title">Custom Window Covering Solutions</p>
                                <h3 class="more-services-two__title">Residential Custom Shades </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div class="more-services-two__single more-services-two__single-two">
                            <div class="more-services-two__img-box">
                                <div class="more-services-two__icon">
                                    <span class="icon-apartment"></span>
                                </div>
                            </div>
                            <div class="more-services-two__content">
                                <p class="more-services-two__sub-title">Direct from the Factory </p>
                                <h3 class="more-services-two__title">Commercial Projects</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 `;
    }
}
window.customElements.define('service-badge-section', ServiceBadge);

class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
        <footer class="site-footer site-footer-two">
            <div class="site-footer-bg" style="background-image: url(assets/images/backgrounds/site-footer-bg.jpg);">
            </div>
            <div class="site-footer__top">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div class="footer-widget__column footer-widget__about">
                                <div class="footer-widget__logo">
                                    <a href="/"><img src="assets/images/resources/logo-1.png" alt=""></a>
                                </div>
                                <div class="footer-widget__about-text-box">
                                    <p class="footer-widget__about-text">We understand that every home is different,
                                        which is why we offer a personalized service that includes in-home
                                        consultations, custom measurements, and expert installation.</p>
                                </div>
                                <div class="site-footer__social">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div> 
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div class="footer-widget__column footer-widget__explore clearfix">
                                <h3 class="footer-widget__title">Pages</h3>
                                <ul class="footer-widget__explore-list list-unstyled clearfix">
                                    <li><a href="/index">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div class="footer-widget__column footer-widget__services clearfix">
                                <h3 class="footer-widget__title">Products</h3>
                                <ul class="footer-widget__services-list list-unstyled clearfix">
                                    <li><a href="/roller-shades">Roller Shades</a></li>
                                    <li><a href="/zebra-shades">Zebra Shades</a></li>
                                    <li><a href="/venetian-blinds">Venetian Blinds</a></li>
                                    <li><a href="/honeycomb-blinds">Honeycomb Blinds</a></li>
                                    <li><a href="/smart-blinds">Smart Blinds</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div class="footer-widget__column footer-widget__contact clearfix">
                                <h3 class="footer-widget__title">Contact</h3>
                                <ul class="footer-widget__contact-list list-unstyled clearfix">
                                    <li>
                                        <div class="icon">
                                            <span class="icon-phone-call"></span>
                                        </div>
                                        <div class="text">
                                            <h5>Call anytime</h5>
                                            <p><a href="tel:604-807-6906">604-807-6906</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-message"></span>
                                        </div>
                                        <div class="text">
                                            <h5>Send email</h5>
                                            <p><a
                                                    href="mailto:sales@bellacustomblinds.ca">sales@bellacustomblinds.ca</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-location"></span>
                                        </div>
                                        <div class="text">
                                            <h5>Richmond</h5>
                                            <p>12520  Vickers Way 
                                                Richmond, BC, V6V 1H9</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-footer__bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="site-footer__bottom-inner">
                                <p class="site-footer__bottom-text">© Copyright
                                    <script>document.write(new Date().getFullYear())</script>
                                    by Bella Blinds | Powered by
                                    <a href="https://odidor.co/" target="_blank"
                                        title="Odidor Web Solution Agency in Vancouver">Odidor</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
 `;
    }
}
window.customElements.define('footer-section', Footer);

class Project extends HTMLElement {
    constructor() {
        super();
        const img = this.getAttribute('img')
        const projectName = this.getAttribute('projectName')
        this.innerHTML =
            `
        <section class="blog-one">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="100ms">
                        <div class="blog-one__single">
                                <img src=${img} width="100%" alt="">
                                <a href="">
                                    <span class="blog-one__plus"></span>
                                </a>
                            <div class="blog-one__content">
                                <div class="blog-one__date">
                                    <p>${projectName}</p>
                                </div>
                                <ul class="list-unstyled blog-one__meta">
                                    <li><a href=""><i class="far fa-user-circle"></i> by Bella Blinds </a>
                                    </li>
                                    <li><span>/</span></li>
                                    <li><a href="">2024</a>
                                    </li>
                                </ul>
                                <h3 class="blog-one__title"><a href="">
                                    ${projectName}
                                </a></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
 `;
    }
}
window.customElements.define('project-section', Project);


