1. Error Boundaries are used to catch Javascript errors in theri chilc components + log those errors and DISPLAY A FALLBACK UI(INSTEAD OF THE COMPONENT THAT CRASHED.).

2. Error Boundaries do not catch errors
                               -which have originated in the error boundaries themselves
                               -Event Handlers.
                               -Async code