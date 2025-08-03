const universities = [
    {
        name: "Central Applications Office (CAO)",
        location: "KZN Universities",
        deadline: " 1 March 2025.",
        programs:["UKZN, DUT, MUT, UNIZULU, etc."],
        applicationFee:"R250(SA Citizens),R300(international)",
        logo: "images1/cao.logo.png",
        link: "https://www.cao.ie/",
    },
    
    {
      name: "University of Pretoria (UP)",
      location: "Pretoria, Gauteng",
      deadline: "30 September 2025",
      programs: ["Engineering", "IT", "Law"],
      applicationFee: "R300 (R200 for PGDipDent; fee waived if household income ≤ R150,000)",
      logo: "images1/up.logo.png",
      link: "https://www.up.ac.za"
    },
    {
      name: "University of Johannesburg (UJ)",
      location: "Johannesburg, Gauteng",
      deadline: "30 September 2025",
      programs: ["Accounting", "IT", "Education"],
      applicationFee:" R150 (non-refundable)",
      logo: "images1/Uj.logo.png",
      link: "https://www.uj.ac.za"
    },
    {
      name: "University of Cape Town (UCT)",
      location: "Cape Town, Western Cape",
      deadline: "31 August 2025",
      programs: ["Science", "Commerce", "Humanities"],
      applicationFee: "R150 (undergraduate), varies for postgraduate",
      logo: "images1/uct.logo.png",
      link: "https://www.uct.ac.za"
    },
    {
        name: "University of the Witwatersrand (Wits)",
        location: "Johannesburg, Gauteng",
        programs: [
          "Commerce, Law and Management",
          "Engineering and the Built Environment",
          "Health Sciences",
          "Humanities",
          "Science"
        ],
        deadline: "Varies by program - check wits.ac.za",
        applicationFee: "R100 (non-refundable)",
        logo: "images1/wits.png",  
        link: "https://www.wits.ac.za"
      },
    {
      name: "University of the Free State (UFS)",
      location: "Bloemfontein, Free State",
      deadline: "30 September 2025",
      programs: ["Law", "Agriculture", "Education"],
      applicationFee: "R150 (undergraduate), varies for postgraduate",
      logo: "images1/ufs.logo.png",
      link: "https://www.ufs.ac.za"
    },
    {
        name: "Vaal University of Technology (VUT)",
        location: "Vanderbijlpark, Gauteng",
        programs: [
          "Applied and Computer Sciences",
          "Engineering and Technology",
          "Human Sciences",
          "Management Sciences"
        ],
        deadline: "Check vut.ac.za for program deadlines",
        applicationFee:" R150",
        logo: "images1/VUT.LOGO.jpeg", 
        link: "https://vut.ac.za"
      },
    {
      name: "University of Mpumalanga (UMP)",
      location: "Mbombela, Mpumalanga",
      deadline: "30 September 2025",
      programs: ["Agriculture", "Education", "Hospitality"],
      applicationFee: "Usually free or very low fee (check site)",
      logo: "images1/UMP.logo.png",
      link: "https://www.ump.ac.za"
    },
    {
      name: "Tshwane University of Technology (TUT)",
      location: "Pretoria, Gauteng",
      deadline: "30 September 2025",
      programs: ["IT", "Engineering", "Design"],
      applicationFee: "R240",
      logo: "images1/tut.logo.png",
      link: "https://www.tut.ac.za"
    },
    {
        name: "University of South Africa (UNISA)",
        location:" Pretoria, Gauteng" ,
        deadline: "30 September 2025",
        programs: ["Management Sciences,Education,Science, Engineering & Technology,LAW"],
        applicationFee: "Free",
        logo: "images1/UNISA.logo.png",
        link: "https://www.unisa.ac.za"
      },
      {
        name: "Stellenbosch University (SU)",
        location: " Western Cape, Cape Town ",
        deadline: "30 September 2025",
        programs: ["Medicine & Health Sciences,Business School,Military Science,Medicine "],
        applicationFee: "R100(SA Citizens),R400(international)",
        logo: "images1/stellen.logo.jpeg",
        link: "https://www.sun.ac.za"
      },
      {
        name: "North‑West University (NWU)",
        location: "Potchefstroom / Mahikeng / Vanderbijlpark, NW Province & Gauteng",
        deadline: "30 Sept 2025 (General UG), 31 July 2025 (Health Sciences)",
        programs: ["Engineering", "Health Sciences", "Economics & Management", "Education", "Law", "Humanities", "Natural & Agri Sciences", "Theology"],
        applicationFee: "R150",
        logo: "images1/NWU.logo.png",
        link: "https://www.nwu.ac.za"
      },
      {
        name: "Nelson Mandela University (NMMU)",
        location: "Gqeberha (Metro Campuses) & George, Eastern Cape",
        programs: [
          "Business & Economic Sciences",
          "Education",
          "Engineering & Technology",
          "Health Sciences",
          "Humanities",
          "Law",
          "Science"
        ],
        deadline: "30 Sept 2025 (Late)", 
        applicationFee: "free",
        logo: "images1/NMMU.logo.png",
        link: "https://www.mandela.ac.za"
      },
      {
        name: "Walter Sisulu University (WSU)",
        location: "Mthatha / East London / Butterworth / Komani, Eastern Cape",
        programs: [
          "Engineering, Built Environment & IT",
          "Medicine & Health Sciences",
          "Education",
          "Law & Social Sciences",
          "Management & Financial Sciences",
          "Natural & Agri Sciences"
        ],
        deadline: "30 Sept 2025 (Health) / 31 Oct 2025 (Other)",
        applicationFee:"free",
        logo: "images1/WSU.logo.png",
        link: "https://www.wsu.ac.za"
      },
      {
        name: "Sol Plaatje University (SPU)",
        location: "Kimberley, Northern Cape",
        deadline: "30 Sept 2025",
        programs: [
          "Economic & Management Sciences",
          "Education",
          "Humanities",
          "Natural & Applied Sciences (incl. Data Science, Environmental Management)"
        ],
        applicationFee:"R100(non-refundable)",
        logo: "images1/SPU.logo.png",
        link: "https://www.spu.ac.za"
      },
      {
        name: "University of Fort Hare (UFH)",
        location: "Alice / Bhisho / East London, Eastern Cape",
        programs: [
          "Education",
          "Management & Commerce",
          "Law",
          "Social Sciences & Humanities",
          "Science & Agriculture"
        ],
        deadline: "31 Oct 2025 (Undergrad), 29 Nov 2025 (Postgrad)",
        applicationFee:"R120",
        logo: "images1/UFH.logo.png",
        link: "https://www.ufh.ac.za"
      },
      {
        name: "University of the Western Cape (UWC)",
        location: "Bellville, Cape Town, Western Cape",
        programs: [
          "Arts & Humanities",
          "Community & Health Sciences",
          "Dentistry",
          "Economic & Management Sciences",
          "Education",
          "Law",
          "Natural Sciences"
        ],
        deadline: "30 Sept 2025 (BDS/Oral Health closes 31 Aug)",
        applicationFee:"free",
        logo: "images1/UWC.logo.png",
        link: "https://www.uwc.ac.za"
      },
      {
        name: "Central University of Technology (CUT)",
        location: "Bloemfontein & Welkom, Free State",
        programs: [
          "Engineering, Built Environment & IT",
          "Health & Environmental Sciences",
          "Management Sciences",
          "Humanities"
        ],
        deadline: "30 Sept 2025",
        applicationFee:"free",
        logo: "images1/CUT.logo.png",
        link: "https://www.cut.ac.za"
      },
      {
        name: "Rhodes University (RU)",
        location: "Makhanda (Grahamstown), Eastern Cape",
        programs: ["Commerce", "Education", "Humanities", "Law", "Pharmacy", "Science"],
        deadline: "30 Sept 2025",
        applicationFee:"100",
        logo: "images1/RHODES.logo.png",
        link: "https://www.ru.ac.za"
      },
      {
        name: "University of Limpopo (UL)",
        location: "Mankweng (Turfloop), Limpopo",
        programs: [
          "Health Sciences",
          "Humanities",
          "Science & Agriculture",
          "Management & Law"
        ],
        deadline: "30 Sept 2025 (Health); 30 Oct 2025 (Other UG); PG – 30 Sept",
        applicationFee: "R200(South African students),R750(international student)",
        logo: "images1/ul.logo.png",
        link: "https://www.ul.ac.za"
      },
      
  ];
  document.addEventListener("DOMContentLoaded", () => {
    const universityList = document.getElementById("universityList");
    const searchInput = document.getElementById("searchInput");
  
    function renderUniversities(filter = "") {
      universityList.innerHTML = "";
  
      const filtered = universities.filter(uni =>
        uni.name.toLowerCase().includes(filter.toLowerCase())
      );
  
      filtered.forEach(uni => {
        const card = document.createElement("div");
        card.className = "bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition";
  
        card.innerHTML = `
  <img src="${uni.logo}" alt="${uni.name}" class="w-24 h-24 object-contain mx-auto mb-4"/>
  <h3 class="text-xl font-bold text-center">${uni.name}</h3>
  <p class="text-sm text-center mb-2">${uni.location}</p>
  <p class="text-sm text-center text-yellow-400">Deadline: ${uni.deadline}</p>
  <ul class="text-sm mt-2 list-disc list-inside">
    ${uni.programs.map(p => `<li>${p}</li>`).join("")}
  </ul>
  <p class="text-sm text-center mt-2 font-semibold">Application Fee: ${uni.applicationFee ? uni.applicationFee : "N/A"}</p>
  <div class="text-center mt-4">
    <a href="${uni.link}" target="_blank" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
      Apply Now
    </a>
  </div>
`;
  
        universityList.appendChild(card);
      });
    }
  
    searchInput.addEventListener("input", e => {
      renderUniversities(e.target.value);
    });
  
    renderUniversities();
  });
  