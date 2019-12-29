const websiteContent = {
  websiteTitle: "Franck Fernandez - Développeur Web - Front et Back-end",
  headerBtnLeft: "Franck Fernandez",
  headerBtns: [
    {
      text: "Atouts",
      href: "#atouts",
    },
    {
      text: "Compétences",
      href: "#comp",
    },
    {
      text: "Mon parcours",
      href: "#about",
    },
    {
      text: "Centres d'intérêts",
      href: "#interet",
    },
    {
      text: "Contact",
      href: "#contact",
    },
  ],

  sections: {
    // ---------------------------------------------------------- HOME
    home: {
      title: "Franck Fernandez",
      content: "Développeur Intégrateur web",
      btnContent: "Jeter un coup d'oeil",
    },

    // ---------------------------------------------------------- ATOUTS
    atouts: {
      id: "atouts",
      title: "Mes Atouts",
      content: [
        {
          title: "Autonome",
          content:
            "Je suis en mesure de réagir, m'adapter et rechercher des solutions face à des contraintes de manière rapide et autonome.",
          icon: "fa-compass",
        },
        {
          title: "Travail d'équipe",
          content:
            "Je sais m'intégrer rapidement dans une nouvelle équipe. De plus, je suis capable d'exposer clairement mon point de vue, contraintes et délais dans un projet.",
          icon: "fa-users",
        },
        {
          title: "Polyvalent",
          content:
            "Ayant mené des projets en petit effectif, j'ai appris à diversifier mes connaissances et compétences pour devenir un élément polyvalent.",
          icon: "fa-arrows-alt",
        },
      ],
    },

    // ----------------------------------------------------------
    competences: {
      id: "comp",
      title: "Mes Compétences",
      content: [
        {
          title: "Développement Web",
          content:
            "Au cours de mes années d'études et sur différents projets professionnels, j'ai appris à maîtriser plusieurs langages de front-end HTML, CSS, JavaScript et framework tel que BootStrap et JQuery. De plus, j'ai été formé au back-end avec PHP, MySQL tout en optimisant le référencement (SEO).",
          circles: [
            {
              title: "HTML/CSS",
              style: "nopeQCB",
            },
            {
              title: "JS",
              style: "nopeSJ",
            },
            {
              title: "PHP/SQL",
              style: "nopeSCV",
            },
            {
              title: "SEO",
              style: "nopeSCR",
            },
          ],
        },
        {
          title: "Graphisme",
          content:
            "Durant mon parcours, j'ai dû élargir mon champ de compétences en me formant sur des logiciels professionnels de retouche et de création numérique (suite Adobe).",
          circles: [
            {
              title: "Photoshop",
              style: "nopeSB",
            },
            {
              title: "Illustrator",
              style: "nopeSJ",
            },
            {
              title: "Première",
              style: "nopeCR",
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------- ABOUT
    about: {
      id: "about",
      title: "Mon parcours",
      cv: {
        url: "WARNING Téléchargez<br>mon CV<br>PDF WARNING",
        text: "dwld/CV-Franck-FERNANDEZ.pdf",
      },
      content: [
        {
          title: "BTS Gestion et Protection de la Nature",
          date: "2014-2016",
          subTitle: "Masseube - Gers",
          img: {
            src: "img/about/nbts.jpg",
            alt: "BTS-GPN",
          },
          link: null,
          content:
            "Après un Bac technologique dans le monde de l'environnement, je me suis naturellement tourné vers un BTS GPN dans lequel j'ai pu acquérir de l'expérience dans le domaine de l'écologie et de l'agronomie.",
        },

        {
          title: "Stage en Lettonie",
          date: "Juin 2015",
          subTitle: "3 mois",
          img: {
            src: "img/about/nkemeri.jpg",
            alt: "parc-national-kemeri",
          },
          link: {
            url: "http://www.kemerunacionalaisparks.lv/",
            text: "Parc National de Kemeri",
          },
          content:
            "Dans le cadre de mon BTS GPN, je suis parti en Lettonie pour réaliser mon stage dans le parc National de Kemeri. J'y étais \"Chargé d'animaton\" (organisateur et animateur) sur différentes activités du parc.",
        },

        {
          title:
            "WARNING Conférence International<br>sur la Biodiversité WARNING",
          date: "Octobre 2015",
          subTitle: "Intervenant Stage de Lettonie",
          img: {
            src: "img/about/nconf.jpg",
            alt: "conference",
          },
          link: {
            url:
              "https://www.ladepeche.fr/article/2015/10/01/2188462-rencontres-internationales-sur-la-biodiversite-et-les-milieux-naturels.html",
            text: "Article de Ladépêche",
          },
          content:
            "Présentation de mes tâches de Chargé d'animation dans le parc national de Kemeri et de ses atouts en matière de biodiversité.",
        },

        {
          title: "DUT Métiers du Multimédia et d'Internet",
          date: "WARNING 2016 <em>Ré-orientation</em> WARNING",
          subTitle: "Vichy - Allier",
          img: {
            src: "img/about/nweb.png",
            alt: "dut-mmi",
          },
          link: null,
          content:
            "Ne me voyant pas poursuivre dans l'environnement, j'ai décidé de m'orienter vers une autre passion qu'est l'informatique. J'ai donc intégré le DUT MMI de Vichy qui est essentiellement spécialisé dans le web et le multimédia.",
        },

        {
          title: "WARNING Projet professionnel<br>Auvergne Comm'Unique WARNING",
          date: "Juin 2016",
          subTitle: "Développeur WordPress",
          img: {
            src: "img/about/avc.jpg",
            alt: "Auvergne-Comm'Unique",
          },
          link: {
            url: null,
            text: "Version en ligne modifiée par l'entreprise.",
          },
          content:
            "Dans le cadre de mon DUT MMI, j'ai été en charge du poste développeur web accompagné de deux graphistes. Cela dans le but de créer le site web d'Auvergne Comm'Unique, entreprise de lettrage publicitaire et impression numérique",
        },

        {
          title: "WARNING Projet professionnel<br>InSport WARNING",
          date: "2017 - 2018",
          subTitle: "Développeur Front-end",
          img: {
            src: "img/about/in.jpg",
            alt: "InSport",
          },
          link: {
            url: "http://www.in-sport.fr/",
            text: "Visiter le site",
          },
          content:
            "En dernière année de DUT, il m'a été confié le projet de développer un site web pour l'entreprise InSport avec l'aide d'un développeur Back-end. InSport est une entreprise de coaching sportif pour professionnels et particuliers.",
        },

        {
          title: "Stage - Blizz",
          date: "Mars 2018",
          subTitle: "Développeur Web",
          img: {
            src: "img/about/blizz.png",
            alt: "Blizz",
          },
          link: null,
          content:
            "WARNING Afin de finaliser mon DUT, j'ai réalisé un stage de 12 semaines au sein de l'entreprise <em><a href=\"http://www.blizz.fr/\" target = \"_blank\">Blizz</a></em> en tant que développeur web. Mes principales missions étant d'assurer la mise à jour technique de plusieurs sites web (création de formulaire de contact, installation de Captcha, intégration de contenu, ...). J'ai pu poursuivre mes projets 1 mois en CDI dans cette entreprise suite à mon stage. WARNING",
        },

        {
          title: "Licence DIM - SkewerLab",
          date: "Septembre 2018",
          subTitle: "Développeur Junior",
          img: {
            src: "img/about/Skewer.png",
            alt: "SkewerLab",
          },
          link: {
            url: "",
            text: "",
          },
          content:
            'WARNING Suite à mon DUT MMI, je me suis orienté vers la licence DIM (Développeur Informatique Multi-support) afin d\'aquérir les connaissances nécessaires à un Développeur Web. J\'ai choisi de réaliser ma licence en alternance auprès de l\'entreprise <em><a href="https://www.skewerlab.com" target="_blank">SkewerLab</a></em> WARNING',
        },
        // {
        //   title: '',
        //   date: '',
        //   subTitle: '',
        //   img: {
        //     src: '',
        //     alt: '',
        //   },
        //   link: {
        //     url: '',
        //     text: '',
        //   },
        //   content: '',
        // },
      ],
    },

    // ---------------------------------------------------------- INTERET
    interet: {
      id: "interet",
      title: "Centres d'intérêts",
      content: [
        {
          title: "Informatique",
          content:
            "Passionné depuis toujours, j'ai toujours été attiré a tout ce qui touche l'informatique et les nouvelles technologi.",
          icon: "fa-desktop",
        },
        {
          title: "Voyage",
          content:
            "Curieux des cultures étrangères, j'espère avoir l'opportunité dans les années à venir de voyager le plus possible dans des pays étrangers.",
          icon: "fa-globe",
        },
        {
          title: "Sport",
          content:
            "Soucieux d'une bonne santé, je pratique régulièrement des sports de montagne comme le ski, le vélo et la randonnée.",
          icon: "fa-heartbeat",
        },
      ],
    },

    // ---------------------------------------------------------- CONTACT
    contact: {
      id: "contact",
      title: "Contactez moi !",
      content: [
        {
          id: "name",
          type: "text",
          placeholder: "Votre nom",
          errorMsg: "Veuillez entrer votre nom",
        },
        {
          id: "email",
          type: "email",
          placeholder: "Votre E-mail",
          errorMsg: "Veuillez entrer votre mail",
        },
        {
          id: "phone",
          type: "tel",
          placeholder: "Votre téléphone",
          errorMsg: "Veuillez entrer votre numéro de téléphone",
        },
        {
          id: "message",
          type: "textarea",
          placeholder: "Votre message",
          errorMsg: "Veuillez écrire votre message",
        },
        // {
        //   id: '',
        //   type: '',
        //   placeholder: '',
        //   errorMsg: '',
        // },
      ],
      btnText: "Envoyer",
    },

    // ---------------------------------------------------------- FOOTER
    footer: {
      content: [
        {
          text: "WARNING Copyright &copy; Franck Fernandez 2017 WARNING",
          link: null,
        },
        {
          text: null,
          link: {
            url: "https://getbootstrap.com/",
            text: "Créé via BootStrap",
          },
        },
      ],
    },
  },
}

export default websiteContent
