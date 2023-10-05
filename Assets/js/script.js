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
  startTestButton.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah tindakan default dari tautan

    // Sembunyikan section "home"
    homeSection.style.display = "none";

    // Tampilkan section survei
    surveySection.style.display = "block";
  });
});

// Ambil Form Test
const forms = document.querySelectorAll(".form-test");

// Add a change event listener to each radio button in the forms
forms.forEach((form, index) => {
  const radioButtons = form.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton, radioIndex) => {
    radioButton.addEventListener("change", () => {
      if (index < forms.length - 1) {
        const nextForm = forms[index + 1];
        const rect = nextForm.getBoundingClientRect();

        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const centerY = window.scrollY + windowHeight / 2;

        const scrollToY =
          rect.top + window.scrollY - windowHeight / 2 + rect.height / 2;

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
  var solusi1 = `
  <p>
  Ini adalah kondisi di mana seseorang merasa relatif tenang, tidak terlalu cemas, dan tidak terlalu terbebani oleh tuntutan dan tekanan sehari-hari. 
  Tingkat stres yang rendah biasanya dianggap sebagai tanda kesejahteraan mental dan fisik yang baik.
  </p>
  `;
  var solusi2 = `
  <p>
  Stres sedang adalah tingkat stres yang masih dalam kisaran normal dalam kehidupan sehari-hari. Ini mungkin terkait dengan tuntutan pekerjaan, masalah pribadi, atau peristiwa kehidupan, tetapi masih bisa dikelola tanpa dampak serius pada kesejahteraan. Cara mengatasinya termasuk berbicara dengan seseorang, berolahraga, relaksasi, menjaga tidur yang baik, dan mengatur waktu dengan bijak. Jika stres sedang terus berlanjut, pertimbangkan untuk mencari bantuan profesional.
  </p>
  `;
  var solusi3 = `
  <p>
  tingkat stres yang sangat tinggi atau berlebihan yang dirasakan oleh seseorang dalam kehidupan sehari-hari. Ini adalah kondisi di mana seseorang merasa sangat terbebani, cemas, dan tertekan oleh berbagai tuntutan, tekanan, atau peristiwa dalam hidup mereka. Tingkat stres yang sangat tinggi dapat berdampak negatif pada kesejahteraan mental dan fisik seseorang.
  High perceived stress dapat memiliki dampak serius pada kesehatan mental dan fisik seseorang. Oleh karena itu, penting untuk mengatasi stres ini dengan serius. Beberapa cara untuk mengelola high perceived stress termasuk manajemen stres, olahraga teratur, meditasi, berkonsultasi dengan seorang profesional kesehatan mental, dan mencari dukungan dari teman atau keluarga.
  </p>
  `;
  // Penyesuaian Nilai
  if (tampungNilai.length < 10) {
    alert("Silahkan Isi Seluruh Jawaban!");
  } else if (total > 0 && total < 14) {
    submitButton.addEventListener("click", function () {
      modalContent.innerHTML = `Level Stress Anda : Low Stress
      ${solusi1}`;
      // modalContent.innerHTML = `${solusi1}`;
      modal.style.display = "block";
    });
  } else if (total > 14 && total < 27) {
    submitButton.addEventListener("click", function () {
      modalContent.innerHTML = `Level Stress Anda : Moderate Stress 
      ${solusi2}`;
      modal.style.display = "block";
    });
  } else if (total > 27 && total < 41) {
    submitButton.addEventListener("click", function () {
      modalContent.innerHTML = `Level Stress Anda : High Preceived Stress
      ${solusi3}`;
      modal.style.display = "block";
    });
  }
  closeButton.addEventListener("click", function () {
    window.location.replace(
      "https://kampus-merdeka-software-engineering.github.io/FE-Jayapura-25/CheckUp.html"
    );
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
var btn = document.getElementById("buttonSubmit");
var rating = document.getElementsByClassName("rating");
var nama = document.getElementById("nama");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");

btn.addEventListener("click", sendData);

function sendData() {
  fetch("https://nodejs-production-2725.up.railway.app/post", {
    method: "POST",
    body: JSON.stringify({
      rating: rating.value,
      nama: nama.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .catch(function (error) {
      alert(error);
    });
}

$.getJSON(
  "https://nodejs-production-2725.up.railway.app/testimoni",
  function (data) {
    let item = data.data;
    let currentIndex = 0;

    function showNextItem() {
      if (currentIndex < item.length) {
        let currentItem = item[currentIndex];
        $("#carousel").html(`
      <br>
        <h1 style="font-size:48px; font-weight:540">"${currentItem.nama.toUpperCase()}"</h1>
        <br>
        <p style="font-size:24px;">${currentItem.message}</p>
      `);
        currentIndex++;
      } else {
        // Memulai dari Awal
        clearInterval(interval);
      }
    }
    // Memanggil showNextItem() setiap 3 detik
    let interval = setInterval(showNextItem, 3000);
  }
);
