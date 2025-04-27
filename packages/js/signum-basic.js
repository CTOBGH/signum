/**
 * Signum Viewer JS v1.0.0 (MVP)
 * Reads Signum metadata from HTML meta tags and renders visual labels
 * into placeholder elements.
 *
 * Homepage: [Link to your Signum project repo/website]
 * License: MIT 
 *
 * Requires: signum-base.css for styling.
 * Usage:
 * 1. Include this script in your HTML.
 * 2. Include signum-basic.css.
 * 3. Add Signum meta tags to your HTML <head>.
 * 4. Place empty elements with the attribute `data-signum-placeholder` where
 * you want labels to appear. E.g.: <span data-signum-placeholder></span>
 */
(function() {
    'use strict';
  
    // --- Configuration ---
    const PLACEHOLDER_SELECTOR = '[data-signum-placeholder]';
    const METADATA_PREFIX = 'signum:';
    const CSS_BASE_CLASS = 'signum-label';
  
    // Mapping from level codes to human-readable names (for tooltips etc.)
    const SIGNUM_LEVEL_NAMES = {
      'H': 'Level 0: Human',
      'H-AE': 'Level 1: Human, AI-Enhanced',
      'AI-HR': 'Level 2: AI-Assisted, Human-Reviewed',
      'AI-HP': 'Level 3: AI-Generated, Human-Prompted',
      'AI-FA': 'Level 4: Fully Automated AI'
    };
  
    // --- Helper Functions ---
  
    /**
     * Reads content from a <meta> tag by name.
     * @param {string} name - The full name attribute of the meta tag (e.g., 'signum:level').
     * @returns {string|null} - The content attribute value, or null if not found.
     */
    function getMetaContent(name) {
      const element = document.querySelector(`meta[name="${name}"]`);
      return element ? element.getAttribute('content') : null;
    }
  
    /**
     * Formats the tooltip text from the collected metadata.
     * Uses &#10; for newlines within the HTML attribute.
     * @param {object} metadata - Object containing Signum metadata values.
     * @returns {string} - Formatted tooltip text.
     */
    function formatTooltipText(metadata) {
      const levelName = SIGNUM_LEVEL_NAMES[metadata.level] || 'Unknown Level';
      let tooltipLines = [
        `${levelName} (Standard v${metadata.version || 'N/A'})`
      ];
  
      if (metadata.asserter) {
        let displayAsserter = metadata.asserter;
        // Attempt to prettify known asserter formats for display
        if (displayAsserter.startsWith('handle:')) {
          const parts = displayAsserter.split(':');
          if (parts.length === 3) displayAsserter = `${parts[2]} on ${parts[1]}`;
        } else if (displayAsserter.startsWith('uri:')) {
          displayAsserter = displayAsserter.substring(4);
        }
        tooltipLines.push(`Asserted by: ${displayAsserter}`);
      }
  
      if (metadata.timestamp) {
        tooltipLines.push(`Timestamp: ${metadata.timestamp}`);
      }
  
      if (metadata.tool) {
        // Handle potential semicolon-delimited string from meta tags
        const tools = metadata.tool.includes(';') ? metadata.tool.split(';').map(t => t.trim()).filter(t => t) : [metadata.tool];
        if (tools.length > 0) {
          tooltipLines.push(`Tool(s): ${tools.join(', ')}`);
        }
      }
  
      if (metadata.history) {
        // Just display the link/reference directly for now
        tooltipLines.push(`History: ${metadata.history}`);
      }
  
      return tooltipLines.join('&#10;'); // Use HTML entity for newline in attribute
    }
  
    /**
     * Generates the CSS class name for a specific Signum level.
     * @param {string} levelCode - The Signum level code (e.g., 'H-AE').
     * @returns {string} - The corresponding CSS class name (e.g., 'signum-h-ae').
     */
     function getLevelClassName(levelCode) {
         // Ensure consistency with CSS: lowercase, keep hyphen, remove others if any
         // Assuming CSS classes are like 'signum-h', 'signum-h-ae', 'signum-ai-hr' etc.
         return `signum-${levelCode.toLowerCase()}`;
     }
  
    // --- Main Execution ---
  
    function renderSignumLabels() {
      // 1. Read All Signum Metadata from <meta> tags
      const metadata = {
        level: getMetaContent(METADATA_PREFIX + 'level'),
        version: getMetaContent(METADATA_PREFIX + 'version'),
        timestamp: getMetaContent(METADATA_PREFIX + 'timestamp'),
        tool: getMetaContent(METADATA_PREFIX + 'tool'),
        asserter: getMetaContent(METADATA_PREFIX + 'asserter'),
        history: getMetaContent(METADATA_PREFIX + 'history')
      };
  
      // 2. Validate Mandatory Metadata
      // Check for required fields based on STANDARD.md v1.0.0 decisions
      const missingFields = [];
      if (!metadata.level) missingFields.push('signum:level');
      if (!metadata.version) missingFields.push('signum:version');
      if (!metadata.timestamp) missingFields.push('signum:timestamp'); // Now mandatory
      if (!metadata.asserter) missingFields.push('signum:asserter'); // Now required
  
      if (missingFields.length > 0) {
        console.warn(`Signum: Mandatory metadata missing (${missingFields.join(', ')}). Cannot render labels.`);
        return;
      }
  
      // Check if level is valid
      if (!SIGNUM_LEVEL_NAMES[metadata.level]) {
         console.warn(`Signum: Invalid signum:level value "${metadata.level}" found. Cannot render labels.`);
         return;
      }
  
  
      // 3. Find Placeholder Elements
      const placeholders = document.querySelectorAll(PLACEHOLDER_SELECTOR);
      if (placeholders.length === 0) {
        // console.info('Signum: No placeholder elements found.'); // Optional info log
        return; // No work to do
      }
  
      // 4. Prepare Tooltip and Accessibility Texts
      const tooltipText = formatTooltipText(metadata);
      const accessibleLabel = `Signum Label: ${SIGNUM_LEVEL_NAMES[metadata.level]} (Version ${metadata.version})`;
  
      // 5. Render Labels into Placeholders
      placeholders.forEach(placeholder => {
        // Clear existing content (optional, prevents duplicates if script runs multiple times)
        placeholder.innerHTML = '';
  
        // Create the label element (using span by default)
        const labelElement = document.createElement('span');
  
        // Apply base and level-specific CSS classes
        labelElement.classList.add(CSS_BASE_CLASS);
        labelElement.classList.add(getLevelClassName(metadata.level));
  
        // Add tooltip data attribute (for CSS :hover styles)
        labelElement.setAttribute('data-tooltip', tooltipText);
  
        // Add accessibility attributes
        labelElement.setAttribute('aria-label', accessibleLabel);
        labelElement.setAttribute('role', 'img'); // Semantically represent as an icon/image
        labelElement.setAttribute('tabindex', '0'); // Make it focusable for keyboard users / tooltips
  
        // Append the styled label element to the placeholder
        placeholder.appendChild(labelElement);
      });
  
      // console.info(`Signum: Rendered ${placeholders.length} label(s).`); // Optional info log
    }
  
    // --- Initialization ---
  
    // Run the rendering function once the DOM is ready
    if (document.readyState === 'loading') {
      // Loading hasn't finished yet
      document.addEventListener('DOMContentLoaded', renderSignumLabels);
    } else {
      // `DOMContentLoaded` has already fired
      renderSignumLabels();
    }
  
  })(); // End IIFE