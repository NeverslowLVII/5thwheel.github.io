function uncheck(element) {
  if (element.checked) {
    setTimeout(function () {
      element.click();
    }, 0);
  }
}

let selectedCards = 0;

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      if (selectedCards < 4) {
        selectedCards++;
      } else {
        this.checked = false; // Uncheck the checkbox if the limit is reached
      }
    } else {
      selectedCards--;
    }
  });
});

const selectedAgents = {};

function toggleAgentSelection(agentId, imagePath) {
  const agentElement = document.getElementById(agentId);
  const cardElement = agentElement.querySelector('.cards__item');

  if (selectedAgents[agentId]) {
    delete selectedAgents[agentId];
    cardElement.style.border = "";
    cardElement.style.backgroundColor = "";
  } else if (Object.keys(selectedAgents).length < 4) {
    selectedAgents[agentId] = imagePath;
    cardElement.style.border = "4px solid lime";
    cardElement.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
  }

  const selectedAgentsContainer = document.getElementById('selectedAgentBox');
  selectedAgentsContainer.innerHTML = '';

  for (const selectedAgentId in selectedAgents) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col';

    const label = document.createElement('label');
    label.setAttribute('for', selectedAgentId);

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'card';
    input.id = selectedAgentId;
    input.hidden = true;

    const agentCard = document.createElement('div');
    agentCard.className = 'cards__agent cards__agent--clr';

    const agentImage = document.createElement('div');
    agentImage.className = 'agent__image';
    agentImage.style.transform = 'translate(0, 25px)';

    const img = document.createElement('img');
    img.src = selectedAgents[selectedAgentId];
    img.style.transform = 'scale(2)';


    agentImage.appendChild(img);
    agentCard.appendChild(agentImage);
    label.appendChild(input);
    label.appendChild(agentCard);
    colDiv.appendChild(label);
    selectedAgentsContainer.appendChild(colDiv);
  }

  const agents = document.querySelectorAll('.agent');
  agents.forEach(agent => {
    agent.classList.remove('selected');
  });

  for (const selectedAgentId in selectedAgents) {
    const selectedAgentElement = document.getElementById(selectedAgentId);
  }
}

// remplissage de cartes
const agentsData = [
  {
    "name": "brimstone",
    "image": "https://static.wikia.nocookie.net/valorant/images/8/81/Brimstone_Artwork_Full.png/revision/latest?cb=20220810202719",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138399768209534976/342.png",
    "role": "Controller",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Incendiary",
    "basicAbility2": "Stim Beacon",
    "basicAbility3": "",
    "signatureAbility1":"Sky Smoke",
    "signatureAbility2":"",
    "ultimateAbility":"Orbital Strike"
  },
  {
    "name": "phoenix",
    "image": "https://static.wikia.nocookie.net/valorant/images/9/90/Phoenix_Artwork_Full.png/revision/latest?cb=20220810202811",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403011085996123/342.png",
    "role": "Duelist",
    "passive1":"Heating Up",
    "passive2":"",
    "basicAbility1": "Blaze",
    "basicAbility2": "Curveball",
    "basicAbility3": "",
    "signatureAbility1":"Hot Hands",
    "signatureAbility2":"",
    "ultimateAbility":"Run it Back"
  },
  {
    "name": "sage",
    "image": "https://static.wikia.nocookie.net/valorant/images/7/7e/Sage_Artwork_Full.png/revision/latest?cb=20220810202824",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403008854630492/342.png",
    "role": "Sentinel",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Barrier Orb",
    "basicAbility2": "Slow Orb",
    "basicAbility3": "",
    "signatureAbility1":"Healing Orb",
    "signatureAbility2":"",
    "ultimateAbility":"Resurrection"
  },
  {
    "name": "sova",
    "image": "https://static.wikia.nocookie.net/valorant/images/c/c5/Sova_Artwork_Full.png/revision/latest?cb=20220810202832",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403007474716713/342.png",
    "role": "Initiator",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Owl Drone",
    "basicAbility2": "Shock Bolt",
    "basicAbility3": "",
    "signatureAbility1":"Recon Bolt",
    "signatureAbility2":"",
    "ultimateAbility":"Hunter's Fury"
  },
  {
    "name": "viper",
    "image": "https://static.wikia.nocookie.net/valorant/images/8/85/Viper_Artwork_Full.png/revision/latest?cb=20220810202837",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138402769087234089/342.png",
    "role": "Controller",
    "passive1":"Fuel",
    "passive2":"Toxin",
    "basicAbility1": "Snake Bite",
    "basicAbility2": "Poison Cloud",
    "basicAbility3": "",
    "signatureAbility1":"Toxic Screen",
    "signatureAbility2":"",
    "ultimateAbility":"Viper's Pit"
  },
  {
    "name": "cypher",
    "image": "https://static.wikia.nocookie.net/valorant/images/5/55/Cypher_Artwork_Full.png/revision/latest?cb=20220810202731",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403004899401738/342.png",
    "role": "Sentinel",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Trapwire",
    "basicAbility2": "Cyber cage",
    "basicAbility3": "",
    "signatureAbility1":"Spycam",
    "signatureAbility2":"",
    "ultimateAbility":"Neural Theft"
  },
  {
    "name": "reyna",
    "image": "https://static.wikia.nocookie.net/valorant/images/3/36/Reyna_Artwork_Full.png/revision/latest?cb=20220810202820",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403063221190737/342.png",
    "role": "Duelist",
    "passive1":"Soul Harvest",
    "passive2":"",
    "basicAbility1": "Leer",
    "basicAbility2": "",
    "basicAbility3": "",
    "signatureAbility1":"Devour",
    "signatureAbility2":"Dismiss",
    "ultimateAbility":"Empress"
  },
  {
    "name": "killjoy",
    "image": "https://static.wikia.nocookie.net/valorant/images/8/81/Killjoy_Artwork_Full.png/revision/latest?cb=20220810202751",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403002626089021/342.png",
    "role": "Sentinel",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Alarmbot",
    "basicAbility2": "Nanoswarm",
    "basicAbility3": "",
    "signatureAbility1":"Turret",
    "signatureAbility2":"",
    "ultimateAbility":"Lockdown"
  },
  {
    "name": "breach",
    "image": "https://static.wikia.nocookie.net/valorant/images/2/24/Breach_Artwork_Full.png/revision/latest?cb=20220810202713",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403118661521498/342.png",
    "role": "Initiator",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Aftershock",
    "basicAbility2": "Flashpoint",
    "basicAbility3": "",
    "signatureAbility1":"Fault Line",
    "signatureAbility2":"",
    "ultimateAbility":"Rolling Thunder"
  },
  {
    "name": "omen",
    "image": "https://static.wikia.nocookie.net/valorant/images/0/0e/Omen_Artwork_Full.png/revision/latest?cb=20220810202807",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138402807192494080/342.png",
    "role": "Controller",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Shrouded Step",
    "basicAbility2": "Paranoia",
    "basicAbility3": "",
    "signatureAbility1":"Dark Cover",
    "signatureAbility2":"",
    "ultimateAbility":"From the Shadows"
  },
  {
    "name": "jett",
    "image": "https://static.wikia.nocookie.net/valorant/images/e/e3/Jett_Artwork_Full.png/revision/latest?cb=20220810202742",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403039204618240/342.png",
    "role": "Duelist",
    "passive1":"Drift",
    "passive2":"",
    "basicAbility1": "Cloudburst",
    "basicAbility2": "Updraft",
    "basicAbility3": "",
    "signatureAbility1":"Tailwind",
    "signatureAbility2":"",
    "ultimateAbility":"Blade Storm"
  },
  {
    "name": "raze",
    "image": "https://static.wikia.nocookie.net/valorant/images/6/6f/Raze_Artwork_Full.png/revision/latest?cb=20220810202815",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403094699462666/342.png",
    "role": "Duelist",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Boom Bot",
    "basicAbility2": "Blast Pack",
    "basicAbility3": "",
    "signatureAbility1":"Paint Shells",
    "signatureAbility2":"",
    "ultimateAbility":"Showstopper"
  },
  {
    "name": "skye",
    "image": "https://static.wikia.nocookie.net/valorant/images/7/7f/Skye_Artwork_Full.png/revision/latest?cb=20220810202828",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403141713395772/342.png",
    "role": "Initiator",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Regrowth",
    "basicAbility2": "Trailblazer",
    "basicAbility3": "",
    "signatureAbility1":"Guiding Light",
    "signatureAbility2":"",
    "ultimateAbility":"Seekers"
  },
  {
    "name": "yoru",
    "image": "https://static.wikia.nocookie.net/valorant/images/1/1e/Yoru_Artwork_Full.png/revision/latest?cb=20220810202841",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403166271066112/342.png",
    "role": "Duelist",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Fakeout",
    "basicAbility2": "Blindside",
    "basicAbility3": "",
    "signatureAbility1":"Gatecrash",
    "signatureAbility2":"",
    "ultimateAbility":"Dimensional Drift"
  },
  {
    "name": "astra",
    "image": "https://static.wikia.nocookie.net/valorant/images/e/e0/Astra_Artwork_Full.png/revision/latest?cb=20220810202708",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403302640455740/342.png",
    "role": "Controller",
    "passive1":"Astral Form",
    "passive2":"",
    "basicAbility1": "Gravity Well",
    "basicAbility2": "Nova Pulse",
    "basicAbility3": "Nebula/Dissipate",
    "signatureAbility1":"Stars",
    "signatureAbility2":"",
    "ultimateAbility":"Cosmic Divide"
  },
  {
    "name": "kay-o",
    "image": "https://static.wikia.nocookie.net/valorant/images/5/57/KAYO_Artwork_Full.png/revision/latest?cb=20220810202747",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403327177142303/342.png",
    "role": "Initiator",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "FRAG/ment",
    "basicAbility2": "FLASH/drive",
    "basicAbility3": "",
    "signatureAbility1":"ZERO/point",
    "signatureAbility2":"",
    "ultimateAbility":"NULL/cmd"
  },
  {
    "name": "chamber",
    "image": "https://static.wikia.nocookie.net/valorant/images/5/5d/Chamber_Artwork_Full.png/revision/latest?cb=20220810202725",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403379538829403/342.png",
    "role": "Sentinel",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Trademark",
    "basicAbility2": "Headhunter",
    "basicAbility3": "",
    "signatureAbility1":"Rendezvous",
    "signatureAbility2":"",
    "ultimateAbility":"Tour De Force"
  },
  {
    "name": "neon",
    "image": "https://static.wikia.nocookie.net/valorant/images/f/fe/Neon_Artwork_Full.png/revision/latest?cb=20220810202800",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403391438077962/342.png",
    "role": "Duelist",
    "passive1":"Energy",
    "passive2":"",
    "basicAbility1": "Fast Lane",
    "basicAbility2": "Relay Bolt",
    "basicAbility3": "",
    "signatureAbility1":"High Gear",
    "signatureAbility2":"",
    "ultimateAbility":"Overdrive"
  },
  {
    "name": "fade",
    "image": "https://static.wikia.nocookie.net/valorant/images/e/e8/Fade_Artwork_Full.png/revision/latest?cb=20220810202738",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403416255766568/342.png",
    "role": "Initiator",
    "passive1":"Terror Trail",
    "passive2":"",
    "basicAbility1": "Prowler",
    "basicAbility2": "Seize",
    "basicAbility3": "",
    "signatureAbility1":"Haunt",
    "signatureAbility2":"",
    "ultimateAbility":"Nightfall"
  },
  {
    "name": "harbor",
    "image": "https://static.wikia.nocookie.net/valorant/images/5/5c/Harbor_Artwork_Full.png/revision/latest?cb=20221018133900",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403442025582692/342.png",
    "role": "Controller",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "Cascade",
    "basicAbility2": "Cove",
    "basicAbility3": "",
    "signatureAbility1":"High Tide",
    "signatureAbility2":"",
    "ultimateAbility":"Reckoning"
  },
  {
    "name": "gekko",
    "image": "https://static.wikia.nocookie.net/valorant/images/a/a4/Gekko_Artwork_Full.png/revision/latest?cb=20230304203025",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403463907266602/342.png",
    "role": "Initiator",
    "passive1":"Globules",
    "passive2":"",
    "basicAbility1": "Mosh Pit",
    "basicAbility2": "Wingman",
    "basicAbility3": "",
    "signatureAbility1":"Dizzy",
    "signatureAbility2":"",
    "ultimateAbility":"Thrash"
  },
  {
    "name": "deadlock",
    "image": "https://static.wikia.nocookie.net/valorant/images/a/aa/Deadlock_Artwork_Full.png/revision/latest?cb=20230627132700",
    "backgroundImage": "https://cdn.discordapp.com/attachments/727530995196231813/1138403491916816444/342.png",
    "role": "Sentinel",
    "passive1":"",
    "passive2":"",
    "basicAbility1": "GravNet",
    "basicAbility2": "Sonic Sensor",
    "basicAbility3": "",
    "signatureAbility1":"Barrier Mesh",
    "signatureAbility2":"",
    "ultimateAbility":"Annihilation"
  }
]

const createAgentElement = (agent) => {
  const agentElement = document.createElement('div');
  agentElement.className = 'card';
  agentElement.id = agent.name; // Add unique ID to the card element
  agentElement.onclick = () => {
    toggleAgentSelection(agent.name, agent.image);
  };

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = agent.name;
  checkbox.hidden = true;

  const cardElement = document.createElement('div');
  cardElement.className = 'cards__item cards__item--clr';
  cardElement.style.backgroundImage = `url('${agent.backgroundImage}')`;

  const productElement = document.createElement('div');
  productElement.className = 'cards__product';

  const imageElement = document.createElement('img');
  imageElement.src = agent.image;

  productElement.appendChild(imageElement);
  cardElement.appendChild(productElement);
  agentElement.appendChild(checkbox);
  agentElement.appendChild(cardElement);

  return agentElement;
};

const cardsContainer = document.querySelector('.cards');

agentsData.forEach(({ name, image, backgroundImage }) => {
  const agentElement = createAgentElement({ name, image, backgroundImage });
  cardsContainer.appendChild(agentElement);
});