const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
	"Somos",
	"BioEntorno",
    "El",
	"Trabajo",
	"en",
	"Armonía",
	"con",
    "el",
    "Ambiente"
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();

class Profile {
    constructor(profile_name, profile_job, profile_description, profile_color) {
      this.profile_name = profile_name;
      this.profile_job = profile_job;
      this.profile_description = profile_description;
      this.profile_color = profile_color;
      this.image = document.querySelector("#avatar").innerHTML;
    }
  
    create() {
      let profile_block = document.createElement("div");
      profile_block.setAttribute("class", "profile-card");
  
      let profile_card_image = document.createElement("div");
      profile_card_image.setAttribute("class", "profile-card-image");
      profile_card_image.innerHTML = this.image;
      profile_card_image.style.backgroundColor = this.profile_color;
  
      let profile_card_desc = document.createElement("div");
      profile_card_desc.setAttribute("class", "profile-card-description");
  
      let profile_card_elements = document.createElement("div");
      profile_card_elements.setAttribute("class", "profile-card-description-elements");
  
      let profileTitle = document.createElement("h2");
      profileTitle.innerHTML = this.profile_name;
      let profileJob = document.createElement("label");
      profileJob.innerHTML = this.profile_job;
      let profileDesc = document.createElement("p");
      profileDesc.innerHTML = this.profile_description;
  
      profile_card_elements.appendChild(profileTitle);
      profile_card_elements.appendChild(profileJob);
      profile_card_elements.appendChild(document.createElement("hr"));
      profile_card_elements.appendChild(profileDesc);
  
      profile_card_desc.appendChild(profile_card_elements);
  
      profile_block.appendChild(profile_card_image);
      profile_block.appendChild(profile_card_desc);
  
      this.addElementToMain(profile_block);
    }
  
    addElementToMain(element) {
      document.querySelector("#main").appendChild(element);
    }
  
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
  
  var p1 = new Profile(
    "Silvana Mojica",
    "Presidenta Ejecutiva",
    "Psicóloga y Magister en Comunicación de la Pontificia Universidad Javeriana <br>Especialista en Dirección de Mercadeo Estratégico del Colegio de Estudios Superiores en Administración – CESA <br> Trece años de experiencia en gerencia de organizaciones ambientales.",
    "var(--main-white-color)"
  );
  p1.create();
  
  var p2 = new Profile(
    "Mónica Suárez",
    "Directora",
    "Ing. Química y de Petróleos <br> Especialista en Gerencia de Empresas de la Universidad de América <br> Magíster en Gerencia de Proyectos del Instituto Europeo de Posgrado <br> Ocho años de experiencia en dirección, seguimiento y evaluación de Sistemas de Gestión Integral y Planes Postconsumo.",
    "var(--main-white-color)"
  );
  p2.create();
  
  var p3 = new Profile(
    "Adriana Miranda",
    "Coordinadora Nacional",
    "Comunicadora Social de la Universidad Francisco de Paula Santander <br> Especialista en Gestión Ambiental de la Universidad Área Andina <br> Nueve años de experiencia en coordinación de planes de gestión Ambiental a nivel nacional. ",
    "var(--main-white-color)"
  );
  p3.create();

  var p4 = new Profile(
    "Angie Rodríguez",
    "Coordinadora Regional Zona Norte",
    "Ingeniera Ambiental de la Universidad Francisco de Paula Santander <br> Tres años de experiencia en Coordinación de Planes Postconsumo",
    "var(--main-white-color)"
  );
  p4.create();

  var p5 = new Profile(
    "Yoselin Londoño",
    "Coordinadora Regional Zona Occidente",
    "Ingeniera Ambiental de la Universidad Colegio mayor de Antioquia <br> Un año de experiencia en Coordinación de Planes Postconsumo",
    "var(--main-white-color)"
  );
  p5.create();

  var p6 = new Profile(
    "Lina Sedano",
    "Coordinadora Regional Zona Centro",
    "Ingeniera Ambiental de la Universidad El Bosque <br> Especialista en Seguridad y Salud en el Trabajo de la Universidad Minuto de Dios <br> Dos años de experiencia en coordinación de planes postconsumo.",
    "var(--main-white-color)"
  );
  p6.create();

  var p7 = new Profile(
    "Kilian",
    "Coordinador Comercial",
    "Un año de experiencia en atención al cliente y enlace.",
    "var(--main-white-color)"
  );
  p7.create();

  var p8 = new Profile(
    "Johana Gomez",
    "Coordinadora Administrativa",
    "Administradora de Empresas de la Universidad EAN <br> Veinte años de experiencia en Gestión documental y administrativa.",
    "var(--main-white-color)"
  );
  p8.create();

  $(document).ready(function () {
    var time = 5;
    var $bar, $slider, isPause, tick, percentTime;
  
    $slider = $(".story-container");
    $slider.flickity({
      wrapAround: true
    });
  
    $bar = $(".slider-progress .progress");
  
    $(".story-item > img").on({
      mouseover: function () {
        isPause = true;
      },
      mouseleave: function () {
        isPause = false;
      }
    });
  
    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    }
  
    function interval() {
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $bar.css({
          width: percentTime + "%"
        });
        if (percentTime >= 100) {
          $slider.flickity("next", true);
          startProgressbar();
        }
      }
    }
  
    function resetProgressbar() {
      $bar.css({
        width: 0 + "%"
      });
      clearTimeout(tick);
    }
  
    startProgressbar();
  });
  

  