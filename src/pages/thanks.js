import React from "react"

export default () => (
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
                You got it!
              </h1>
              <p class="hero-paragraph is-revealing">
                We will let you know as soon a new workshop is announced. We
                will not spam you with any other content.
              </p>
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
                      <stop stop-color="#FFF" stop-opacity="0" offset="0%" />
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
