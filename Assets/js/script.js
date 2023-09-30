let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen-elemen yang akan diubah tampilannya
  const homeSection = document.querySelector(".home");
  const surveySection = document.querySelector("section:not(.home)");

  // Ambil tombol "Start Test"
  const startTestButton = document.getElementById("start-test");

  // Tambahkan event listener untuk tombol "Start Test"
  startTestButton.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah tindakan default dari tautan

    // Sembunyikan section "home"
    homeSection.style.display = "none";

    // Tampilkan section survei
    surveySection.style.display = "block";
  });
});

// Get all the form elements with the class "form-test"
const forms = document.querySelectorAll(".form-test");

// Add a change event listener to each radio button in the forms
forms.forEach((form, index) => {
  const radioButtons = form.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton, radioIndex) => {
    radioButton.addEventListener("change", () => {
      // Get the position of the next form
      if (index < forms.length - 1) {
        const nextForm = forms[index + 1];
        const rect = nextForm.getBoundingClientRect();

        // Calculate the center position of the viewport vertically
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const centerY = window.scrollY + windowHeight / 2;

        // Calculate the scroll position to center the next form vertically
        const scrollToY =
          rect.top + window.scrollY - windowHeight / 2 + rect.height / 2;

        // Scroll to the next form with smooth behavior
        window.scrollTo({
          top: scrollToY,
          behavior: "smooth",
        });
      }
    });
  });
});

const carouselSlides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function showSlide(index) {
  carouselSlides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselSlides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 7000); // Ganti slide setiap 3 detik

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);

function ambilNilai() {
  const form = document.getElementById("formTest");
  const modal = document.getElementById("modalHasil");
  const modalContent = document.getElementById("modalContent");
  const closeButton = document.querySelector(".close");
  const submitButton = document.getElementById("submitButton");
  var jawaban = document.getElementsByName("jawaban");
  var tampungNilai = [];

  for (var i = 0; i < jawaban.length; i++) {
    if (jawaban[i].checked) {
      tampungNilai.push(parseInt(jawaban[i].value));
    }
  }
  // Total Nilai Array
  var total = tampungNilai.reduce(function (accu, curr) {
    return accu + curr;
  }, 0);

  // Penyesuaian Nilai
  if (tampungNilai.length < 10) {
    alert("Silahkan Isi Seluruh Jawaban!");
  } else if (total > 0 && total < 14) {
    submitButton.addEventListener("click", function () {
      modalContent.innerHTML = `Level Stress Anda : Low Stress`;
      modal.style.display = "block";
    });
  } else if (total > 14 && total < 27) {
    submitButton.addEventListener("click", function () {
      modalContent.innerHTML = `Level Stress Anda : Moderate Stress`;
      modal.style.display = "block";
    });
  } else if (total > 27 && total < 41) {
    submitButton.addEventListener("click", function () {
      modalContent.innerHTML = `Level Stress Anda : High Preceived Stress`;
      modal.style.display = "block";
    });
  }
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
