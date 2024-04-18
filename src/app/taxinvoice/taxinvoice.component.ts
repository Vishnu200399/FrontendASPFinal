import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-invoice',
  templateUrl: './taxinvoice.component.html',
  styleUrls: [] // Remove admin component styles here
})
export class TaxinvoiceComponent implements OnInit {

  ngOnInit() {
    this.loadAdminStyles();
    this.loadAdminScripts();
  }

  loadAdminStyles() {
    // Load Favicon
    const favicon = document.createElement('link');
    favicon.href = 'assets/images/favicon.svg';
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon';
    document.head.appendChild(favicon);

    // Load Google Font
    const googleFonts = document.createElement('link');
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
    googleFonts.rel = 'stylesheet';
    googleFonts.id = 'main-font-link'; // Match ID from your template
    document.head.appendChild(googleFonts);

    // Load Tabler Icons
    const tablerIcons = document.createElement('link');
    tablerIcons.href = 'assets/fonts/tabler-icons.min.css';
    tablerIcons.rel = 'stylesheet';
    document.head.appendChild(tablerIcons);

    // Load Material Icons
    const materialIcons = document.createElement('link');
    materialIcons.href = 'assets/fonts/material.css';
    materialIcons.rel = 'stylesheet';
    document.head.appendChild(materialIcons);

    // Load Template CSS
    const mainStyle = document.createElement('link');
    mainStyle.href = 'assets/css/style.css';
    mainStyle.rel = 'stylesheet';
    mainStyle.id = 'main-style-link'; // Match ID from your template
    document.head.appendChild(mainStyle);

    const presetStyle = document.createElement('link');
    presetStyle.href = 'assets/css/style-preset.css';
    presetStyle.rel = 'stylesheet';
    presetStyle.id = 'preset-style-link'; // Match ID from your template
    document.head.appendChild(presetStyle);
  }

  loadAdminScripts() {
    // Load Required JS (consider loading in specific order if dependencies exist)
    const popperScript = document.createElement('script');
    popperScript.src = 'assets/js/plugins/popper.min.js';
    document.body.appendChild(popperScript);

    const simplebarScript = document.createElement('script');
    simplebarScript.src = 'assets/js/plugins/simplebar.min.js';
    document.body.appendChild(simplebarScript);

    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'assets/js/plugins/bootstrap.min.js';
    document.body.appendChild(bootstrapScript);

    const configScript = document.createElement('script');
    configScript.src = 'assets/js/config.js';
    document.body.appendChild(configScript);

    const pcodedScript = document.createElement('script');
    pcodedScript.src = 'assets/js/pcoded.js';
    document.body.appendChild(pcodedScript);

    // Load Page Specific JS (load after required JS)
    const apexchartsScript = document.createElement('script');
    apexchartsScript.src = 'assets/js/plugins/apexcharts.min.js';
    document.body.appendChild(apexchartsScript);

    const dashboardScript = document.createElement('script');
    dashboardScript.src = 'assets/js/pages/dashboard-default.js';
    document.body.appendChild(dashboardScript);
  }
}
