/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import SR from "./ScrollReveal"
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
        <div class="body-wrap boxed-container">
          <header class="site-header">
            <div class="container">
              <div class="site-header-inner">
                <div class="brand header-brand">
                  <h1 class="m-0">
                    <a href="/#">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Ava</title>
                        <defs>
                          <linearGradient
                            x1="100%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                            id="logo-gradient-b"
                          >
                            <stop stop-color="#39D8C8" offset="0%" />
                            <stop stop-color="#BCE4F4" offset="47.211%" />
                            <stop stop-color="#838DEA" offset="100%" />
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
                              stop-color="#1274ED"
                              stop-opacity="0"
                              offset="0%"
                            />
                            <stop stop-color="#1274ED" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
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
            <section class="hero text-center">
              <div class="container-sm">
                <div class="hero-inner">
                  <h1 class="hero-title h2-mobile mt-0 is-revealing">
                    GraphQL Workshop
                  </h1>
                  <p class="hero-paragraph is-revealing">
                    Learn the new standard for app development in this hands-on
                    workshop.
                  </p>
                  <form
                    name="early_access"
                    class="hero-form newsletter-form field field-grouped is-revealing"
                    method="post"
                    netlify
                  >
                    <div class="control control-expanded">
                      <input
                        class="input"
                        type="email"
                        name="email"
                        placeholder="Your best email&hellip;"
                      />
                    </div>
                    <div class="control">
                      <button
                        class="button button-primary button-block button-shadow"
                        type="submit"
                      >
                        Get early access
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            <section class="features section text-center">
              <div class="container">
                <div class="features-inner section-inner has-bottom-divider">
                  <div class="features-wrap">
                    <div class="feature is-revealing">
                      <div class="feature-inner">
                        <div class="feature-icon">
                          <svg
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path
                                d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z"
                                fill-opacity=".24"
                                fill="#A0A6EE"
                              />
                              <path
                                d="M26 54l28-28"
                                stroke="#838DEA"
                                stroke-width="2"
                                stroke-linecap="square"
                              />
                              <path
                                d="M26 46l20-20M26 38l12-12M26 30l4-4M34 54l20-20M42 54l12-12"
                                stroke="#767DE1"
                                stroke-width="2"
                                stroke-linecap="square"
                              />
                              <path
                                d="M50 54l4-4"
                                stroke="#838DEA"
                                stroke-width="2"
                                stroke-linecap="square"
                              />
                            </g>
                          </svg>
                        </div>
                        <h3 class="feature-title">GraphQL Foundations</h3>
                        <p class="text-sm">
                          Where text is visible, people tend to focus on the
                          textual content rather than upon overall presentation.
                        </p>
                      </div>
                    </div>
                    <div class="feature is-revealing">
                      <div class="feature-inner">
                        <div class="feature-icon">
                          <svg
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path
                                d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z"
                                fill-opacity=".24"
                                fill="#75ABF3"
                              />
                              <path
                                d="M34 52V35M40 52V42M46 52V35M52 52V42M28 52V28"
                                stroke="#4D8EF7"
                                stroke-width="2"
                                stroke-linecap="square"
                              />
                            </g>
                          </svg>
                        </div>
                        <h3 class="feature-title">GraphQL Advanced</h3>
                        <p class="text-sm">
                          Where text is visible, people tend to focus on the
                          textual content rather than upon overall presentation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="features-wrap">
                    <div class="feature is-revealing">
                      <div class="feature-inner">
                        <div class="feature-icon">
                          <svg
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path
                                d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z"
                                fill-opacity=".32"
                                fill="#FF97AC"
                              />
                              <path
                                stroke="#FF6D8B"
                                stroke-width="2"
                                stroke-linecap="square"
                                d="M49 45h6V25H35v6M43 55h2v-2M25 53v2h2M27 35h-2v2"
                              />
                              <path
                                stroke="#FF6D8B"
                                stroke-width="2"
                                stroke-linecap="square"
                                d="M43 35h2v2M39 55h-2M33 55h-2M39 35h-2M33 35h-2M45 49v-2M25 49v-2M25 43v-2M45 43v-2"
                              />
                            </g>
                          </svg>
                        </div>
                        <h3 class="feature-title">GraphQL in Production</h3>
                        <p class="text-sm">
                          Where text is visible, people tend to focus on the
                          textual content rather than upon overall presentation.
                        </p>
                      </div>
                    </div>
                    <div class="feature is-revealing">
                      <div class="feature-inner">
                        <div class="feature-icon">
                          <svg
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(24 25)"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                d="M24.066 36.627c6.628 0 10.087-16.79 10.087-23.418C34.153 6.582 29.128 4 22.501 4 15.874 4 0 17.507 0 24.135c0 6.627 17.439 12.492 24.066 12.492z"
                                fill-opacity=".32"
                                fill="#A0EEE5"
                              />
                              <circle
                                stroke="#39D8C8"
                                stroke-width="2"
                                stroke-linecap="square"
                                cx="5"
                                cy="4"
                                r="4"
                              />
                              <path
                                stroke="#39D8C8"
                                stroke-width="2"
                                stroke-linecap="square"
                                d="M23 22h8v8h-8zM11 10l9 9"
                              />
                            </g>
                          </svg>
                        </div>
                        <h3 class="feature-title">GraphQL Federation</h3>
                        <p class="text-sm">
                          Where text is visible, people tend to focus on the
                          textual content rather than upon overall presentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="newsletter section">
              <div class="container-sm">
                <div class="newsletter-inner section-inner">
                  <div class="newsletter-header text-center is-revealing">
                    <h2 class="section-title mt-0">Stay in the know</h2>
                    <p class="section-paragraph">
                      Subscribe to be notified when a new training is announced.
                    </p>
                  </div>
                  <form
                    name="subscribe"
                    class="footer-form newsletter-form field field-grouped is-revealing"
                    method="post"
                    netlify
                  >
                    <div class="control control-expanded">
                      <input
                        class="input"
                        type="email"
                        name="email"
                        placeholder="Your best email&hellip;"
                      />
                    </div>
                    <div class="control">
                      <button
                        class="button button-primary button-block button-shadow"
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

          <footer class="site-footer text-light">
            <div class="container">
              <div class="site-footer-inner">
                <div class="brand footer-brand">
                  <a href="/#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Ava</title>
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
                          <stop
                            stop-color="#FFF"
                            stop-opacity="0"
                            offset="0%"
                          />
                          <stop stop-color="#FFF" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <mask id="logo-gradient-footer-c" fill="#fff">
                          <use xlinkHref="#logo-gradient-footer-a" />
                        </mask>
                        <use
                          fill-opacity=".32"
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
                <ul class="footer-links list-reset">
                  <li>
                    <a href="mailto:santiagoesteva@gmail.com">Contact</a>
                  </li>
                </ul>
                <ul class="footer-social-links list-reset">
                  <li>
                    <a href="http://twitter.com/sesteva" target="_blank">
                      <span class="screen-reader-text">Twitter</span>
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
                    </a>
                  </li>
                </ul>
                <div class="footer-copyright">
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
