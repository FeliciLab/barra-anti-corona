/**
 * Contribua no objeto abaixo atribuindo com seu estado o site de referência sobre coronavírus
 */
var bar_corona_url_estados = {
  ce: 'https://www.saude.ce.gov.br/coronavirus-covid-19/'
}
/*************************/
var bar_corona_bg_color = document.currentScript.getAttribute('data-uf') ? document.currentScript.getAttribute('data-uf') : '#fc6836';
var bar_corona_atributo_uf = document.currentScript.getAttribute('data-uf');
var bar_corona_url_uf_selecionado = bar_corona_atributo_uf && bar_corona_url_estados.hasOwnProperty(bar_corona_atributo_uf.toLowerCase()) ? bar_corona_url_estados[bar_corona_atributo_uf.toLowerCase()] : bar_corona_url_estados.ce
var htmlBarAnticorona = `
<div id="body-js-content-esp-saude-barra-anti-corona" style="padding: 0; margin: 0; font-family: Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; overflow: hidden; width: 100%;">
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157946045-1"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-157946045-1'); </script>
  <div style="background-color: ${bar_corona_bg_color} !important; color: white !important; text-align: center !important;">
      <div style="width: 100%; max-width: 1170px; z-index: 9999; max-height: 50px; padding-top: 20px; padding-bottom: 20px; display: inline-flex;">
          <div style="width: 100%; text-align:left; padding-left: 20px">
              <a target="_blank" title="Link Coronavírus: Saiba o que fazer" href="${bar_corona_url_uf_selecionado}" style="color: azure !important; text-decoration: none !important; font-size: 14pt !important; font-style: normal !important;" > <strong>CORONAVÍRUS</strong>:&nbsp;Saiba o que fazer </a>
          </div>
          <div onclick="document.getElementById('body-js-content-esp-saude-barra-anti-corona').innerHTML = '';" style="padding: 0 2.5rem"> <div style="filter: grayscale(100%) brightness(0) invert(1); width: 24px; height: 24px;"> <svg viewBox="0 0 24 24"> <path d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M9.12,7.71L7.71,9.12L10.59,12L7.71,14.88L9.12,16.29L12,13.41L14.88,16.29L16.29,14.88L13.41,12L16.29,9.12L14.88,7.71L12,10.59"/> </svg> </div> </div>
      </div>
  </div>
</div>
`
document.body.innerHTML = htmlBarAnticorona + document.body.innerHTML