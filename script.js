const WEATHER_API_KEY = "e0c6847707a65d7b3ca56a3ccc8d3ae5";
const LAST_UPDATED_DATE = "March 1, 2026";

/**
 * Array of temple objects containing all temple information
 * Each temple includes id, name, location, timing, description, history,
 * best visiting time, map link, images, and nearby hotels
 */
const temples = [
  {
    id: "jwala-ji",
    name: "Jwala Ji Temple",
    location: "Kangra",
    timing: "5:00 AM to 9:00 PM",
    short: "A major Shakti Peeth known for eternal flame worship.",
    history: "Jwala Ji is a sacred Shakti site where natural flames are worshipped as the goddess.",
    bestTime: "March to June, September to November",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jwala+Ji+Temple+Kangra",
    image: "jwala.jpeg",
    gallery: ["jwala.jpeg", "home.jpeg", "ok.jpg"],
    hotels: [
      { name: "Hotel Shakti View", phone: "+919418012345" },
      { name: "Temple Stay Inn", phone: "+919418067890" }
    ]
  },
  {
    id: "chamunda-devi",
    name: "Chamunda Devi Temple",
    location: "Dharamshala",
    timing: "6:00 AM to 8:00 PM",
    short: "Hill temple dedicated to Maa Chamunda near Baner river.",
    history: "An important shrine visited for blessings of protection and strength.",
    bestTime: "October to March",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Chamunda+Devi+Temple+Dharamshala",
    image: "chamunda.jpg",
    gallery: ["chamunda.jpg", "home.jpeg", "hii.jpg"],
    hotels: [
      { name: "Baner Retreat", phone: "+919805123456" },
      { name: "Chamunda Residency", phone: "+919805765432" }
    ]
  },
  {
    id: "baijnath-shiv",
    name: "Baijnath Shiv Temple",
    location: "Kangra",
    timing: "6:00 AM to 9:00 PM",
    short: "Ancient Shiva temple with classic Nagara architecture.",
    history: "This historic temple is one of Himachal's most respected Shiva shrines.",
    bestTime: "March to June, September to December",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Baijnath+Shiv+Temple+Kangra",
    image: "download.jpg",
    gallery: ["download.jpg", "ok.jpg", "rena.png"],
    hotels: [
      { name: "Kailash Guest House", phone: "+919418998877" },
      { name: "Baijnath Comfort Stay", phone: "+919418445566" }
    ]
  },
  {
    id: "brajeshwari",
    name: "Brajeshwari Devi Temple",
    location: "Kangra",
    timing: "5:30 AM to 9:00 PM",
    short: "Important Shakti temple known for strong local devotion.",
    history: "Brajeshwari is one of the revered goddess temples in the Kangra valley.",
    bestTime: "October to March",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Brajeshwari+Devi+Temple+Kangra",
    image: "baroh.jpg",
    gallery: ["baroh.jpg", "home.jpeg", "krisha.jpeg"],
    hotels: [
      { name: "Kangra Plaza Hotel", phone: "+919816001122" },
      { name: "Shivam Palace", phone: "+919816334455" }
    ]
  },
  {
    id: "naina-devi",
    name: "Naina Devi Temple",
    location: "Bilaspur",
    timing: "5:00 AM to 10:00 PM",
    short: "Famous hilltop Shakti shrine with panoramic views.",
    history: "One of north India's key pilgrimage points and a major Navratri destination.",
    bestTime: "March to April, September to November",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Naina+Devi+Temple+Bilaspur+Himachal",
    image: "home.jpeg",
    gallery: ["home.jpeg", "ok.jpg", "hii.jpg"],
    hotels: [
      { name: "Hill Crown Bilaspur", phone: "+919916223344" },
      { name: "Navratri Lodge", phone: "+919916778899" }
    ]
  },
  {
    id: "chintpurni",
    name: "Chintpurni Temple",
    location: "Una",
    timing: "4:00 AM to 11:00 PM",
    short: "Popular goddess temple for fulfillment of wishes.",
    history: "Chintpurni draws pilgrims year-round, especially during Navratri.",
    bestTime: "February to April, September to November",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Chintpurni+Temple+Una",
    image: "radha.jpeg",
    gallery: ["radha.jpeg", "jwala.jpeg", "chamunda.jpg"],
    hotels: [
      { name: "Mata Vaishno Lodge", phone: "+919888112233" },
      { name: "Una Pilgrim Stay", phone: "+919888445566" }
    ]
  },
  {
    id: "hadimba",
    name: "Hadimba Devi Temple",
    location: "Manali",
    timing: "8:00 AM to 6:00 PM",
    short: "Wooden pagoda style temple surrounded by cedar forest.",
    history: "A unique temple architecture in Manali dedicated to Hadimba Devi.",
    bestTime: "March to June, December for snow season",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Hadimba+Devi+Temple+Manali",
    image: "hii.jpg",
    gallery: ["hii.jpg", "home.jpeg", "ok.jpg"],
    hotels: [
      { name: "Manali Cedar Inn", phone: "+919999123456" },
      { name: "Mall Road Suites", phone: "+919999654321" }
    ]
  },
  {
    id: "bijli-mahadev",
    name: "Bijli Mahadev Temple",
    location: "Kullu",
    timing: "6:00 AM to 8:00 PM",
    short: "Scenic hilltop Shiva temple accessed by a trekking route.",
    history: "Known for spiritual significance and wide valley views around Kullu.",
    bestTime: "April to June, September to November",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bijli+Mahadev+Temple+Kullu",
    image: "ok.jpg",
    gallery: ["ok.jpg", "home.jpeg", "rena.png"],
    hotels: [
      { name: "Kullu Valley Inn", phone: "+919777112233" },
      { name: "Mahadev Trek Stay", phone: "+919777334455" }
    ]
  },
  {
    id: "lakshmi-narayan",
    name: "Lakshmi Narayan Temple",
    location: "Chamba",
    timing: "6:00 AM to 8:00 PM",
    short: "Historic temple complex in Chamba with stone architecture.",
    history: "An old royal-era complex preserving Himachali temple heritage.",
    bestTime: "March to June, September to November",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Lakshmi+Narayan+Temple+Chamba",
    image: "krisha.jpeg",
    gallery: ["krisha.jpeg", "home.jpeg", "baroh.jpeg"],
    hotels: [
      { name: "Chamba Heritage Lodge", phone: "+919666112233" },
      { name: "Ravi River Residency", phone: "+919666556677" }
    ]
  },
  {
    id: "bhimakali",
    name: "Bhimakali Temple",
    location: "Sarahan",
    timing: "7:00 AM to 6:00 PM",
    short: "Hill temple blending wooden and stone Himalayan style.",
    history: "Bhimakali in Sarahan is known for architecture and regional legends.",
    bestTime: "April to June, September to October",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bhimakali+Temple+Sarahan",
    image: "baroh.jpeg",
    gallery: ["baroh.jpeg", "hii.jpg", "ok.jpg"],
    hotels: [
      { name: "Sarahan Viewpoint Hotel", phone: "+919555112233" },
      { name: "Temple Peak Guest House", phone: "+919555778899" }
    ]
  }
];

/**
 * Renders temple cards to the specified target element
 * @param {Array} list - Array of temple objects to display
 * @param {string} targetId - ID of the HTML element to render temples in
 */
function renderTemples(list, targetId = "templeGrid") {
  const templeGrid = document.getElementById(targetId);
  if (!templeGrid) return;

  templeGrid.innerHTML = "";
  if (!list.length) {
    templeGrid.innerHTML = "<p>No temples found for this search.</p>";
    return;
  }

  list.forEach((temple) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${temple.image}" alt="${temple.name}">
      <div class="card-body">
        <h3>${temple.name}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Timing:</strong> ${temple.timing}</p>
        <p class="card-short">${temple.short}</p>
        <div class="card-actions">
          <a href="temple-detail.html?id=${encodeURIComponent(temple.id)}">View Details</a>
          <a href="${temple.mapLink}" target="_blank" rel="noopener noreferrer">Map</a>
        </div>
      </div>
    `;
    templeGrid.appendChild(card);
  });
}

/**
 * Initializes the temple listing page with search functionality
 */
function initListingPage() {
  const searchTempleInput = document.getElementById("searchTemple");
  const templeGrid = document.getElementById("templeGrid");
  if (!searchTempleInput || !templeGrid) return;

  const searchTemple = () => {
    const query = searchTempleInput.value.trim().toLowerCase();
    const filtered = temples.filter((temple) => {
      const target = `${temple.name} ${temple.location} ${temple.short}`.toLowerCase();
      return target.includes(query);
    });
    renderTemples(filtered);
  };

  searchTempleInput.addEventListener("input", searchTemple);
  renderTemples(temples);
}

function initHomePage() {
  const homeTempleGrid = document.getElementById("homeTempleGrid");
  if (!homeTempleGrid) return;
  renderTemples(temples.slice(0, 3), "homeTempleGrid");
}

function initDetailPage() {
  const detailEmpty = document.getElementById("detailEmpty");
  const detailContent = document.getElementById("detailContent");
  const detailName = document.getElementById("detailName");
  const detailLocation = document.getElementById("detailLocation");
  const detailTiming = document.getElementById("detailTiming");
  const detailBestTime = document.getElementById("detailBestTime");
  const detailHistory = document.getElementById("detailHistory");
  const detailUpdated = document.getElementById("detailUpdated");
  const detailGallery = document.getElementById("detailGallery");
  const detailMap = document.getElementById("detailMap");
  const hotelList = document.getElementById("hotelList");

  if (
    !detailEmpty || !detailContent || !detailName || !detailLocation || !detailTiming ||
    !detailBestTime || !detailHistory || !detailUpdated || !detailGallery || !detailMap || !hotelList
  ) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const templeId = params.get("id");
  const temple = temples.find((item) => item.id === templeId);

  if (!temple) {
    detailContent.classList.add("hidden");
    detailEmpty.classList.remove("hidden");
    return;
  }

  detailEmpty.classList.add("hidden");
  detailContent.classList.remove("hidden");
  detailName.textContent = temple.name;
  detailLocation.textContent = `Location: ${temple.location}`;
  detailTiming.textContent = `Timing: ${temple.timing}`;
  detailBestTime.textContent = `Best time to visit: ${temple.bestTime}`;
  detailHistory.textContent = `History: ${temple.history}`;
  detailUpdated.textContent = `Last updated: ${LAST_UPDATED_DATE}`;
  detailMap.href = temple.mapLink;
  detailGallery.innerHTML = temple.gallery
    .map((image) => `<img src="${image}" alt="${temple.name} view">`)
    .join("");
  hotelList.innerHTML = temple.hotels
    .map((hotel) => `<li class="hotel-item"><span>${hotel.name}</span><a href="tel:${hotel.phone}">Call Hotel</a></li>`)
    .join("");
}

/**
 * Fetches weather data from OpenWeatherMap API
 * @param {HTMLInputElement} cityInput - Input element containing city name
 * @param {HTMLElement} weatherResult - Element to display weather results
 */
async function getWeather(cityInput, weatherResult) {
  const city = cityInput.value.trim();
  if (!city) {
    weatherResult.textContent = "Please enter a city name.";
    return;
  }

  weatherResult.textContent = "Checking weather...";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const data = await response.json();

    if (!response.ok || Number(data.cod) !== 200) {
      weatherResult.textContent = "City not found. Try another city name.";
      return;
    }

    weatherResult.textContent = `${data.name}: ${Math.round(data.main.temp)} C, ${data.weather[0].main}, humidity ${data.main.humidity}%`;
  } catch (error) {
    weatherResult.textContent = "Unable to fetch weather right now. Please try again.";
  }
}

function initWeather() {
  const cityInput = document.getElementById("city");
  const weatherResult = document.getElementById("weatherResult");
  const weatherBtn = document.getElementById("weatherBtn");
  if (!cityInput || !weatherResult || !weatherBtn) return;

  weatherBtn.addEventListener("click", () => getWeather(cityInput, weatherResult));
  cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      getWeather(cityInput, weatherResult);
    }
  });
}

initWeather();
initHomePage();
initListingPage();
initDetailPage();
