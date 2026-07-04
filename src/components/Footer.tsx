import { useState } from 'react'

export default function Footer() {
  const [sent, setSent] = useState(false)

  return (
    <footer className="footer" id="contact">
      <p className="footer__mast" aria-hidden="true">
        BALIN
      </p>

      <div className="footer__grid">
        <div className="footer__col">
          <h3>La Maison</h3>
          <address>
            balin — Maison de Couture
            <br />
            14 Rue Saint-Honoré
            <br />
            75001 Paris, France
            <br />
            atelier@balin.paris
          </address>
        </div>

        <div className="footer__col">
          <h3>Explorer</h3>
          <ul>
            <li><a href="#maison">La Maison</a></li>
            <li><a href="#collection">La Collection</a></li>
            <li><a href="#atelier">L’Atelier</a></li>
            <li><a href="#journal">Journal</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Suivre</h3>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer">Films</a></li>
          </ul>
        </div>

        <div className="footer__col footer__news">
          <h3>Correspondance</h3>
          <p>
            Receive each édition as a letter — no noise, four times a year.
          </p>
          {sent ? (
            <p className="label label--bronze">Merci. À bientôt.</p>
          ) : (
            <form
              className="footer__form"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <label htmlFor="news-email" className="label" style={{ position: 'absolute', left: '-9999px' }}>
                Email address
              </label>
              <input id="news-email" type="email" required placeholder="Votre adresse e-mail" />
              <button type="submit">S’inscrire</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer__colophon">
        <span>© 2026 balin — Tous droits réservés</span>
        <span>Édition Nº7 — Imprimé à Paris</span>
        <span>Photographie : Unsplash · Film : Pexels</span>
      </div>
    </footer>
  )
}
