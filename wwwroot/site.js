// site.js
function removeModalBackdrops() {
    const backdrops = document.querySelectorAll('.modal-backdrop.fade.show');
    backdrops.forEach(backdrop => {
        backdrop.remove();
    });
}