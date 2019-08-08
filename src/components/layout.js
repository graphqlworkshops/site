/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import SR from "./ScrollReveal"
import { SEO } from "./SEO"
import { OutboundLink } from "gatsby-plugin-amplitude-analytics"

import "../scss/style.scss"

class Layout extends React.Component {
  componentDidMount() {
    const doc = document.documentElement

    doc.classList.remove("no-js")
    doc.classList.add("js")

    document.body.classList.add("has-animations")

    // Reveal animations
    if (document.body.classList.contains("has-animations")) {
      SR.reveal(
        ".hero-title, .hero-paragraph, .newsletter-header, .newsletter-form",
        {
          duration: 1000,
          distance: "40px",
          easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
          origin: "bottom",
          interval: 150,
        }
      )

      SR.reveal(
        ".bubble-3, .bubble-4, .hero-browser-inner, .bubble-1, .bubble-2",
        {
          duration: 1000,
          scale: 0.95,
          easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
          interval: 150,
        }
      )

      SR.reveal(".feature", {
        duration: 600,
        distance: "40px",
        easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
        interval: 100,
        origin: "bottom",
        viewFactor: 0.5,
      })
    }
  }

  render() {
    return (
      <>
        <div className="body-wrap boxed-container">
          <SEO />
          <header className="site-header">
            <div className="container">
              <div className="site-header-inner">
                <div className="brand header-brand">
                  <h1 className="m-0">
                    <a href="/#">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GraphQL Workshop</title>
                        <defs>
                          <linearGradient
                            x1="100%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                            id="logo-gradient-b"
                          >
                            <stop stopColor="#39D8C8" offset="0%" />
                            <stop stopColor="#BCE4F4" offset="47.211%" />
                            <stop stopColor="#838DEA" offset="100%" />
                          </linearGradient>
                          <path
                            d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z"
                            id="logo-gradient-a"
                          />
                          <linearGradient
                            x1="23.065%"
                            y1="25.446%"
                            y2="100%"
                            id="logo-gradient-c"
                          >
                            <stop
                              stopColor="#1274ED"
                              stopOpacity="0"
                              offset="0%"
                            />
                            <stop stopColor="#1274ED" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                          <mask id="logo-gradient-d" fill="#fff">
                            <use xlinkHref="#logo-gradient-a" />
                          </mask>
                          <use
                            fill="url(#logo-gradient-b)"
                            xlinkHref="#logo-gradient-a"
                          />
                          <path
                            fill="url(#logo-gradient-c)"
                            mask="url(#logo-gradient-d)"
                            d="M-16-16h32v32h-32z"
                          />
                        </g>
                      </svg>
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </header>

          <main>
            <section className="hero text-center">
              <div className="container-sm">
                <div className="hero-inner">
                  <h1 className="hero-title h2-mobile mt-0 is-revealing">
                    GraphQL Workshop
                  </h1>
                  <p className="hero-paragraph is-revealing">
                    Learn the new standard for app development in this hands-on
                    workshop.
                  </p>
                  <form
                    name="early_access"
                    className="hero-form newsletter-form field field-grouped is-revealing"
                    method="post"
                    action="/thanks"
                    data-netlify="true"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="early_access"
                    />

                    <div className="control control-expanded">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Your best email&hellip;"
                      />
                    </div>
                    <div className="control">
                      <button
                        className="button button-primary button-block button-shadow"
                        type="submit"
                      >
                        Get early access
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            <section className="features section text-center">
              <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                  <div className="features-wrap">
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <svg
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path
                                d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z"
                                fillOpacity=".24"
                                fill="#A0A6EE"
                              />
                              <path
                                d="M26 54l28-28"
                                stroke="#838DEA"
                                strokeWidth="2"
                                strokeLinecap="square"
                              />
                              <path
                                d="M26 46l20-20M26 38l12-12M26 30l4-4M34 54l20-20M42 54l12-12"
                                stroke="#767DE1"
                                strokeWidth="2"
                                strokeLinecap="square"
                              />
                              <path
                                d="M50 54l4-4"
                                stroke="#838DEA"
                                strokeWidth="2"
                                strokeLinecap="square"
                              />
                            </g>
                          </svg>
                        </div>
                        <h3 className="feature-title">GraphQL Foundations</h3>
                        <p className="text-sm">
                          Where text is visible, people tend to focus on the
                          textual content rather than upon overall presentation.
                        </p>
                      </div>
                    </div>
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <svg
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path
                                d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z"
                                fillOpacity=".24"
                                fill="#75ABF3"
                              />
                              <path
                                d="M34 52V35M40 52V42M46 52V35M52 52V42M28 52V28"
                                stroke="#4D8EF7"
                                strokeWidth="2"
                                strokeLinecap="square"
                              />
                            </g>
                          </svg>
                        </div>
                        <h3 className="feature-title">GraphQL Advanced</h3>
                        <p className="text-sm">
                          Where text is visible, people tend to focus on the
                          textual content rather than upon overall presentation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="features-wrap">
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <svg
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path
                                d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z"
                                fillOpacity=".32"
                                fill="#FF97AC"
                              />
                              <path
                                stroke="#FF6D8B"
                                strokeWidth="2"
                                strokeLinecap="square"
                                d="M49 45h6V25H35v6M43 55h2v-2M25 53v2h2M27 35h-2v2"
                              />
                              <path
                                stroke="#FF6D8B"
                                strokeWidth="2"
                                strokeLinecap="square"
                                d="M43 35h2v2M39 55h-2M33 55h-2M39 35h-2M33 35h-2M45 49v-2M25 49v-2M25 43v-2M45 43v-2"
                              />
                            </g>
                          </svg>
                        </div>
                        <h3 className="feature-title">GraphQL in Production</h3>
                        <p className="text-sm">
                          Where text is visible, people tend to focus on the
                          textual content rather than upon overall presentation.
                        </p>
                      </div>
                    </div>
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <svg
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(24 25)"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <path
                                d="M24.066 36.627c6.628 0 10.087-16.79 10.087-23.418C34.153 6.582 29.128 4 22.501 4 15.874 4 0 17.507 0 24.135c0 6.627 17.439 12.492 24.066 12.492z"
                                fillOpacity=".32"
                                fill="#A0EEE5"
                              />
                              <circle
                                stroke="#39D8C8"
                                strokeWidth="2"
                                strokeLinecap="square"
                                cx="5"
                                cy="4"
                                r="4"
                              />
                              <path
                                stroke="#39D8C8"
                                strokeWidth="2"
                                strokeLinecap="square"
                                d="M23 22h8v8h-8zM11 10l9 9"
                              />
                            </g>
                          </svg>
                        </div>
                        <h3 className="feature-title">GraphQL Federation</h3>
                        <p className="text-sm">
                          Where text is visible, people tend to focus on the
                          textual content rather than upon overall presentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="newsletter section">
              <div className="container-sm">
                <div className="newsletter-inner section-inner">
                  <div className="newsletter-header text-center is-revealing">
                    <h2 className="section-title mt-0">Stay in the know</h2>
                    <p className="section-paragraph">
                      Subscribe to be notified when a new training is announced.
                    </p>
                  </div>
                  <form
                    name="subscribe"
                    className="footer-form newsletter-form field field-grouped is-revealing"
                    method="post"
                    action="/thanks"
                    data-netlify="true"
                  >
                    <input type="hidden" name="form-name" value="subscribe" />
                    <div className="control control-expanded">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Your best email&hellip;"
                      />
                    </div>
                    <div className="control">
                      <button
                        className="button button-primary button-block button-shadow"
                        type="submit"
                      >
                        SUBSCRIBE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </main>

          <footer className="site-footer text-light">
            <div className="container">
              <div className="site-footer-inner">
                <div className="brand footer-brand">
                  <a href="/#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GraphQL Workshop</title>
                      <defs>
                        <path
                          d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z"
                          id="logo-gradient-footer-a"
                        />
                        <linearGradient
                          x1="50%"
                          y1="50%"
                          y2="100%"
                          id="logo-gradient-footer-b"
                        >
                          <stop stopColor="#FFF" stopOpacity="0" offset="0%" />
                          <stop stopColor="#FFF" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <mask id="logo-gradient-footer-c" fill="#fff">
                          <use xlinkHref="#logo-gradient-footer-a" />
                        </mask>
                        <use
                          fillOpacity=".32"
                          fill="#FFF"
                          xlinkHref="#logo-gradient-footer-a"
                        />
                        <path
                          fill="url(#logo-gradient-footer-b)"
                          mask="url(#logo-gradient-footer-c)"
                          d="M-16-16h32v32h-32z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <ul className="footer-links list-reset">
                  <li>
                    <OutboundLink href="mailto:santiagoesteva@gmail.com">
                      Contact
                    </OutboundLink>
                  </li>
                </ul>
                <ul className="footer-social-links list-reset">
                  <li>
                    <OutboundLink
                      href="http://twitter.com/sesteva"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="screen-reader-text">Twitter</span>
                      <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </OutboundLink>
                  </li>
                </ul>
                <div className="footer-copyright">
                  Web design &copy; 2018 Ava, all rights reserved
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
