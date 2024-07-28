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

    document.getElementById("close-button").addEventListener("click", () => {
        document.getElementById("main-sliding-page").style.display = "none";
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
    var content = document.getElementById(tabId);
    var isActive = content.classList.contains('active');

    var contents = document.getElementsByClassName('tab-content');
    var buttons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
        buttons[i].classList.remove('active');
    }

    if (!isActive) {
        content.classList.add('active');
        document.querySelector(`.tab-button[onclick="toggleTab('${tabId}')"]`).classList.add('active');
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
  

  






