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
  const dirtyCaptcha = useInput("")

  const [requestPending, setRequestPending] = useState(false)
  const [requestSuccess, setRequestSuccess] = useState(false)
  const [requestError, setRequestError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    if (
      name.value &&
      mail.value &&
      phone.value &&
      message.value &&
      dirtyCaptcha.value == 4
    ) {
      setRequestPending(true)
      axios
        .post("https://agile-hollows-25672.herokuapp.com/sendMail", {
          name: name.value,
          mail: mail.value,
          phone: phone.value,
          message: message.value,
        })
        .then(response => {
          setRequestPending(false)
          setRequestSuccess(true)
          console.log(response)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contactez moi !</h2>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      required
                      data-validation-required-message="Veuillez entrer votre nom"
                      {...name}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Votre E-mail"
                      required
                      data-validation-required-message="Veuillez entrer votre mail"
                      {...mail}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Votre téléphone"
                      required
                      data-validation-required-message="Veuillez entrer votre numéro de téléphone"
                      {...phone}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Votre message"
                      required
                      data-validation-required-message="Veuillez écrire votre message"
                      {...message}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="LI-profile-badge"
                    data-version="v1"
                    data-size="large"
                    data-locale="fr_FR"
                    data-type="horizontal"
                    data-theme="dark"
                    data-vanity="franck-fernandez-31b393161"
                  >
                    <a
                      className="LI-simple-link"
                      href="https://fr.linkedin.com/in/franck-fernandez-31b393161?trk=profile-badge"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Franck Fernandez
                    </a>
                  </div>
                </div>

                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div className="form-group">
                    <input
                      className="form-control"
                      style={{
                        maxWidth: "130px",
                        margin: "auto",
                      }}
                      id="dirtyCaptcha"
                      type="number"
                      placeholder="2 + 2"
                      required
                      {...dirtyCaptcha}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>

                  {requestPending && (
                    <div className="btn btn-primary btn-xl text-uppercase">
                      <i className="fa fa-circle-o-notch fa-spin" />
                    </div>
                  )}
                  {requestSuccess && (
                    <div className="btn btn-success btn-xl text-uppercase">
                      Message envoyé !
                    </div>
                  )}

                  {!requestSuccess && !requestPending && !requestError && (
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
