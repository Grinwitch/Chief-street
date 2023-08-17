
<template>
<Transition name="cart-modal-desktop" duration="300">
  <div class="cart-header">
    <div class="cart-header__container">
      <div class="cart-header__content">
        <div class="cart-header__content-top">
          <h3 class="cart-header__title">Корзина</h3>
          <div class="cart-header__remove"><img src="@/assets/img/icons/trash.png" alt="" class="cart-header__remove-img"> Очистить</div>
        </div>
        <div class="cart-header__items">
          <div class="cart-header__item">
            <div class="cart-header__item-left">
              <div class="cart-header__item-photo">
                <img src="@/assets/img/products/002.jpg" alt="" class="cart-header__item-img">
              </div>
              <div class="cart-header__item-info">
                <div class="cart-header__item-product">
                  <span class="cart-header__item-title">Пицца Пеперони</span>
                  <span class="cart-header__item-portion">35 см</span>
                </div>
                <div class="cart-header__item-descr">Креветки, мидии, осьминог, кальмар, базилик, моцарелла, томатный соус</div>
              </div>
              <div class="cart-header__item-counter">
                <button class="product-cart__counter-minus cart-header__item-minus product-cart__count">
                -
                </button>
                <input type="text" class="product-cart__counter-input cart-header__item-input">
                <button class="product-cart__counter-plus cart-header__item-plus product-cart__count">+</button>
              </div>
            </div>
            <div class="cart-header__item-right">
              <div class="cart-header__item-price">420 ₸</div>
              <div class="cart-header__item-remove">
                <svg viewBox="0 0 38.0919 40.5429"><path class="cls-1" d="M35.1491,39.3951V60.8883a6.2561,6.2561,0,0,0,6.2366,6.2366H59.81a6.2549,6.2549,0,0,0,6.2366-6.2366V39.3951H35.1491ZM57.8477,31.016c-0.5913-5.912-13.9111-5.912-14.5019,0H33.838a2.2942,2.2942,0,0,0-2.2875,2.2868h0A2.2939,2.2939,0,0,0,33.838,35.59H67.3556a2.2938,2.2938,0,0,0,2.2868-2.2875h0a2.2941,2.2941,0,0,0-2.2868-2.2868h-9.508ZM43.9426,60.6523c-0.8815,0-1.5868-.3957-1.5868-0.89V45.9838c0-.4947.7053-0.8907,1.5868-0.8907s1.587,0.396,1.587.8907v13.778c0,0.4947-.7053.89-1.587,0.89h0Zm6.6539,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778c0,0.4947-.7053.89-1.5868,0.89h0Zm6.6551,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778C58.8383,60.2565,58.133,60.6523,57.2515,60.6523Z" transform="translate(-31.5505 -26.5819)"></path></svg>
              </div>
            </div>
          </div>
          <div class="cart-header__item">
            <div class="cart-header__item-left">
              <div class="cart-header__item-photo">
                <img src="@/assets/img/products/002.jpg" alt="" class="cart-header__item-img">
              </div>
              <div class="cart-header__item-info">
                <div class="cart-header__item-product">
                  <span class="cart-header__item-title">Пицца Пармезано</span>
                  <span class="cart-header__item-portion">35 см</span>
                </div>
                <div class="cart-header__item-descr">Креветки, мидии, осьминог, кальмар, базилик, моцарелла, томатный соус</div>
              </div>
              <div class="cart-header__item-counter">
                <button class="product-cart__counter-minus cart-header__item-minus product-cart__count">
                -
                </button>
                <input type="text" class="product-cart__counter-input cart-header__item-input">
                <button class="product-cart__counter-plus cart-header__item-plus product-cart__count">+</button>
              </div>
            </div>
            <div class="cart-header__item-right">
              <div class="cart-header__item-price">420 ₸</div>
              <div class="cart-header__item-remove">
                <svg viewBox="0 0 38.0919 40.5429"><path class="cls-1" d="M35.1491,39.3951V60.8883a6.2561,6.2561,0,0,0,6.2366,6.2366H59.81a6.2549,6.2549,0,0,0,6.2366-6.2366V39.3951H35.1491ZM57.8477,31.016c-0.5913-5.912-13.9111-5.912-14.5019,0H33.838a2.2942,2.2942,0,0,0-2.2875,2.2868h0A2.2939,2.2939,0,0,0,33.838,35.59H67.3556a2.2938,2.2938,0,0,0,2.2868-2.2875h0a2.2941,2.2941,0,0,0-2.2868-2.2868h-9.508ZM43.9426,60.6523c-0.8815,0-1.5868-.3957-1.5868-0.89V45.9838c0-.4947.7053-0.8907,1.5868-0.8907s1.587,0.396,1.587.8907v13.778c0,0.4947-.7053.89-1.587,0.89h0Zm6.6539,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778c0,0.4947-.7053.89-1.5868,0.89h0Zm6.6551,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778C58.8383,60.2565,58.133,60.6523,57.2515,60.6523Z" transform="translate(-31.5505 -26.5819)"></path></svg>
              </div>
            </div>
          </div>
          <div class="cart-header__item">
            <div class="cart-header__item-left">
              <div class="cart-header__item-photo">
                <img src="@/assets/img/products/002.jpg" alt="" class="cart-header__item-img">
              </div>
              <div class="cart-header__item-info">
                <div class="cart-header__item-product">
                  <span class="cart-header__item-title">Пицца Мексиканская</span>
                  <span class="cart-header__item-portion">35 см</span>
                </div>
                <div class="cart-header__item-descr">Креветки, мидии, осьминог, кальмар, базилик, моцарелла, томатный соус</div>
              </div>
              <div class="cart-header__item-counter">
                <button onclick="changeCount(1, 'minus')" class="product-cart__counter-minus cart-header__item-minus product-cart__count">
                -
                </button>
                <input type="text" class="product-cart__counter-input cart-header__item-input">
                <button onclick="changeCount(1, 'plus')" class="product-cart__counter-plus cart-header__item-plus product-cart__count">+</button>
              </div>
            </div>
            <div class="cart-header__item-right">
              <div class="cart-header__item-price">420 ₸</div>
              <div class="cart-header__item-remove">
                <svg viewBox="0 0 38.0919 40.5429"><path class="cls-1" d="M35.1491,39.3951V60.8883a6.2561,6.2561,0,0,0,6.2366,6.2366H59.81a6.2549,6.2549,0,0,0,6.2366-6.2366V39.3951H35.1491ZM57.8477,31.016c-0.5913-5.912-13.9111-5.912-14.5019,0H33.838a2.2942,2.2942,0,0,0-2.2875,2.2868h0A2.2939,2.2939,0,0,0,33.838,35.59H67.3556a2.2938,2.2938,0,0,0,2.2868-2.2875h0a2.2941,2.2941,0,0,0-2.2868-2.2868h-9.508ZM43.9426,60.6523c-0.8815,0-1.5868-.3957-1.5868-0.89V45.9838c0-.4947.7053-0.8907,1.5868-0.8907s1.587,0.396,1.587.8907v13.778c0,0.4947-.7053.89-1.587,0.89h0Zm6.6539,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778c0,0.4947-.7053.89-1.5868,0.89h0Zm6.6551,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778C58.8383,60.2565,58.133,60.6523,57.2515,60.6523Z" transform="translate(-31.5505 -26.5819)"></path></svg>
              </div>
            </div>
          </div>
          <div class="cart-header__item">
            <div class="cart-header__item-left">
              <div class="cart-header__item-photo">
                <img src="@/assets/img/products/002.jpg" alt="" class="cart-header__item-img">
              </div>
              <div class="cart-header__item-info">
                <div class="cart-header__item-product">
                  <span class="cart-header__item-title">Пицца 4 сыра</span>
                  <span class="cart-header__item-portion">35 см</span>
                </div>
                <div class="cart-header__item-descr">Креветки, мидии, осьминог, кальмар, базилик, моцарелла, томатный соус</div>
              </div>
              <div class="cart-header__item-counter">
                <button onclick="changeCount(1, 'minus')" class="product-cart__counter-minus cart-header__item-minus product-cart__count">
                -
                </button>
                <input type="text" class="product-cart__counter-input cart-header__item-input">
                <button onclick="changeCount(1, 'plus')" class="product-cart__counter-plus cart-header__item-plus product-cart__count">+</button>
              </div>
            </div>
            <div class="cart-header__item-right">
              <div class="cart-header__item-price">420 ₸</div>
              <div class="cart-header__item-remove">
                <svg viewBox="0 0 38.0919 40.5429"><path class="cls-1" d="M35.1491,39.3951V60.8883a6.2561,6.2561,0,0,0,6.2366,6.2366H59.81a6.2549,6.2549,0,0,0,6.2366-6.2366V39.3951H35.1491ZM57.8477,31.016c-0.5913-5.912-13.9111-5.912-14.5019,0H33.838a2.2942,2.2942,0,0,0-2.2875,2.2868h0A2.2939,2.2939,0,0,0,33.838,35.59H67.3556a2.2938,2.2938,0,0,0,2.2868-2.2875h0a2.2941,2.2941,0,0,0-2.2868-2.2868h-9.508ZM43.9426,60.6523c-0.8815,0-1.5868-.3957-1.5868-0.89V45.9838c0-.4947.7053-0.8907,1.5868-0.8907s1.587,0.396,1.587.8907v13.778c0,0.4947-.7053.89-1.587,0.89h0Zm6.6539,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778c0,0.4947-.7053.89-1.5868,0.89h0Zm6.6551,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778C58.8383,60.2565,58.133,60.6523,57.2515,60.6523Z" transform="translate(-31.5505 -26.5819)"></path></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-header__bottom">
          <div class="cart-header__bottom-left">
            <div class="cart-header__bottom-promo">
              <input type="text" class="cart-header__bottom-input" placeholder="Введите промокод">
            </div>
            <button class="cart-header__bottom-promo-activate">Применить</button>
          </div>
          <div class="cart-header__bottom-right">
            <button class="cart-header__bottom-checkout">
              <span class="cart-header__bottom-checkout-text">Оформить заказ на сумму:</span>
              <span class="cart-header__bottom-checkout-total">2400 ₸</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</Transition>

</template>
