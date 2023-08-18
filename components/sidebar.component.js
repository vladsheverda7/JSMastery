export class SideBarComponent {
    #page;
    burgerMenuButton;
    logoutButton;

    constructor(page) {
        this.#page = page;
        this.burgerMenuButton = this.#page.locator('#react-burger-menu-btn');
        this.logoutButton = this.#page.locator('#logout_sidebar_link');
    }
}
