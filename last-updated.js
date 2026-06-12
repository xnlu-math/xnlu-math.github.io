(function() {
    var githubCommitsApi = 'https://api.github.com/repos/xnlu-math/xnlu-math.github.io/commits';

    function formatDate(date) {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function setLastUpdated(elements, date) {
        if (!date || Number.isNaN(date.getTime())) return;

        var dateText = formatDate(date);
        var dateValue = date.toISOString().slice(0, 10);

        elements.forEach(function(element) {
            element.textContent = dateText;
            element.setAttribute('datetime', dateValue);
        });
    }

    function getCurrentPagePath() {
        var path = window.location.pathname.replace(/^\/+/, '');
        return path || 'index.html';
    }

    function shouldUseGitHubCommitDate() {
        return window.location.hostname === 'xnlu-math.github.io';
    }

    function fetchGitHubCommitDate() {
        if (!shouldUseGitHubCommitDate() || !window.fetch) {
            return Promise.resolve(null);
        }

        var url = githubCommitsApi +
            '?path=' + encodeURIComponent(getCurrentPagePath()) +
            '&per_page=1';

        return fetch(url, {
            headers: { Accept: 'application/vnd.github+json' }
        })
            .then(function(response) {
                return response.ok ? response.json() : null;
            })
            .then(function(commits) {
                if (!commits || !commits.length) return null;

                var commit = commits[0].commit || {};
                var dateString = commit.committer && commit.committer.date ||
                    commit.author && commit.author.date;
                return dateString ? new Date(dateString) : null;
            })
            .catch(function() {
                return null;
            });
    }

    function updateLastUpdated() {
        var elements = document.querySelectorAll('[data-last-updated]');
        if (!elements.length || !document.lastModified) return;

        var lastModified = new Date(document.lastModified);
        setLastUpdated(elements, lastModified);

        fetchGitHubCommitDate().then(function(commitDate) {
            setLastUpdated(elements, commitDate);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateLastUpdated);
    } else {
        updateLastUpdated();
    }
})();
