// lorem text
const text = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Cupcake toffee tootsie roll sweet roll. Oat cake gummi bears souffl  chocolate bar. Dragee candy canes gummi bears.`,
  `Truffaut tootsie roll souffl  chocolate bar. Dragee candy canes gummi bears. Truffaut tootsie roll souffl  chocolate bar. Dragee candy canes gummi bears. Truffaut tootsie roll souffl  chocolate bar. Dragee candy canes gummi bears.`,
  `The sun blazed down from a cloudless sky as the hikers made their way up the rocky trail. Sweat poured down their faces and their legs ached, but they pressed on, eager to reach the summit. As they climbed higher, the air grew cooler and the view more breathtaking. Finally, they reached the top and looked out over miles of rolling hills and deep valleys.`,
  `The city was alive with energy as people rushed to and fro, their footsteps echoing off the pavement. Cars honked, sirens wailed, and the smell of exhaust hung heavy in the air. Amidst the chaos, street performers played music and artists painted on the sidewalks. It was a place of constant movement and noise, but also of endless possibility.`,
  `The waves crashed against the shore, sending up plumes of spray that glistened in the sun. Seagulls cried out overhead, wheeling and diving in search of food. The sand was warm underfoot and the salt tang of the sea filled the air. It was a place of endless beauty and peacefulness, where the stresses of the world seemed to fade away.`,
  `The train rattled down the tracks, the wheels clattering against the metal rails. Inside, passengers sat quietly, lost in their own thoughts or absorbed in their phones. The landscape outside flashed by, a blur of fields and trees and distant mountains. It was a journey of routine and monotony, but also of possibility and change`,
  `The classroom was hushed as the students bent over their desks, scribbling furiously on their papers. The only sound was the scratching of pencils and the occasional cough or sniffle. Outside, the world bustled by, oblivious to the academic intensity that was taking place within those walls. It was a place of learning and growth, of challenge and discovery.`,
  `The hospital was a hive of activity, with doctors and nurses rushing from room to room, checking on patients and administering treatments. The beeping of machines and the hum of monitors filled the air, and the smell of disinfectant hung heavy. It was a place of healing and hope, but also of sadness and loss.`,
  `The theater was dimly lit as the actors took their places on stage. The audience rustled and whispered, waiting for the show to begin. Then, the curtain rose and the magic began. Characters sprang to life, their voices and movements filling the space with energy and emotion. It was a place of artistry and imagination, of laughter and tears.`,
  `The factory was a massive, sprawling complex, its walls towering high above the workers below. Conveyor belts rattled and machines hummed as the employees went about their work, their eyes fixed on the endless stream of products moving past them. It was a place of industry and efficiency, but also of repetition and monotony.`,
  `The airport was a sea of humanity, with people rushing to catch their flights or greeting loved ones who had just arrived. The sound of announcements echoed throughout the terminals, and the smell of coffee and fast food hung in the air. It was a place of adventure and excitement, of new beginnings and tearful goodbyes.`,
  `The farm was alive with the sounds of animals and the smell of fresh hay. Chickens clucked and pigs oinked as the farmer went about his work, tending to the crops and caring for the livestock. In the distance, tractors rumbled and the sound of a rooster crowing could be heard. It was a place of hard work and simple pleasures, of connection to the land and the natural world.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];


const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random()* text.length);
  console.log(value);

  //empty
  //-1 -2 -3
  // > 9
  if(isNaN(value) || value <= 0 || value > 21) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  }else {
    let tempText = text.slice(0, value);
    tempText = tempText.map(function(item) {
      return `<p class="result">${item}</p>`
    }).join('');
    result.innerHTML = tempText;
  }
});