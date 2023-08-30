const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
// const orderCtaBookmarkButton = orderCta.children[0]
// const orderCtaBuyButton = orderCta.children[1]

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toogleOrderCtaBookmark() {
  // 1. 버튼 is-active 클래스
  // 2. icon 클래스 변경 => ic-bookmark vs. ic-bookmark-filled
  // 3. 카운트 숫자 값을 변경
  const [icon, countSpan] = this.children // [아이콘, 카운트 span]
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  console.log(count, typeof count)

  let newCount = count

  if (this.classList.contains('is-active')) {
    // NOTE: 활성화가 된 상태이니 -> 비활성화 (ic-bookmark)
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    // NOTE: 비활성화가 된 상태이니 -> 활성화 (ic-bookmark-filled)
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()

  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toogleOrderCtaBookmark)
