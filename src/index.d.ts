// load type definitions that come with Cypress module
/// <reference types="cypress" />

/**
 * Options to customize the retry logic
 */
type UserOptions = {
  /**
   * Time to pass with no DOM changes before continuing
   */
  pollInterval: number

  /**
   * Time to pass before exiting with an error
   */
  timeout: number

  /**
   * Options to customize MutationObserver logic
   */
  mutationObserver: MutationObserverInit
}

declare namespace Cypress {
  interface Chainable {
    /**
     * @param userOptions {Object} Options to customize the retry logic
     * @param userOptions.pollInterval {number} Time to pass with no DOM changes before continuing
     * @param userOptions.timeout {number} Time to pass before exiting with an error
     * @param userOptions.mutationObserver {MutationObserverInit} Options to customize MutationObserver logic
     */
    waitForStableDOM(userOptions: UserOptions): Chainable<JQuery<HTMLElement>>
  }
}
