/**
 * categories.js — Single source of truth for category names.
 * Change a name here and it updates everywhere on the site automatically:
 * homepage tiles, portfolio filter tabs, and project page labels.
 */
const SITE_CATEGORIES = [
  { id: 'murals',               name: 'Murals',               homepage: true },
  { id: 'art-decor',            name: 'Art & Decor',          homepage: true },
  { id: 'exterior-signage',     name: 'Exterior Signage',     homepage: true },
  { id: 'ada-wayfinding',       name: 'ADA & Wayfinding',     homepage: true },
  { id: 'interior-placemaking', name: 'Interior Placemaking', homepage: true },
  { id: 'vehicle-wraps',        name: 'Vinyl Wraps',          homepage: true },
];

function getCategoryById(id) {
  return SITE_CATEGORIES.find(c => c.id === id) || null;
}

// Auto-fill any element with data-category-label="id1 id2 ..."
// Multiple space-separated IDs are joined with " · "
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-category-label]').forEach(el => {
    const ids   = el.dataset.categoryLabel.trim().split(/\s+/);
    const names = ids.map(id => getCategoryById(id)?.name).filter(Boolean);
    if (names.length) el.textContent = names.join(' · ');
  });
});
