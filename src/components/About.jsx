import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = (props) => {
  const data = useStaticQuery(graphql`
    query {
      AUVERGNE_COMM: file(
        relativePath: { eq: "about/Auvergne_Comm_Unique.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BTS: file(relativePath: { eq: "about/bts.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CONFERENCE: file(relativePath: { eq: "about/conference.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IN_SPORT: file(relativePath: { eq: "about/in_Sport.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      KEMERI: file(relativePath: { eq: "about/kemeri.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MMI: file(relativePath: { eq: "about/MMI.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SKWR: file(relativePath: { eq: "about/Skewer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BLIZZ: file(relativePath: { eq: "about/blizz.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CV: file(relativePath: { eq: "CV-Franck.pdf" }) {
        publicURL
      }
    }
  `)

  const AUVERGNE_COMM = data.AUVERGNE_COMM.childImageSharp.fluid
  const BTS = data.BTS.childImageSharp.fluid
  const CONFERENCE = data.CONFERENCE.childImageSharp.fluid
  const IN_SPORT = data.IN_SPORT.childImageSharp.fluid
  const KEMERI = data.KEMERI.childImageSharp.fluid
  const MMI = data.MMI.childImageSharp.fluid
  const SKWR = data.SKWR.childImageSharp.fluid
  const BLIZZ = data.BLIZZ.childImageSharp.fluid

  const CV = data.CV.publicURL

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase mb-5">
              Mon parcours
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <Img className="rounded-circle img-fluid" fluid={BTS} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2014-2016</h4>
                    <h4 className="subheading">
                      BTS Gestion et Protection de la Nature
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <em>Masseube - Gers</em>
                    <p className="text-muted">
                      Après un Bac technologique dans le monde de
                      l'environnement, je me suis naturellement tourné vers un
                      BTS GPN dans lequel j'ai pu acquérir de l'expérience dans
                      le domaine de l'écologie et de l'agronomie.
                    </p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <Img className="rounded-circle img-fluid" fluid={KEMERI} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Juin 2015</h4>
                    <h4 className="subheading">Stage en Lettonie</h4>
                  </div>
                  <div className="timeline-body">
                    <em>3 mois</em>
                    <br />
                    <em>
                      <a href="http://www.kemerunacionalaisparks.lv/">
                        Parc National de Kemeri
                      </a>
                    </em>
                    <p className="text-muted">
                      Dans le cadre de mon BTS GPN, je suis parti en Lettonie
                      pour réaliser mon stage dans le parc National de Kemeri.
                      J'y étais "Chargé d'animaton" (organisateur et animateur)
                      sur différentes activités du parc.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="timeline-image">
                  <Img
                    className="rounded-circle img-fluid"
                    fluid={CONFERENCE}
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Octobre 2015</h4>
                    <h4 className="subheading">
                      Conférence International
                      <br />
                      sur la Biodiversité
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <em>Intervenant Stage de Lettonie</em>
                    <br />
                    <em>
                      <a
                        href="https://www.ladepeche.fr/article/2015/10/01/2188462-rencontres-internationales-sur-la-biodiversite-et-les-milieux-naturels.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Article de Ladépêche
                      </a>
                    </em>
                    <p className="text-muted">
                      Présentation de mes tâches de Chargé d'animation dans le
                      parc national de Kemeri et de ses atouts en matière de
                      biodiversité.
                    </p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <Img className="rounded-circle img-fluid" fluid={MMI} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>
                      2016 <em>Ré-orientation</em>
                    </h4>
                    <h4 className="subheading">
                      en DUT Métiers du Multimédia et d'Internet
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <em>Vichy - Allier</em>
                    <p className="text-muted">
                      Ne me voyant pas poursuivre dans l'environnement, j'ai
                      décidé de m'orienter vers une autre passion qu'est
                      l'informatique. J'ai donc intégré le DUT MMI de Vichy qui
                      est essentiellement spécialisé dans le web et le
                      multimédia.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <Img
                    className="rounded-circle img-fluid"
                    fluid={AUVERGNE_COMM}
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Juin 2016</h4>
                    <h4 className="subheading">
                      Projet professionnel
                      <br />
                      Auvergne Comm'Unique
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <em>Développeur WordPress</em>
                    <p className="text-muted">
                      Dans le cadre de mon DUT MMI, j'ai été en charge du poste
                      développeur web accompagné de deux graphistes. Cela dans
                      le but de créer le site web d'Auvergne Comm'Unique,
                      entreprise de lettrage publicitaire et impression
                      numérique
                    </p>
                    <em>Version en ligne modifiée par l'entreprise.</em>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <Img className="rounded-circle img-fluid" fluid={IN_SPORT} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2017 - 2018</h4>
                    <h4 className="subheading">
                      Projet professionnel
                      <br />
                      InSport
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <em>Développeur Front-end</em>
                    <br />
                    <em>BootStrap/JQuery</em>
                    <p className="text-muted">
                      En dernière année de DUT, il m'a été confié le projet de
                      développer un site web pour l'entreprise InSport avec
                      l'aide d'un développeur Back-end. InSport est une
                      entreprise de coaching sportif pour professionnels et
                      particuliers.
                    </p>
                    <em>
                      <a
                        href="http://www.in-sport.fr/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visiter le site
                      </a>
                    </em>
                  </div>
                </div>
              </li>

              <li>
                <div className="timeline-image">
                  <Img
                    className="rounded-circle img-fluid blizz"
                    fluid={BLIZZ}
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Mars 2018</h4>
                    <h4 className="subheading">Stage - Blizz</h4>
                  </div>
                  <div className="timeline-body">
                    <em>Développeur Web</em>
                    <p className="text-muted">
                      Afin de finaliser mon DUT, j'ai réalisé un stage de 12
                      semaines au sein de l'entreprise{" "}
                      <em>
                        <a href="http://www.blizz.fr/" rel="noreferrer">
                          Blizz
                        </a>
                      </em>{" "}
                      en tant que développeur web. Mes principales missions
                      étant d'assurer la mise à jour technique de plusieurs
                      sites web (création de formulaire de contact, installation
                      de Captcha, intégration de contenu, ...). J'ai pu
                      poursuivre mes projets 1 mois en CDI dans cette entreprise
                      suite à mon stage.
                    </p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <Img className="rounded-circle img-fluid" fluid={SKWR} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Septembre 2018</h4>
                    <h4 className="subheading">Licence DIM - SkewerLab</h4>
                  </div>
                  <div className="timeline-body">
                    <em>Développeur Junior</em>
                    <p className="text-muted">
                      Suite à mon DUT MMI, je me suis orienté vers la licence
                      DIM (Développeur Informatique Multi-support) afin
                      d'aquérir les connaissances nécessaires à un Développeur
                      Web. J'ai choisi de réaliser ma licence en alternance
                      auprès de l'entreprise{" "}
                      <em>
                        <a
                          href="https://www.skewerlab.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          SkewerLab
                        </a>
                      </em>
                      .
                    </p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    <a href={CV} target="_blank" rel="noreferrer">
                      Téléchargez
                      <br />
                      mon CV
                      <br />
                      PDF
                    </a>
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
