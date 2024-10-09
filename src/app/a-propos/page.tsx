export default function Propos() {
  const categories = [
    {
      title: "Smartphones et accessoires",
      description:
        "Explorez notre sélection de téléphones dernier cri, ainsi que d'accessoires essentiels comme des coques, chargeurs, et écouteurs pour optimiser votre expérience mobile.",
      icon: "/icons/contacter.png", // Exemple de chemin d'icône
    },
    {
      title: "Ordinateurs et tablettes",
      description:
        "Que vous ayez besoin d'un ordinateur portable puissant ou d'une tablette pratique, nous avons ce qu'il vous faut, ainsi que les accessoires indispensables pour une performance optimale.",
      icon: "/icons/ordinateurs-portables.png",
    },
    {
      title: "Électronique grand public",
      description:
        "Découvrez nos télévisions, appareils photo et drones pour rester connecté et capturer les moments importants de votre vie.",
      icon: "/icons/appareils-electroniques.png",
    },
    {
      title: "Objets connectés",
      description:
        "Montres intelligentes, bracelets fitness, et solutions domotiques pour une maison moderne et connectée.",
      icon: "/icons/application-smartwatch.png",
    },
    {
      title: "Jeux vidéo et consoles",
      description:
        "Plongez dans l'univers du jeu avec nos consoles PlayStation, Xbox, manettes, et une sélection de jeux captivants.",
      icon: "/icons/xbox.png",
    },
    {
      title: "Imprimantes et accessoires",
      description:
        "Tout pour imprimer efficacement, de l'imprimante aux cartouches, en passant par le papier de qualité.",
      icon: "/icons/imprimante.png",
    },
    {
      title: "Équipement de réseau",
      description:
        "Routeurs, modems et câbles pour une connectivité sans faille à la maison ou au bureau.",
      icon: "/icons/la-mise-en-reseau.png",
    },
    {
      title: "Équipements de stockage",
      description:
        "Disques durs, clés USB, cartes mémoire — nous avons la solution de stockage adaptée à vos besoins.",
      icon: "/icons/disque-dur.png",
    },
    {
      title: "Accessoires informatiques",
      description:
        "Claviers, souris, webcams et bien plus pour compléter votre installation informatique.",
      icon: "/icons/accessoires.png",
    },
    {
      title: "Équipements de sécurité",
      description:
        "Caméras de surveillance, alarmes et systèmes de sécurité intelligents pour protéger votre espace.",
      icon: "/icons/bouclier.png",
    },
  ];
  return (
    <div className=" justify-center  flex  px-4">
      <div className="text-black container mt-[100px]">
        <div>
          <h2 className="text-center font-bold text-orange-400 text-[30px]">
            {" "}
            À propos de nous
          </h2>
          <div className="text-center my-10">
            Bienvenue sur{" "}
            <span className="text-orange-400 font-bold mx-2">ALIBIA</span>,
            votre destination de confiance pour tout ce qui touche à la
            technologie ! <br></br> Nous sommes spécialisés dans la vente de
            produits high-tech de haute qualité, ,<br></br>couvrant une large
            gamme de catégories pour répondre à tous vos besoins numériques.
          </div>
          <div className="">
            <h1 className="py-5 font-bold text-[20px] text-orange-400 ">
              Nous proposons
            </h1>
            <ul className="list-disc">
              {categories.map((category, index) => (
                <li
                  className="list-disc"
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <img
                    src={category.icon}
                    alt={`${category.title} icon`}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <h3 className="font-bold">{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center my-36">
            Notre mission est simple : offrir à nos clients les dernières
            innovations technologiques à des prix compétitifs, tout en assurant
            une expérience d'achat fluide et agréable. Que vous soyez un
            passionné de technologie ou un professionnel en quête des meilleures
            solutions, nous sommes là pour vous accompagner à chaque étape de
            votre parcours numérique. Merci de faire confiance à
            <span className="text-orange-400 font-bold mx-2">ALIBIA</span>.
            Ensemble, construisons un futur technologique.
          </div>
        </div>
      </div>
    </div>
  );
}
