January 24 2026:

I want to add new fields in my velite schema and then add them to my components
Date: January 24 2026
Status: Uncompleted

January 26 2026:

Working on making Navigation bar a component
Status: Uncompleted

Need to also fix homepage from -> a directory to a more welcoming page about myself

February 4 2026:

Summary: Refactored the Navbar component to fix critical responsiveness bugs where the mobile menu was inaccessible. Restructured the DOM to properly separate desktop and mobile viewports.

Bug Fixes:

    Fixed "Nesting Trap": The mobile hamburger button was previously nested inside the hidden md:flex container, causing it to disappear on mobile screens along with the desktop links. Moved the button to the parent flex container.

    Fixed Layout Issues: Added a dedicated flex container (flex justify-between items-center) wrapping the Logo, Desktop Links, and Mobile Button to ensure correct alignment.

    Fixed Icon Visibility:

        Corrected Tailwind typo text-grey-200 to text-gray-200.

        Added explicit text-white class to SVG elements to ensure stroke="currentColor" renders correctly against the dark background.

    Fixed Dropdown Logic: Re-implemented the {isOpen && ...} conditional block which was previously missing, allowing the menu to actually render when toggled.

UI/UX Improvements:

    Z-Index Layering: Added relative and z-50 to the main <nav> tag to ensure the dropdown menu appears above page content (hero sections/images).

    Touch Targets: Ensured the mobile button has adequate padding (p-2) for easier tapping.

Technical Notes:

    Verified "use client"; directive is present at the top of the file to enable React state (useState) for the toggle functionality.

    Cleaned up redundant CSS classes in the SVG paths.