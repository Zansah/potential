document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const slider = document.getElementById('main-sliding-page');
    const closeBtn = document.getElementById('close-button');

    menuToggle.addEventListener('click', () => {
        slider.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        slider.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const headerTitles = document.querySelectorAll('.header-title');
    
    headerTitles.forEach(title => {
        title.addEventListener('click', () => {
            setActiveHeaderTitle(title);
        });
    });
    
    setActiveHeaderTitle();
});

function setActiveHeaderTitle(activeTitle) {
    const headerTitles = document.querySelectorAll('.header-title');
    headerTitles.forEach(title => {
        if (activeTitle) {
            title.classList.toggle('active', title === activeTitle);
        } else {
            const path = window.location.pathname;
            const page = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
            title.classList.toggle('active', title.id === page);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("searchIcon");
    const searchHeader = document.getElementById("searchHeader");
    const closeSearch = document.getElementById("closeSearch");

    searchIcon.addEventListener("click", function() {
        searchHeader.classList.toggle("hidden");
    });

    closeSearch.addEventListener("click", function() {
        searchHeader.classList.add("hidden");
    });
});

function loadContent(page) {
    const displayBox = document.getElementById("displayBox");
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            displayBox.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            displayBox.innerHTML = '<p>Sorry, an error occurred while loading the content.</p>';
        });
}

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
    const slideInterval = 7000;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, slideInterval);

    document.getElementById('close-text').addEventListener('click', function() {
        document.getElementById('main-sliding-page').classList.add('hidden');
    });

    document.getElementById("main-sliding-page").style.display = "block";
});

document.getElementById('search-button').addEventListener('click', function() {
    document.getElementById('second-sliding-page').classList.add('active');
});

document.getElementById('second-close-button').addEventListener('click', function() {
    document.getElementById('second-sliding-page').classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    const postPage = document.getElementById('post-page');

    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const contentUrl = this.getAttribute('data-content');

            fetch(contentUrl)
                .then(response => response.text())
                .then(data => {
                    postPage.innerHTML = data;
                })
                .catch(error => console.error('Error loading content:', error));
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const logoBox = document.querySelector('.fa-bars');
    const slidingPage = document.getElementById('third-sliding-page');
    const closeButton = document.getElementById('third-close-button');

    logoBox.addEventListener('click', function() {
        slidingPage.classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        slidingPage.classList.remove('active');
    });

    document.addEventListener('click', function(event) {
        if (!slidingPage.contains(event.target) && !logoBox.contains(event.target)) {
            slidingPage.classList.remove('active');
        }
    });
});


function toggleTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    buttons.forEach(function(button) {
        button.style.display = 'flex';
    });

    if (tabId) {
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`.tab-button[onclick="toggleTab('${tabId}')"]`).style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.giant-card-container');
    const dots = document.querySelectorAll('.giant-card-dot');
  
    cardContainer.addEventListener('scroll', () => {
      const cardWidth = cardContainer.offsetWidth * 0.8 + 20; 
      const scrollPosition = cardContainer.scrollLeft;
      const activeIndex = Math.round(scrollPosition / cardWidth);
  
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    });
  
    const initialCardWidth = cardContainer.offsetWidth * 0.8 + 20;
    const initialIndex = Math.round(cardContainer.scrollLeft / initialCardWidth);
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === initialIndex);
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop === 0) {
            header.style.top = '0';
        } else if (scrollTop > lastScrollTop) {
            header.style.top = '-70px'; 
        } else {
            header.style.top = '0';
        }

        lastScrollTop = scrollTop;
    });
});

// New Giant Card display

function toggleBox() {
    const slideBox = document.getElementById('slideBox');
    if (slideBox.style.maxHeight) {
      slideBox.style.maxHeight = null;
    } else {
      slideBox.style.maxHeight = slideBox.scrollHeight + "px";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const discoverElement = document.getElementById("discover");
    setTimeout(() => {
      discoverElement.style.opacity = '1';
      discoverElement.style.transform = 'translateX(-50%) translateY(0)';
    }, 1000); 
  
    setInterval(() => {
      if (discoverElement.style.opacity === '1') {
        discoverElement.style.opacity = '0';
        discoverElement.style.transform = 'translateX(-50%) translateY(20px)';
      } else {
        discoverElement.style.opacity = '1';
        discoverElement.style.transform = 'translateX(-50%) translateY(0)';
      }
    }, 3000);
  
    const blackBlockElement = document.getElementById("blackBlock");
    setTimeout(() => {
      blackBlockElement.style.opacity = '1';
    }, 500); 
  
    const bigTextElement = document.getElementById("bigText");
    setTimeout(() => {
      bigTextElement.style.opacity = '1';
      bigTextElement.style.animationPlayState = 'running';
    }, 200); 
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const cancelButton = document.getElementById('cancel-button');
    const mainSlidingPage = document.getElementById('main-sliding-page');
    const searchButton = document.getElementById('searchIcon');

    cancelButton.addEventListener('click', function () {
        mainSlidingPage.style.display = 'none';
    });

    searchButton.addEventListener('click', function () {
        mainSlidingPage.style.display = 'block';
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const projectSlides = document.querySelectorAll(".project-slide");
    const projectDots = document.querySelectorAll(".project-dot");
    let currentProjectSlide = 0;
    const slideInterval = 7000;

    function showProjectSlide(index) {
        if (index >= projectSlides.length) {
            currentProjectSlide = 0;
        } else if (index < 0) {
            currentProjectSlide = projectSlides.length - 1;
        } else {
            currentProjectSlide = index;
        }
        const offset = -currentProjectSlide * 100;
        document.querySelector(".project-slides").style.transform = `translateX(${offset}%)`;

        projectDots.forEach(dot => dot.classList.remove("active"));
        projectDots[currentProjectSlide].classList.add("active");
    }

    projectDots.forEach((dot, index) => {
        dot.addEventListener("click", () => showProjectSlide(index));
    });

    setInterval(() => {
        showProjectSlide(currentProjectSlide + 1);
    }, slideInterval);
});


  
  