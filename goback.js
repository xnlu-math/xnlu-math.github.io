/**
 * Go back functionality by Xiao-Nan LU
 * Improved version with error handling and flexibility
 */

const homePage = "index.html";
const scriptUrl = document.currentScript ? document.currentScript.src : "";

function isEmbeddedPage() {
    try {
        return window.self !== window.top;
    } catch (error) {
        return true;
    }
}

function getHomePageUrl() {
    return scriptUrl ? new URL(homePage, scriptUrl).href : homePage;
}

function getGoBackSeparator(container) {
    var next = container.nextElementSibling;
    if (next && next.tagName === 'HR') {
        return next;
    }

    var previous = container.previousElementSibling;
    if (previous && previous.tagName === 'HR') {
        return previous;
    }

    return null;
}

function setGoBackVisibility(container, isVisible) {
    var separator = getGoBackSeparator(container);
    var footer = container.closest('footer');

    container.hidden = !isVisible;
    if (separator) {
        separator.hidden = !isVisible;
    }

    if (!footer) return;

    if (isVisible) {
        footer.hidden = false;
        return;
    }

    var hasOtherVisibleContent = Array.prototype.some.call(footer.children, function(child) {
        return child !== container &&
            child !== separator &&
            !child.hidden &&
            child.textContent.trim();
    });

    footer.hidden = !hasOtherVisibleContent;
}

/**
 * Creates a "Go back" link in the specified container
 * @param {string} containerId - ID of the container element (defaults to 'goBackContainer')
 * @param {string} linkText - Text to display for the link (defaults to "Go back to Xiao-Nan Lu's homepage")
 */
function generateGoBack(containerId = 'goBackContainer', linkText = "Go back to Xiao-Nan Lu's homepage") {
    // Find the container element
    const container = document.getElementById(containerId);

    // Exit if container not found
    if (!container) {
        console.warn(`Container element with ID '${containerId}' not found.`);
        return;
    }

    container.innerHTML = '';

    if (isEmbeddedPage()) {
        setGoBackVisibility(container, false);
        return;
    }

    setGoBackVisibility(container, true);

    // Create the paragraph element
    const paragraph = document.createElement('p');
    paragraph.className = 'go-back-link'; // Add a class for styling

    // Create the link
    const link = document.createElement('a');
    link.href = getHomePageUrl();
    link.target = '_top';
    link.textContent = linkText;

    // Add content to paragraph
    paragraph.appendChild(document.createTextNode('[ '));
    paragraph.appendChild(link);
    paragraph.appendChild(document.createTextNode(' ]'));

    // Add to container
    container.appendChild(paragraph);
}

/**
 * Toggles visibility of an element
 * @param {string} elementId - ID of the element to toggle
 */
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.warn(`Element with ID '${elementId}' not found.`);
        return;
    }

    // Get the current display state
    const currentDisplay = window.getComputedStyle(element).display;

    // Toggle between 'none' and the element's natural display type
    element.style.display = (currentDisplay === 'none') ? '' : 'none';
}

// Backwards compatibility for the old function name
function isHidden(elementId) {
    toggleVisibility(elementId);
}

// Automatically execute generateGoBack when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    generateGoBack();
});
