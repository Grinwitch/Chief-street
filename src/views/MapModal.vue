<template>
  <div class="delivery-map" id="dl_map">
    <div class="delivery-map__container">
      <div class="delivery-map__yandex" id="mymap">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac79c50f95e2dbef34747903fe237511f78f4334306e32e51c56e7d6a49d70c19&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
        <div class="delivery-map__pin">
          <img src="@/assets/img/icons/pin.png" alt="" class="delivery-map__pin-icon">
        </div>
        <div class="delivery-map__dot"></div>
      </div>

      <div class="delivery-map__close">
        <img src="@/assets/img/svgexport-2.svg" alt="close icon" class="delivery-map__close-icon">
      </div>

      <div class="delivery-map__content">
        <div class="delivery-map__content-container">
          <h3 class="delivery-map__content-title">Доставка</h3>
          <div class="delivery-map__content-info">
            <div class="delivery-map__content-address">
              <input type="text" class="delivery-map__content-input" placeholder="Полный адрес">
              <button class="delivery-map__content-gpc" title="Определить адрес">
                <img src="@/assets/img/icons/gps.png" alt="gpc icon" class="delivery-map__content-gpc-icon">
              </button>
            </div>
            <div class="delivery-map__content-home">
              <input type="text" class="delivery-map__content-input" placeholder="Дом">
            </div>
            <div class="delivery-map__content-office">
              <input type="text" class="delivery-map__content-input" placeholder="Квартира / Офис">
            </div>
            <div class="delivery-map__content-intercom">
              <input type="text" class="delivery-map__content-input" placeholder="Домофон">
            </div>
            <div class="delivery-map__content-entrance">
              <input type="text" class="delivery-map__content-input" placeholder="Подъезд">
            </div>
            <div class="delivery-map__content-floor">
              <input type="text" class="delivery-map__content-input" placeholder="Этаж">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>