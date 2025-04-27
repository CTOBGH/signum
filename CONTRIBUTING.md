

# Contributing to Signum

Thanks for considering contributing to Signum! We truly appreciate your interest and effort. 

This document provides guidelines to help you contribute effectively.

## Code of Conduct

The Signum project is committed to fostering a welcoming, inclusive, and respectful community. All participants are expected to adhere to our **[Code of Conduct](CODE_OF_CONDUCT.md)**. Please read it before participating. 

## How You Can Contribute

There are many ways to contribute to Signum's development and adoption:

* **Report Bugs:** Identify and report issues in the standard's definition, documentation, code examples, or supporting libraries (CSS, JS, etc.).
* **Suggest Enhancements:** Propose improvements to the standard, documentation clarity, usability, or new features for supporting tools.
* **Propose Standard Changes:** Suggest modifications, clarifications, or additions to the `STANDARD.md` itself (please expect thorough discussion for standard changes).
* **Improve Documentation:** Help make the `STANDARD.md`, `USAGE.md`, code docstrings, and other documentation clearer, more accurate, and more comprehensive. Correct typos and grammatical errors.
* **Submit Code:** Contribute to the development of official Signum libraries (`signum-css`, `signum-js`, future packages) by fixing bugs or adding features.
* **Add Examples:** Contribute real-world or illustrative examples to Appendix of the `STANDARD.md` or the `USAGE.md`.
* **Refine Visual Assets:** Help design, refine, or provide feedback on the standard Signum icons.
* **Provide Feedback:** Share your experience using Signum – what works well, what's confusing, where are the pain points?

## Getting Started

1.  **Familiarise Yourself:** Read the core project documents:
    * [README.md](README.md) (Project overview and vision)
    * [STANDARD.md](STANDARD.md) (The definitive specification)
    * [USAGE.md](USAGE.md) (Practical guide for applying labels)
2.  **Check Existing Issues & Discussions:** Look through the [GitHub Issues][Link to Issues] and [GitHub Discussions][Link to Discussions] (if enabled) to see if your bug report or idea has already been submitted or discussed.
3.  **Find Your Niche:** Decide how you'd like to contribute based on the list above.

## Contribution Workflow

Please follow these workflows for different types of contributions:

### Reporting Bugs

1.  **Search:** Check the [GitHub Issues][Link to Issues] to ensure the bug hasn't already been reported.
2.  **Open Issue:** If it's a new bug, open a new issue. Use the "Bug Report" template if available.
3.  **Details:** Provide as much detail as possible:
    * A clear and descriptive title.
    * Steps to accurately reproduce the bug.
    * What you expected to happen.
    * What actually happened (screenshots, error messages are helpful).
    * Your environment (e.g., browser version, OS, library version) if relevant.

### Suggesting Enhancements or Standard Changes

1.  **Search:** Check [GitHub Issues][Link to Issues] and [Discussions][Link to Discussions] for existing related suggestions.
2.  **Open Issue:** If your idea is new, open a new issue. Use the "Feature Request" or "Standard Proposal" template if available.
3.  **Explain:** Clearly describe your suggestion:
    * A clear and descriptive title.
    * The problem your proposal solves or the enhancement it provides.
    * Your proposed solution or idea in as much detail as possible.
    * Any potential benefits or drawbacks you foresee.
4.  **Discuss:** Be prepared for discussion in the issue thread. Significant changes, especially to the `STANDARD.md`, will require community feedback and maintainer consensus before implementation work begins.

### Submitting Pull Requests (Code, Documentation, Assets)

We actively welcome Pull Requests (PRs)!

1.  **Issue Association:** Ideally, ensure there's an associated Issue discussing the bug fix or feature before starting work on a PR, especially for larger changes. You can create one if needed. Link your PR to the relevant issue (e.g., "Fixes #123").
2.  **Fork & Clone:** Fork the main Signum repository to your own GitHub account, then clone your fork locally.
    ```bash
    git clone [https://github.com/YOUR_USERNAME/signum.git](https://github.com/YOUR_USERNAME/signum.git)
    cd signum
    ```
3.  **Create Branch:** Create a new branch for your changes, based off the `main` branch. Use a descriptive name (e.g., `feature/add-jsonld-parser`, `fix/readme-typo`, `docs/clarify-level-h`).
    ```bash
    git checkout -b feature/your-feature-name
    ```
4.  **Make Changes:** Implement your code, documentation, or asset changes locally.
5.  **Add Tests:** If you are contributing code, please include relevant unit tests or integration tests. Ensure existing tests pass.
6.  **Follow Style Guides:** Adhere to any project style guides (see section below). Ensure code is linted if linters are configured.
7.  **Commit Changes:** Make clear, logical commits. Write informative commit messages. We recommend following the [Conventional Commits](https://www.conventionalcommits.org/) specification, but it's not strictly enforced initially.
    ```bash
    git add .
    git commit -m "feat: Add JSON-LD parsing function"
    ```
8.  **Push Branch:** Push your changes to your fork on GitHub.
    ```bash
    git push origin feature/your-feature-name
    ```
9.  **Open Pull Request:** Navigate to the main Signum repository on GitHub and open a Pull Request from your branch (`YOUR_USERNAME/signum/feature/your-feature-name`) to the main Signum repository's `main` branch.
10. **Describe PR:** Fill out the PR template if provided. Clearly explain the changes made, the reasoning behind them, and link the associated Issue.
11. **Review & Iterate:** Project maintainers will review your PR. Address any feedback or requested changes promptly. Further discussion might happen on the PR thread. Once approved, your contribution will be merged!

## Communication Channels

* **[GitHub Issues][Link to Issues]:** Best for specific bug reports and feature/standard proposals.
* **[GitHub Discussions][Link to Discussions]:** Best for general questions, broader ideas, community chat, and showcasing uses of Signum (Use the "Show and tell" category!).

Thank you again for contributing to making the digital world more transparent with Signum!