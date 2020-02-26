import React, { useState } from "react"
import axios from "axios"

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: e => {
      setValue(e.target.value)
    },
  }
}

export default function Contact() {
  const name = useInput("")
  const mail = useInput("")
  const phone = useInput("")
  const message = useInput("")

  function handleSubmit(e) {
    e.preventDefault()

    if (name.value && mail.value && phone.value && message.value) {
      axios
        .post("https://agile-hollows-25672.herokuapp.com/sendMail", {
          name: name.value,
          mail: mail.value,
          phone: phone.value,
          message: message.value,
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }

  return (
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contactez moi !</h2>
            <hr />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <form
              id="contactForm"
              name="sentMessage"
              novalidate
              onSubmit={handleSubmit}
            >
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      required
                      data-validation-required-message="Veuillez entrer votre nom"
                      {...name}
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="email"
                      type="email"
                      placeholder="Votre E-mail"
                      required
                      data-validation-required-message="Veuillez entrer votre mail"
                      {...mail}
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Votre téléphone"
                      required
                      data-validation-required-message="Veuillez entrer votre numéro de téléphone"
                      {...phone}
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="message"
                      placeholder="Votre message"
                      required
                      data-validation-required-message="Veuillez écrire votre message"
                      {...message}
                    ></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div
                    class="LI-profile-badge"
                    data-version="v1"
                    data-size="large"
                    data-locale="fr_FR"
                    data-type="horizontal"
                    data-theme="dark"
                    data-vanity="franck-fernandez-31b393161"
                  >
                    <a
                      class="LI-simple-link"
                      href="https://fr.linkedin.com/in/franck-fernandez-31b393161?trk=profile-badge"
                      target="_blank"
                    >
                      Franck Fernandez
                    </a>
                  </div>
                </div>

                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    class="btn btn-primary btn-xl text-uppercase"
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
