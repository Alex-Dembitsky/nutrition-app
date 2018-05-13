let mobileDetermine = function () {
    return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
};

window.isMobile = mobileDetermine();