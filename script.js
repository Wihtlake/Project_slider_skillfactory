document.addEventListener("DOMContentLoaded", function() {
  const titles = document.querySelectorAll('.slider__title');
  const content = document.querySelector('.slider__content');
  const indicators = document.querySelectorAll('.slider__indicator');
  const prevButton = document.querySelector('.slider__button--prev');
  const nextButton = document.querySelector('.slider__button--next');

  const slides = [
      {
          title: 'Rostov-on-Don, Admiral',
          content: {
              heading: 'Completed projects',
              paragraph: 'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
              details: [
                  { label: 'City:', value: 'Rostov-on-Don LCD admiral' },
                  { label: 'apartment area:', value: '81 m2' },
                  { label: 'Repair time:', value: '3.5 months' },
                  { label: 'Repair Cost:', value: 'Upon request' }
              ],
              imageSrc: 'img/image_2.1.png'
          }
      },
      {
          title: 'Sochi Thieves',
          content: {
              heading: 'Another Project',
              paragraph: 'Description for the second project.',
              details: [
                  { label: 'City:', value: 'Sochi' },
                  { label: 'apartment area:', value: 'XX m2' },
                  { label: 'Repair time:', value: 'X months' },
                  { label: 'Repair Cost:', value: 'Contact us for details' }
              ],
              imageSrc: 'img/image_2.png'
          }
      },
      {
          title: 'Rostov-on-Don Patriotic',
          content: {
              heading: 'Patriotic Project',
              paragraph: 'Description for the third project.',
              details: [
                  { label: 'City:', value: 'Rostov-on-Don' },
                  { label: 'apartment area:', value: 'YY m2' },
                  { label: 'Repair time:', value: 'Y months' },
                  { label: 'Repair Cost:', value: 'Contact us for details' }
              ],
              imageSrc: 'img/image_3.png'
          }
      }
  ];

  let currentIndex = 0;

  function showSlide(index) {
      const slide = slides[index];

      titles.forEach((title, i) => {
          title.classList.toggle('slider__title-active', i === index);
      });

      content.innerHTML = `
          <div class="slider__text">
              <h2 class="slider__heading">${slide.content.heading}</h2>
              <p class="slider__paragraph">${slide.content.paragraph}</p>
              <div class="slider__details">
                  ${slide.content.details.map(detail => `
                      <div class="slider__detail">
                          <h3 class="slider__detail--h3">${detail.label}</h3>
                          <p class="slider__detail--p">${detail.value}</p>
                      </div>
                  `).join('')}
              </div>
          </div>
          <div class="slider__image"><img src="${slide.content.imageSrc}" alt=""></div>
      `;
      
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('slider__indicator--active', i === index);
        indicator.addEventListener('click', () => showSlide(i)); // Добавляем обработчик события для индикатора
      });
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  titles.forEach((title, index) => {
      title.addEventListener('click', () => showSlide(index));
  });

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Initial display of the first slide
  showSlide(currentIndex);
});
