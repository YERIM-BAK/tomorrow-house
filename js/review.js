const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button'
)
console.log(reviewLikeButtonList)

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
const checkIcon = '<i class="ic-check" aria-hidden></i>'

function toggleReviewLikeButton() {
  // 1. btn의 클래스: btn-primary <-> btn-outlined
  // 2. 텍스트 변경: 도움됨 <-> 도움이 돼요
  // 3. count: N명에게 도움이 되었습니다.

  const isLiked = this.classList.contains('btn-primary')
  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  if (isLiked) {
    // 비활성화
    this.innerHTML = NOT_HELPFUL
  } else {
    // 활성화
    const checkIcon = document.createElement('i')
    checkIcon.classList.add('ic-check')
    this.innerHTML = HELPFUL
    this.prepend(checkIcon)
  }

  if (textElement) {
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',', ''))

    let newCount = count
    if (isLiked) {
      newCount = newCount - 1
      if (newCount === 0) {
        reviewCardFooter.removeChild(textElement)
      } else {
        countSpan.innerHTML = newCount.toLocaleString()
      }
      countSpan.innerHTML = newCount.toLocaleString()
    } else {
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }
  } else {
    if (!isLiked) {
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이 되었습니다.'
      reviewCardFooter.appendChild(newTextElement)
    }
  }

  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeButtonList.forEach((button) => {
  button.addEventListener('click', toggleReviewLikeButton)
})
