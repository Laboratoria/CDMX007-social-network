const app = {
    pages: [],
    show: new Event('show'),
    init: () => {
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.poppin);
    },
    nav: (ev) => {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    poppin: (ev) =>{
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.getElementById(hash).dispatchEvent(app.show);
    }
}
document.addEventListener('DOMContentLoaded', app.init);
