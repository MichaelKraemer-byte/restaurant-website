function german() {
    document.getElementById('body').innerHTML = `<section id='atf'>
    <div class='top-content'>
      <img class='pink-flower'
          src='./assets/img/1_hero/PNG/sakura_logo.png'
          alt='eine pinke Blume'/>

      <div class='menu-bar'>
          <a class='menu-locations-about' href='#section-3'>MENÜ</a>
          <a class='menu-locations-about' href='#locations'>STANDORT</a>
          <a class='about-anker menu-locations-about' href='about.html'>ÜBER UNS</a>
          <a class='call-button' href='tel:017654564534'><img class='phone-icon' src='./assets/img/1_hero/PNG/phone.png'>0176 54564534</a>
          <div class='language-button-container'>
          <button onclick='german()' class='DE-button'></button>
          <button onclick='english()' class='ENG-button'></button>
          </div>
        </div>
    </div>

    <div class='title'>
      <h1>SAKURA RAMEN</h1>
      <p>DIE BESTEN RAMEN DER STADT</p>
    </div>
  </section>
    
  <section id='section-2'>
    <h2>WIE MAN BESTELLT</h2>
    
    <div class='order-plan'>
      <div class='plan-topics'>
        <img class='plan-img' src='./assets/img/2_section_how_to_order/PNG/noodle.png'>
        <h3>Nudeln auswählen</h3>
      </div>
      
      <div class='plan-topics'>
        <img class='plan-img' src='./assets/img/2_section_how_to_order/PNG/broth.png'>
        <h3>Brühe auswählen</h3>
      </div>
      
      <div class='plan-topics'>
        <img class='plan-img' src='./assets/img/2_section_how_to_order/PNG/egg.png'>
        <h3>Zutaten hinzufügen</h3>
      </div>
    </div>
  </section>

  <section id='section-3'>
    <div class='menu-title'>
      <h2>UNSER MENÜ</h2>
    </div>

    <div class='menu'>
      <div class='row'>
        <img class='ramen-img' src='./assets/img/3_section_our_menu/Png/R1.png'>
        <div class='table-1'>       
          <table>
            <h3 class='food-title'>Tonkotsu Ramen</h3>
            <tr>
              <td>HÜHNCHEN</td>
              <td>11.95€</td>
            </tr>
            <tr>
              <td>RINDFLEISCH</td>
              <td>12.95€</td>
            </tr>
            <tr>
              <td>GARNELEN</td>
              <td>13.95€</td>
            </tr>
          </table>
        </div> 
      </div>

      <div class='row mobile-reverse'>
        <div class='table-2'>       
          <table>
            <h3 class='food-title'>Spicy Miso Ramen</h3>
            <tr>
                <td>HÜHNCHEN</td>
                <td>11.95€</td>
            </tr>
            <tr>
                <td>RINDFLEISCH</td>
                <td>12.95€</td>
            </tr>
            <tr>
                <td>GARNELEN</td>
                <td>13.95€</td>
            </tr>
          </table>
        </div> 
        <img class='ramen-img' src='./assets/img/3_section_our_menu/Png/R2.png'>
      </div>
      
      <div class='row'>
        <img class='ramen-img' src='./assets/img/3_section_our_menu/Png/R3.png'>
        <div class='table-1'>       
          <table>
            <h3 class='food-title'>Tonkotsu Ramen</h3>
            <tr>
                <td>HÜHNCHEN</td>
                <td>11.95€</td>
            </tr>
            <tr>
                <td>RINDFLEISCH</td>
                <td>12.95€</td>
            </tr>
            <tr>
                <td>GARNELEN</td>
                <td>13.95€</td>
            </tr>
          </table>
        </div> 
      </div>
    </div>
  </section>

  <section id='locations'> 
    <h2>STANDORT</h2>
    <h4><img class='map-marker' src='./assets/img/4_section_find_us_at/PNG/map_marker.png'>Kapuzinerstraße 31, München, 80337</h4>
    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2081517665038!2d11.561203299999999!3d48.125509099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf44d01affc5%3A0xe7a07e0710be63e8!2sKapuzinerstra%C3%9Fe%2031%2C%2080337%20M%C3%BCnchen%2C%20Deutschland!5e0!3m2!1sde!2s!4v1708940902048!5m2!1sde!2s' class='maps' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
    </section>
    
    <footer id='footer'>
      <img class='footer-logo' src='./assets/img/5_section_footer/PNG/sakura_ramen_logo_and_text.png'>
      <img class='pink-flower' src='./assets/img/1_hero/PNG/sakura_logo.png'
      alt='a pink flower'>
    
      <div>
        <img class='social-media-icons' src='./assets/img/5_section_footer/PNG/tripadvisor_logo.png'>
        <img class='social-media-icons' src='./assets/img/5_section_footer/PNG/facebook_logo.png'>
        <img class='social-media-icons' src='./assets/img/5_section_footer/PNG/instagrram_logo.png'>
      </div>
    </footer>`;
}    

function english(){
    document.getElementById('body').innerHTML=`<section id='atf'>
    <div class='top-content'>
      <img class='pink-flower'
          src='./assets/img/1_hero/PNG/sakura_logo.png'
          alt='a pink flower'/>

      <div class='menu-bar'>
          <a class='menu-locations-about' href='#section-3'>MENU</a>
          <a class='menu-locations-about' href='#locations'>LOCATIONS</a>
          <a class='about-anker menu-locations-about' href='about.html'>ABOUT</a>
          <a class='call-button' href='tel:017654564534'><img class='phone-icon' src='./assets/img/1_hero/PNG/phone.png'>0176 54564534</a>
          <div class='language-button-container'>
          <button onclick='german()' class='DE-button'></button>
          <button onclick='english()' class='ENG-button'></button>
          </div>
        </div>
    </div>

    <div class='title'>
      <h1>SAKURA RAMEN</h1>
      <p>THE BEST RAMEN IN TOWN</p>
    </div>
  </section>
    
  <section id='section-2'>
    <h2>HOW TO ORDER</h2>
    
    <div class='order-plan'>
      <div class='plan-topics'>
        <img class='plan-img' src='./assets/img/2_section_how_to_order/PNG/noodle.png'>
        <h3>Pick your noodle</h3>
      </div>
      
      <div class='plan-topics'>
        <img class='plan-img' src='./assets/img/2_section_how_to_order/PNG/broth.png'>
        <h3>Pick your broth</h3>
      </div>
      
      <div class='plan-topics'>
        <img class='plan-img' src='./assets/img/2_section_how_to_order/PNG/egg.png'>
        <h3>Add your toppings</h3>
      </div>
    </div>
  </section>

  <section id='section-3'>
    <div class='menu-title'>
      <h2>OUR MENU</h2>
    </div>

    <div class='menu'>
      <div class='row'>
        <img class='ramen-img' src='./assets/img/3_section_our_menu/Png/R1.png'>
        <div class='table-1'>       
          <table>
            <h3 class='food-title'>Tonkotsu Ramen</h3>
            <tr>
              <td>CHICKEN</td>
              <td>11.95€</td>
            </tr>
            <tr>
              <td>BEEF</td>
              <td>12.95€</td>
            </tr>
            <tr>
              <td>SHRIMP</td>
              <td>13.95€</td>
            </tr>
          </table>
        </div> 
      </div>

      <div class='row mobile-reverse'>
        <div class='table-2'>       
          <table>
            <h3 class='food-title'>Spicy Miso Ramen</h3>
            <tr>
                <td>CHICKEN</td>
                <td>11.95€</td>
            </tr>
            <tr>
                <td>BEEF</td>
                <td>12.95€</td>
            </tr>
            <tr>
                <td>SHRIMP</td>
                <td>13.95€</td>
            </tr>
          </table>
        </div> 
        <img class='ramen-img' src='./assets/img/3_section_our_menu/Png/R2.png'>
      </div>
      
      <div class='row'>
        <img class='ramen-img' src='./assets/img/3_section_our_menu/Png/R3.png'>
<div class='table-1'>
<table>
<h3 class='food-title'>Tonkotsu Ramen</h3>
<tr>
<td>CHICKEN</td>
<td>11.95€</td>
</tr>
<tr>
<td>BEEF</td>
<td>12.95€</td>
</tr>
<tr>
<td>SHRIMP</td>
<td>13.95€</td>
</tr>
</table>
</div>
</div>
</div>

  </section>
  <section id='locations'> 
    <h2>FIND US HERE</h2>
    <h4><img class='map-marker' src='./assets/img/4_section_find_us_at/PNG/map_marker.png'>Kapuzinerstraße 31, Munich, 80337</h4>
    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2081517665038!2d11.561203299999999!3d48.125509099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf44d01affc5%3A0xe7a07e0710be63e8!2sKapuzinerstra%C3%9Fe%2031%2C%2080337%20M%C3%BCnchen%2C%20Deutschland!5e0!3m2!1sde!2s!4v1708940902048!5m2!1sde!2s' class='maps' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
    </section>

<footer id='footer'>
  <img class='footer-logo' src='./assets/img/5_section_footer/PNG/sakura_ramen_logo_and_text.png'>
  <img class='pink-flower' src='./assets/img/1_hero/PNG/sakura_logo.png'
  alt='a pink flower'>

  <div>
    <img class='social-media-icons' src='./assets/img/5_section_footer/PNG/tripadvisor_logo.png'>
    <img class='social-media-icons' src='./assets/img/5_section_footer/PNG/facebook_logo.png'>
    <img class='social-media-icons' src='./assets/img/5_section_footer/PNG/instagrram_logo.png'>
  </div>
</footer>`;
}