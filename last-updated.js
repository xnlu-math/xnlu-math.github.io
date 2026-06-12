(function() {
    function formatDate(date) {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function updateLastUpdated() {
        var elements = document.querySelectorAll('[data-last-updated]');
        if (!elements.length || !document.lastModified) return;

        var lastModified = new Date(document.lastModified);
        if (Number.isNaN(lastModified.getTime())) return;

        var dateText = formatDate(lastModified);
        var dateValue = lastModified.toISOString().slice(0, 10);

        elements.forEach(function(element) {
            element.textContent = dateText;
            element.setAttribute('datetime', dateValue);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateLastUpdated);
    } else {
        updateLastUpdated();
    }
})();
