import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [] // Remove home component styles here
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    this.loadHomeStyles();
  }

  loadHomeStyles() {
    // Load Apple Touch Icon
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.href = 'assets/img/apple-touch-icon.png';
    appleTouchIcon.rel = 'apple-touch-icon';
    document.head.appendChild(appleTouchIcon);

    // Load Google Fonts preconnect
    const fontsPreconnect1 = document.createElement('link');
    fontsPreconnect1.rel = 'preconnect';
    fontsPreconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(fontsPreconnect1);

    const fontsPreconnect2 = document.createElement('link');
    fontsPreconnect2.rel = 'preconnect';
    fontsPreconnect2.href = 'https://fonts.gstatic.com';
    fontsPreconnect2.crossOrigin = 'crossorigin';
    document.head.appendChild(fontsPreconnect2);

    // Load Google Fonts stylesheet
    const googleFonts = document.createElement('link');
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
    googleFonts.rel = 'stylesheet';
    document.head.appendChild(googleFonts);

    // Load remaining stylesheets
    const bootstrapStyles = document.createElement('link');
    bootstrapStyles.href = 'assets/vendor/bootstrap/css/bootstrap.min.css';
    bootstrapStyles.rel = 'stylesheet';
    document.head.appendChild(bootstrapStyles);

    const bootstrapIconsStyles = document.createElement('link');
    bootstrapIconsStyles.href = 'assets/vendor/bootstrap-icons/bootstrap-icons.css';
    bootstrapIconsStyles.rel = 'stylesheet';
    document.head.appendChild(bootstrapIconsStyles);

    const fontawesomeStyles = document.createElement('link');
    fontawesomeStyles.href = 'assets/vendor/fontawesome-free/css/all.min.css';
    fontawesomeStyles.rel = 'stylesheet';
    document.head.appendChild(fontawesomeStyles);

    const aosStyles = document.createElement('link');
    aosStyles.href = 'assets/vendor/aos/aos.css';
    aosStyles.rel = 'stylesheet';
    document.head.appendChild(aosStyles);

    const glightboxStyles = document.createElement('link');
    glightboxStyles.href = 'assets/vendor/glightbox/css/glightbox.min.css';
    glightboxStyles.rel = 'stylesheet';
    document.head.appendChild(glightboxStyles);

    const swiperStyles = document.createElement('link');
    swiperStyles.href = 'assets/vendor/swiper/swiper-bundle.min.css';
    swiperStyles.rel = 'stylesheet';
    document.head.appendChild(swiperStyles);

    const mainStyles = document.createElement('link');
    mainStyles.href = 'assets/css/main.css'; // Assuming this is your home component's main stylesheet
    mainStyles.rel = 'stylesheet';
    document.head.appendChild(mainStyles);
  }
  
  
}